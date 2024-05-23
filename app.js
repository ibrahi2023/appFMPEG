const express = require("express");
const app = express();
const  router  =  express.Router();
app.use(router);
// view engine setup
var path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.get("/SelecteStream",(req,res)=>{
  res.render("SelecteStream",{message:"",user:"admin"});
});
app.get("/",(req,res)=>{
    res.render("SelecteStream",{message:"",user:"admin"});
  });
  app.post("/getmenu",(req,res)=>{
    res.render("SelecteStream",{message:"",user:"admin"});
  });
app.get("/LivestreaMPD",(req,res)=>{
  res.render("LivestreaMPD",{message:"",user:"admin"});
});
  app.post("/scaleAuto",(req,res)=>{
    res.render("scalMPD/scaleAuto",{message:"",user:"admin"});
  });
  app.post("/MP4600",(req,res)=>{
    const user=req.body.user;
    res.render("scalMPD/MP4/MP4600P",{message:"",user:user});
  })
  app.post("/MP4720",(req,res)=>{
    const user=req.body.user;
    res.render("scalMPD/MP4/MP4720P",{message:"",user:user});
  })
  app.post("/MP41080",(req,res)=>{
    const user=req.body.user;
    res.render("scalMPD/MP4/MP41080P",{message:"",user:user});
  })
  app.get("/downloadVideo/:filelink",(req,res)=>{
    const {filelink}=req.params;
    res.download(filelink.replaceAll("@","/"),(error)=>{
    //  console.log(error) 
    })
    
 })
  
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

//@desc     Camera Authentication