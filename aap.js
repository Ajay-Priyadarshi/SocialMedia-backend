import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-route.js"
import blogRoute from "./routes/blog-route.js";

const aap = express();
aap.use(express.json());
aap.use("/api/user", router);
aap.use("/api/blog", blogRoute)

mongoose.connect("mongodb+srv://<username>:<password>@blog.yiv32q0.mongodb.net/<database>?retryWrites=true&w=majority").then(()=>{
    console.log("mongodb connected")
})

aap.use('/api', (req, res, next)=>{
    res.send("helloworld");
})

aap.listen(5000, ()=>{
    console.log("Server started")
});

//jugrq6sRvV07oVJ4
