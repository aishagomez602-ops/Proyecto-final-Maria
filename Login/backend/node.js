const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Conexión a la base de datos
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "48298779", // tu contraseña de MySQL
  database: "usuarios"
});

connection.connect((err) => {
  if (err) {
    console.error("❌ Error al conectar a MySQL:", err);
    return;
  }
  console.log("✅ Conectado a MySQL!");
});

// Ruta base
app.get('/', (req, res) => {
  res.send('Servidor Express funcionando');
});

// Obtener todos los usuarios
app.get("/usuarios", (req, res) => {
  connection.query("SELECT * FROM usuarios", (err, results) => {
    if (err) {
      return res.status(500).send("Error en la consulta");
    }
    res.json(results);
  });
});

// Crear usuario
app.post("/usuarios", (req, res) => {
  const { nombreUsuario, contraseña } = req.body;
  const sql = "INSERT INTO usuarios (nombreUsuario, contraseña) VALUES (?, ?)";
  connection.query(sql, [nombreUsuario, contraseña], (err, results) => {
    if (err) return res.status(500).send("Error al insertar el usuario");
    res.status(201).json({ mensaje: "Usuario agregado" });
  });
});

// LOGIN (validación de usuario)
app.post("/login", (req, res) => {
  const { nombreUsuario, contraseña } = req.body;

  const sql = "SELECT * FROM usuarios WHERE nombreUsuario = ? AND contraseña = ?";
  connection.query(sql, [nombreUsuario, contraseña], (err, results) => {
    if (err) return res.status(500).send("Error en la consulta");

    if (results.length > 0) {
      const usuario = results[0];
      res.json({
        mensaje: "login exitoso",
        usuario: {
          idUsuario: usuario.idUsuario,
          nombreUsuario: usuario.nombreUsuario,
        },
      });
    } else {
      res.status(401).json({ mensaje: "usuario no encontrado" });
    }
  });
});

app.listen(3000, () => {
  console.log("🚀 Servidor Express escuchando en http://localhost:3000");
});
