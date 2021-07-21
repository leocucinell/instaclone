/* SECTION: External modules */
const express = require("express");


/* SECTION: Internal modules */

/* SECTION: Instanced module */
const app = express();

/* SECTION: Server configuration */
const PORT = 4000;

/* SECTION: Middleware */

//access bodyparser
app.use(express.urlencoded({extended: true}));

/* SECTION: Routes */
app.get("/", (req, res) => {
    res.redirect("/posts")
});

//Index GET / - Presentational
app.get("/posts", (req, res) => {
    res.send("Post Index");
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

// Destroy DELETE /posts/:id - Functional

//404
app.get("/*", (req, res) => {
    res.send("Oh no! cannot find that route!");
});

/* SECTION: Server bind */
app.listen(PORT, () => {
    console.log(`Instaclone listening on port: ${PORT}`);
});

//make a list of fake posts
const instaposts = [
    {
        user:{
            userName: "",
            avatar: ""
        },
        image: "",
        content: "",
        likes: 0
    }
]