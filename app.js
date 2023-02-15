import express from 'express';
import morgan from "morgan";
import cors from 'cors';
import ticketRouter from "./routes/ticketRouter.js";

// We are using this app file to configure our application and handle incoming requests. we are also using app to set up middleware and define routes
const app = express();


app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());
app.use(cors("*"));

app.use("/api/tickets", ticketRouter)


export default app