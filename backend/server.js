import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

// Conectar a MongoDB solo si no estamos en ambiente de test
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect('mongodb://mongodb:27017/tareasdb')
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error de conexión:', err));
}

// --- Rutas del proyecto ---
app.get('/tasks', (req, res) => {
  res.json([
    { id: 1, title: 'Tarea 1' },
    { id: 2, title: 'Tarea 2' }
  ]);
});

// Exportar la app para que Supertest la utilice
export default app;

// Levantar servidor solo si NO estamos en modo test:
if (process.env.NODE_ENV !== 'test') {
  const port = 3000;
  app.listen(port, () => {
    console.log(`Servidor escuchando en puerto ${port}`);
  });
}
