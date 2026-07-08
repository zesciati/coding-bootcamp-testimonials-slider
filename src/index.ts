import express, {
  type Request,
  type Response,
  type NextFunction,
} from "express";
import cors from "cors";
import {Testimonials} from "./data/testimonials.json";
import { error } from "console";

const app = express();
app.use(cors()); // allows requests from any origin
app.use(express.json()); // can read json format data sent by client



app.get("/", (req, res) => {
  res.send("halo gimana");
});

app.get("/api/testimonials", (req, res) => {
  res.json(Testimonials);
});

// app.get('/api/testimonials/:id', (req, res) => {
//   const item = Testimonials.find(t => t.id === req.params.id);
//   if(!item){
//     return res.status(404).json({error: 'Testimonials tidak ditemukan'});
//   }
//   res.json(item);
// })

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error: any) => {
  if (error) {
    throw error;
  }
  console.log("server is running on port 3000");
});
