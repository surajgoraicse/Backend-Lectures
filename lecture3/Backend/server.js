import express from "express"
import 'dotenv/config'

const app = express()

const PORT = process.env.PORT || 3000;
const jokes = [
    { id: 1, joke: "Why don't scientists trust atoms? Because they make up everything!" },
    { id: 2, joke: "Why did the scarecrow win an award? Because he was outstanding in his field!" },
    { id: 3, joke: "Why don’t skeletons fight each other? They don’t have the guts." },
    { id: 4, joke: "What do you call fake spaghetti? An impasta!" },
    { id: 5, joke: "Why couldn’t the bicycle stand up by itself? It was two-tired." },
    { id: 6, joke: "What do you call cheese that isn't yours? Nacho cheese." },
    { id: 7, joke: "What do you call a fish wearing a bowtie? Sofishticated." },
    { id: 8, joke: "Why are elevator jokes so good? They work on many levels." },
    { id: 9, joke: "What did the ocean say to the beach? Nothing, it just waved." },
    { id: 10, joke: "Why did the math book look sad? Because it had too many problems." }
];
  
  


app.get("/api", (req, res) => {
    res.send("hello world")
})

app.get("/api/jokes", (req, res) => {
    res.json(jokes)
})


app.listen(PORT, () => {
    console.log("server is running at port " , PORT);
}  )