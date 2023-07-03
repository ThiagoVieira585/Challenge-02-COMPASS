import express, { Request, Response } from "express";
import bcrypt from 'bcrypt';
import tutorRouter from "./src/routes/tutor.route";
import mongoose from "mongoose";
import petRouter from "./src/routes/pet.route";
import jwt from 'jsonwebtoken';
import authRouter from "./src/routes/auth.route";
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from "./swagger.json";


const port = 27017;
const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup())

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(tutorRouter);
app.use(petRouter);
app.use(authRouter);

mongoose
  .connect(
    "mongodb+srv://<seu_usuario>:<sua_senha>@cluster0.zbxllgz.mongodb.net/"
  )
  .then(()=>{
   
    console.log("Banco conectado");
    app.listen(port, () => {
      console.log(`Servidor conectado na porta ${port}.`);
    });
    
  })
  .catch((err) => console.log(err));


