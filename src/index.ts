// declare var require: any

import express, {
  type Request,
  type Response,
  type NextFunction,
} from "express";
import cors from "cors";
import Testimonials from "./data/testimonials.json";

const app = express();
app.use(cors()); // allows requests from any origin
app.use(express.json()); // can read json format data sent by client


type TestimonialsData = {
  Testimonials: {
    id: string;
    paragraph: string;
    name: string;
    position: string;
  }[];
};

app.get("/", (req, res) => {
  res.send("halo");
});

app.get("/api/testimonials", (req, res) => {
  const typedData = Testimonials as TestimonialsData;
  let result = [...typedData.Testimonials];
});

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
