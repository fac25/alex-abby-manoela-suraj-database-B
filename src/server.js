const express = require("express");
const server = express();
const { sanitize, content } = require("./templates.js");
const { listMusic, updateMusicList, getUserId, addUsername } = require("./model/music.js");

const bodyParser = express.urlencoded();

const postsArr = listMusic();
const error = {};
server.get("/", (req, res) => {
  res.send(content(postsArr, error));
});

server.post("/", bodyParser, (req, res) => {
  const username = req.body.username;
  const artist = req.body.artist;
  const song = req.body.song;
  const genre = req.body.genre;
  const rating = req.body.rating;
  // Adds user input into an array of objects
  if (!username) {
    error.username = "Please enter your username";
  }
  if (!artist) {
    error.artist = "Please enter the artist' name";
  }
  if (!song) {
    error.song = "Please enter a song";
  }
  if (!genre) {
    error.genre = "Please enter the genre";
  }
  postsArr.push({ genre, artist, song, rating, username });
  // check whether username exists
  
  // Push the username into user table
  
  const user_id = addUsername(username);
  
  // Updates the music database with user input. Must use user_id because username doesn't feature on music table.
  updateMusicList({ genre, artist, song, rating, user_id });

  console.log(listMusic());

  res.redirect("/");
});

module.exports = server;
