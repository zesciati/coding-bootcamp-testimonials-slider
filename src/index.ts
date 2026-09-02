import express, {
  type Request,
  type Response,
  type NextFunction,
} from "express";
import cors from "cors";
import { Testimonials } from "./data/testimonials.json";
import { httpServerHandler } from "cloudflare:node";

const app = express();
app.use(
  cors({
    origin: [
      "https://coding-bootcamp-testimonials-slider.zakyabiyyu2003.workers.dev",
      "http://localhost:5173",
    ],
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("halo gimana");
});

app.get("/api/testimonials", (req, res) => {
  res.json(Testimonials);
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(3000);

export default httpServerHandler({ port: 3000 });