//declaring variables for using libraries
const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()
const bodyParser = require('body-parser')
const mongojs = require('mongojs')
const db = mongojs('notes',['note'])
let ObjectId = mongojs.ObjectId
// router.get('/homecontent',function(req,res){
//     res.send([{text:"This is home"}]);
// })

// router.get('/aboutcontent',function(req,res){
//     res.send([{text:"This is about"}]);
// })

// router.get('/contactcontent',function(req,res){
//     res.send([{text:"This is contact"}]);
// })

//to access html body
app.use(bodyParser.urlencoded({ extended: true }));

//when a post request arrives
router.post('/submit',function(req,res){
    console.log(req.body);
    let newItem = {
        title: req.body.data.title,
        body: req.body.data.body
    }
    db.note.insert(newItem, function(err,result){
        if(err){
            console.log("DB insert error:",err)
        }
    })
    //res.send(newItem);
    //console.log(req.body.title,req.body.Body)
})

router.get('/show',function(req,res){
    let all_items = [];
    db.note.find(function(err,items){
        console.log(items);
        all_items = items; 
        res.send(all_items); 
    });
    /*let items = [
        {
            title:"Homework",
            body:"Complete network security assignment",
        },
        {
            title:"ToDo",
            body:"Laundry, bill payments"
        },
        {
            title:"Weekend Plans",
            body:"Watch Deadpool 2"
        }
        ]
    */   
})

//delete
app.delete('/delete/:id',function(req,res){
    db.note.remove({_id: ObjectId(req.params.id)},function(err,result){
        if(err){
            console.log(err);
        }
    })
})

//build folder is static and index file will be displayed
app.use(express.static(path.resolve(__dirname, './build')));

//router should route from 'http://website.com/'
app.use('/',router)

/*app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, './react-ui/build', 'index.html'));
  });
*/

//listen on 3000 port
app.listen(5000, () => console.log('Active on 5000 port.'));
