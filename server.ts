import express, { Request, Response } from "express";

import tutorRouter from "./src/routes/tutor.route";
import mongoose from "mongoose";
import petRouter from "./src/routes/pet.route"



const port = 27017;
const app = express();


app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(tutorRouter);
app.use(petRouter);

mongoose
  .connect(
    "mongodb+srv://thiagogatovieiradasilva585:admin123@cluster0.zbxllgz.mongodb.net/"
  )
  .then(()=>{
   
    console.log("Banco conectado");
    app.listen(port, () => {
      console.log(`Servidor conectado na porta ${port}.`);
    });
    
  })
  .catch((err) => console.log(err));


