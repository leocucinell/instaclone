/* SECTION: External modules */
const express = require("express");


/* SECTION: Internal modules */
const PostDB = require("./models/post_model");

/* SECTION: Instanced module */
const app = express();

/* SECTION: Server configuration */
const PORT = 4000;
app.set("view engine", "ejs");

/* SECTION: Middleware */

//access bodyparser
app.use(express.urlencoded({extended: true}));




/* SECTION: Routes */
app.get("/", (req, res) => {
    res.redirect("/posts")
});


//Index GET / - Presentational
app.get("/posts", (req, res) => {
    const context = {posts: PostDB.find()};
    return res.render("posts/index.ejs", context);
});

// New GET /posts/new - Presentational form
app.get("/posts/new", (req, res) => {
    res.send("Post Create Page");
});

// Create POST /posts - Functional
app.post("/posts", (req, res) => {
    //echo check
    res.send({
        message: "Hit the create route",
        body: req.body
    });
});

// Show GET /posts/:id - Presentational
app.get("/posts/:id", (req, res) => {
    //echo check
    res.send(`Post show page id: ${req.params.id}`);
});

// Edit GET /posts/:id/edit - Presentational form
app.get("/posts/:id/edit", (req, res) => {
    res.send(`Post edit page for post with id: ${req.params.id}`);
});

// Update PUT /posts/:id - Functional
app.put("/posts/:id", (req, res) => {
    //echo request, body data and id
    res.send({
        message: "Hit the update route",
        body: req.body,
        id: req.params.id
    });
});

// Destroy DELETE /posts/:id - Functional
app.delete("/posts/:id", (req, res) => {
    //echo id
    res.send({
        message: "Hit delete route",
        id: req.params.id
    })
});

//404
app.get("/*", (req, res) => {
    res.send("Oh no! cannot find that route!");
});




/* SECTION: Server bind */
app.listen(PORT, () => {
    console.log(`Instaclone listening on port: ${PORT}`);
});
