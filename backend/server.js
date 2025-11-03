const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Conexión a MongoDB dentro del contenedor
mongoose.connect("mongodb://mongo:27017/tasksdb")
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch(err => console.error("❌ Error al conectar con MongoDB:", err));

// Definir esquema y modelo
const Task = mongoose.model("Task", new mongoose.Schema({
  title: String,
  completed: Boolean
}));

// Endpoints
app.get("/", (req, res) => res.send("🚀 API de Tareas funcionando"));
app.get("/tasks", async (req, res) => res.json(await Task.find()));
app.post("/tasks", async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.status(201).json(task);
});

// Escuchar en el puerto 3000
app.listen(3000, () => console.log("✅ Servidor escuchando en puerto 3000"));
