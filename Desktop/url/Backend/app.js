import express from "express";
const app = express();
import { nanoid } from "nanoid";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get( "/api/create" ,(req,res) =>{
     const {url} = req.query;
     console.log(url);
    res.send(nanoid(8));
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});