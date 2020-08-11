const express = require('express');
const connectDB = require('./database/conexion');
const routes = require('./routes');
const app = express();

connectDB();
app.use(express.json({ extended: false }));
app.use(require('./routes'));
//const Port = process.env.Port || 3000;

app.listen(process.env.PORT, '0.0.0.0');
// .listen(Port, () => console.log('Server started'));