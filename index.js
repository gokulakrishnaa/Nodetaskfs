import fs from "fs";
import express from "express";

const app = express();
const PORT = 9000;

//Task (Q.1)

const today = new Date();
const date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
const time =
  today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
const dateTime = date + "&" + time;
console.log(dateTime);

app.get("/read", (request, response) => {
  fs.writeFile(
    `./currenttimestamp/Current-${dateTime}.txt`,
    dateTime,
    (err) => {
      console.log("File Created Successfully");
    }
  );
  response.send("File Created");
});

//Task (Q.2)
const quotes = "Live and Let Live";

app.get("/write", (request, response) => {
  for (let i = 1; i <= 5; i++) {
    fs.writeFile(`./taskfolder/text-${i}.txt`, quotes, (err) => {
      console.log("Files Created");
    });
  }
  response.send("Files Created in Directory");
});

app.get("/readdir", (request, response) => {
  fs.readdir("./taskfolder", "utf-8", (err, files) => {
    console.log(files);
  });
  response.send("Files from Directory");
});

app.listen(PORT, () => console.log("App Started in", PORT));
