import "dotenv/config";

import express from "express";
import type { Request, Response } from "express";
import nunjucks from "nunjucks";
import blogPosts from "./data/blogPosts.json";
import { toSlug, formatDate } from "./utils/posts";

import cors from "cors";
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.static("static"));

nunjucks.configure("src/templates", {
  autoescape: true,
  express: app,
});

// Enhance blogPosts with formatted data
const enhancedBlogPosts = blogPosts.map((post) => ({
  ...post,
  slug: toSlug(post.title),
  formattedDate: formatDate(post.createdAt),
}));

app.get("/", (req: Request, res: Response) => {
  res.render("index.html", {
    title: "Clean Blog - Start Bootstrap Theme",
    blogPosts: enhancedBlogPosts,
  });
});

app.get("/about", (req: Request, res: Response) => {
  res.render("about.html", { title: "Clean Blog - Start Bootstrap Theme" });
});

app.get("/contact", (req: Request, res: Response) => {
  res.render("contact.html", { title: "Clean Blog - Start Bootstrap Theme" });
});

app.get("/post", (req: Request, res: Response) => {
  const blogPost = enhancedBlogPosts[0];
  res.render("post.html", {
    blogPost,
  });
});

app.get("/post/:slug", (req: Request, res: Response) => {
  const blogPost = enhancedBlogPosts.find(
    (post) => post.slug === req.params.slug,
  );

  if (!blogPost) {
    res.status(404).send("Post not found");
    return;
  }

  res.render("post.html", {
    blogPost,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
