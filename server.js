/* SECTION: External modules */
const express = require("express");


/* SECTION: Internal modules */

/* SECTION: Instanced module */
const app = express();

/* SECTION: Server configuration */
const PORT = 4000;

/* SECTION: Middleware */

/* SECTION: Routes */

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