const express = require('express');
const mysql = require('mysql2')
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('desde Express');
})


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "48298779", // tu contraseña de MySQL si tiene 
    database: "Usuarios"
});

connection.connect((err) => {
    if (err) {
        console.error("Error al conectar:", err);
        return;
    }
    console.log("Conectado a MySQL!");
});


app.get("/usuarios", (req, res) => {
    connection.query("SELECT * FROM usuario", (err, results) => {
        if (err) {
            return res.status(500).send("Error en la consulta");
        }
        res.json(results);
    });
});


app.post("/usuarios", (req, res) => {
    const { id, nombre, contraseña} = req.body;
    console.log("nombre =", req.body.nombre);
    const sql = "INSERT INTO usuarios (id, nombre, contraseña) VALUES (?, ?, ?)";
    connection.query(sql, [id, nombre, contraseña], (err, results) => {
        if (err) return res.status(500).send("Error al insertar el usuario");
        res.status(201).json({ mensaje: "usuario agregado", usuario: { id, nombre, contraseña } });
    });
});

// INICIO DE SESION 
app.post("/login", (req, res) => {
    const {nombre, contraseña} = req.body;
    console.log("nombre =", req.body.nombre);
    const sql = "SELECT * FROM usuarios WHERE nombre=? AND contraseña = ?";
    connection.query(sql, [ nombre, contraseña], (err, results) => {
        if (err) return res.status(500).send("Error");
       if (results.length >0){
        return res.send("login exitoso")
       }
       else{
        return res.send("usuario no encontrado")
       }
    });
});


app.put("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, contraseña } = req.body;
    const sql = "UPDATE ususarios SET nombre = ?, contraseña = ? WHERE id = ?";
    connection.query(sql, [nombre, contraseña, id], (err, results) => {
        if (err) return res.status(500).send("Error al actualizar el usuario");
        if (results.affectedRows === 0) return res.status(404).send("Usuario no encontrado");
        res.json({ mensaje: "Usuario actualizado", usuario: { id, nombre, contraseña } });
    });
});


app.delete("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM usuarios WHERE id = ?";
    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).send("Error al eliminar el usuario");
        if (results.affectedRows === 0) return res.status(404).send("Usuario no encontrado");
        res.json({ mensaje: "Usuario eliminado", id });
    });
});


app.listen(3000, () => {
    console.log('Servidor Express Escuchando');
})