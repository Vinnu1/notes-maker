//declaring variables for using libraries
const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()
const bodyParser = require('body-parser')
const mongojs = require('mongojs')
const db = mongojs.ObjectId
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
    //res.send(newItem);
    //console.log(req.body.title,req.body.Body)
})

router.get('/show',function(req,res){
    let items = [
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
    
    res.send(items);    
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
app.listen(3000, () => console.log('Active on 3000'));