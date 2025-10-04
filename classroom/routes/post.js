const express = require("express");
const router = express.Router();



// post
    // index 
    router.get("/",(req, res) =>  {
      res.send("GET for post");
    })

    //show 
    router.get("//:id",(req, res) =>  {
      res.send("GET for  post id");
    })
     //post
    router.post("/",(req, res) =>  {
      res.send("POST for  posts");
    })

     //delete 
    router.delete("/:id",(req, res) =>  {
      res.send("DELETE for post id");
    })

        module.exports = router;