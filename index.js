
/**
 * imports
 * path (modulo nativo) Para solucionar problemas de compatibilidad entre los directorios siempre lo ejecute en la ruta donde esa el aplicativo
 * middleware body-parse: Para procesar informacion que vien en el cuerpo de una resquest que vienen en formato json. Para enviar el product en formato json. express es muy liviano (basico).
 */
const express = require("express")
const path = require("path")
const bodyParser = require('body-parser')

/**
 * relative routes
 * ruta de las vistas
 * ruta de la api
 */
const productsRouter = require('./routes/views/products')
const productsApiRouter = require('./routes/api/products')

/**
 * app initialization
 */
const app = express()

/**
 * middlewares
 * bodyParser.json(), para cuando se envia en un request pos se le envia la informacion en el body como un json,
 * express la pueda leer ya que express por defecto no sabe que es un json y el tiene que saber como interpretarlo
 */
app.use(bodyParser.json())

/**
 * static files
 * use() metodo para usar middlewares (que prefijo va a tener "/static" y la ruta de los staticos con expres.static() con el path para no tener problemas a la hora de escuchar la ruta)
 * __dirname, expone el directorio (la ruta) donde esta corriendo el proceso de node y es mucho mas seguro que dejar la ruta relativa sola "public"
 * path.join, concatena ese directorio donde corre ese proceso con la ruta a la que le queremos entregar,
 * y se encarga de evitar esos problemas de seguridad que pueda tener los diferentes sistemas operativos
 */
app.use("/static", express.static(path.join(__dirname, "public")))

/**
 * view engine setup
 * is pug, , el cual viene implementado de forma nativa
 */
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")

/**
 * routes
 * establecer los endspoint de los productos en views y api
 */
app.use("/views/products", productsRouter)
app.use("/api/products", productsApiRouter)

/**
 * redirect
 */
app.get('/', (req, res) => {
  res.redirect('/products')
} )

/**
 * server
 */
const server = app.listen(8000, () => {
  console.log(`Listening http://localhost:${server.address().port}`)
})
