const express = require("express");
const notes = require("./data/notes")
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (request, response) => {
    response.send("API is running....");
});

app.get("/api/notes", (request, response) => {
    response.json(notes);
});

app.get("/api/notes/:id", (request, response) => {
    const note = notes.find((n) => n._id === request.params.id);

    response.send(note);
})

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server started at PORT ${PORT}`));
