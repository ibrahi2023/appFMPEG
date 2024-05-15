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
app.get("/LivestreaMPD",(req,res)=>{
  res.render("LivestreaMPD",{message:"",user:"admin"});
});
app.get("/scal256@144",(req,res)=>{
    res.render("scalMPD/scal256",{message:"",user:"admin"});
  });
  app.get("/scal720@480",(req,res)=>{
    res.render("scalMPD/scal720",{message:"",user:"admin"});
  });
  app.get("/scal1190@1080",(req,res)=>{
    res.render("scalMPD/scal1190",{message:"",user:"admin"});
  });
  app.get("/scaleAuto",(req,res)=>{
    res.render("scalMPD/scaleAuto",{message:"",user:"admin"});
  });
  app.get("/downloadVideo",(req,res)=>{
    const filelink="public/output/autoscale/Dolphin.mpd"
    res.download(filelink,(error)=>{
      //console.log(error)
    })  
  })
 
    
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

//@desc     Camera Authentication