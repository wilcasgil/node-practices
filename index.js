const express = require("express");
const path = require("path");   //path (modulo nativo) Para solucionar problemas de compatibilidad entre los directorios siempre lo ejecute en la ruta donde esa el aplicativo
const app = express();

const productsRouter = require('./routes/products');  //Incluir la ruta del router
const productsApiRouter = require('./routes/api/products');  //Incluir la ruta de la api

//use() metodo para usar middlewares (que prefijo va a tener "/static" y la ruta de los staticos con expres.static() con el path para no tener problemas a la hora de escuchar la ruta)
app.use("/static", express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));   //la carpeta de la aplicacion __dirname
app.set("view engine", "pug");    //y el view engine sera pug, el cual viene implementado de forma nativa

//Establecer los endspoint de los productos
app.use("/products", productsRouter);   //ruta de los productos
app.use("/api/products", productsApiRouter);   //ruta de la api

const server = app.listen(8000, () => {
  console.log(`Listening http://localhost:${server.address().port}`);
});
