import express from "express";
import "reflect-metadata";
import userRoutes from "./routes/routes";
const app = express();

app.use(express.json());
app.use(userRoutes);

// app.listen(3000, () => {
//   console.log("App rodando na porta 3000 com sucesso, Nando!!!");
// });

export default app;
