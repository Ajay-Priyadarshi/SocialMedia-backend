import express from "express";
import { getAllBlogs } from "../controllers/blog-controller.js";
import { addBlog } from "../controllers/blog-controller.js";
import { updateBlog } from "../controllers/blog-controller.js";
import { getById } from "../controllers/blog-controller.js";
import { del } from "../controllers/blog-controller.js";
import { getByUserId } from "../controllers/blog-controller.js";


const blogRouter = express.Router();

blogRouter.get("/",getAllBlogs)
blogRouter.post('/add', addBlog)
blogRouter.put('/update/:id', updateBlog)
blogRouter.get('/:id', getById)
blogRouter.get('/delete/:id', del)
blogRouter.get('/user/:id', getByUserId)

export default blogRouter;