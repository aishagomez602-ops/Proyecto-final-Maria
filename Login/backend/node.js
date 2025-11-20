const express = require('express');
const session = require("express-session");
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

// conexión MySQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "48298779",
  database: "usuarios"
});

connection.connect((err) => {
  if (err) {
    console.error("Error al conectar a MySQL:", err);
    return;
  }
  console.log("Conectado a MySQL");
});

// cooki
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(session({
  secret: "mi_secreto",
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

//  REGISTRO
app.post("/registro", (req, res) => {
  const { usuario, contraseña } = req.body;

  const sql = "INSERT INTO usuarios (usuario, contraseña) VALUES (?, ?)";
  connection.query(sql, [usuario, contraseña], (err, result) => {
    if (err) return res.status(500).json({ mensaje: "Error al registrar usuario" });

    res.json({ mensaje: "usuario creado" });
  });
});

// LOGIN
app.post("/login", (req, res) => {
  const { usuario, contraseña } = req.body;

  const sql = "SELECT * FROM usuarios WHERE usuario = ? AND contraseña = ?";
  connection.query(sql, [usuario, contraseña], (err, results) => {
    if (err) return res.status(500).json({ mensaje: "Error en la consulta" });

    if (results.length > 0) {
      const usuario = results[0];
      res.json({
        mensaje: "login exitoso",
        usuario: {
          id: usuario.id,
          usuario: usuario.usuario
        }
      });
    } else {
      res.status(401).json({ mensaje: "usuario no encontrado" });
    }
  });
});


// CERRAR SESIÓN 
app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(500).json({
      message: "Error al cerrar sesión"
    });
    res.clearCookie("connect.sid");
    res.json({ success: true, message: "Sesión cerrada correctamente" });
  });
});
app.listen(3001, () => console.log("Servidor corriendo en puerto 3001"));



// Servidor
app.listen(3001, () => {
  console.log(" Servidor Express en http://localhost:3001");
});

