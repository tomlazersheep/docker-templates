
const express = require("express");
const routes = require("./router");
const mongoose = require("mongoose");


mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);


mongoose.connect('mongodb+srv://adminul:pachulo-01@dev.vouau.mongodb.net/feisDev?retryWrites=true&w=majority')
.then(()=>{
  console.log("connected ok");
})
.catch((err)=> {
  console.log("ERROR: ", err);
});



const app = express();

app.use("/", routes);

app.listen(3000);
