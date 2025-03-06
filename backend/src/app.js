import cors from "cors"
import "dotenv/config"
import express from "express"
import { connectDB } from "./config/db.js"
import v1UserRoutes from "./v1/routes/user.routes.js"

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Использование маршрутов
app.use("/api/v1/users", v1UserRoutes);

// Подключение к БД
connectDB();

export default app;
