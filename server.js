import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import Cors from "cors";

// 1. Add Config
const app = express();
const port = process.env.PORT || 8001;
//4.
const connection_url = `mongodb+srv://tinder-clone:o4KtKpvICOsT4aAc@cluster0.pn7z3.mongodb.net/tinderdb?retryWrites=true&w=majority`;

//Add middle layers
app.use(express.json());
app.use(Cors());

//5. db config
mongoose.connect(connection_url),
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  };

//2. API endpoints
app.get("/", (req, res) => res.status(200).send("Hello Lumona"));
//.6
app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;

  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err); //internal server error
    } else {
      res.status(201).send(data); //Created
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data); //Success- Retrives
    }
  });
});

//3. Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
