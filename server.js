/* SECTION: External modules */
const express = require("express");


/* SECTION: Internal modules */

/* SECTION: Instanced module */
const app = express();

/* SECTION: Server configuration */
const PORT = 4000;

/* SECTION: Middleware */

/* SECTION: Routes */

//Index GET / - Presentational
app.get("/", (req, res) => {
    res.send("Post Index");
});

// New GET /posts - Presentational form

// Create POST /posts - Functional

// Show GET /posts/:id - Presentational

// Edit GET /posts/:id/edit - Presentational form

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