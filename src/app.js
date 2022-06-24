// --------------Modulos
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const auth = require('./middleware/auth');

// -------------- express
const app = express();

const homeRouter = require("./routes/homeRoutes")
const productsRouter= require('./routes/productsRoutes')
const userRoutes= require('./routes/userRoutes');

//---------------APIs
const apiProductsRouter = require('./routes/api/products')
const apiGenresRouter = require('./routes/api/genres')
const apiUsersRouter = require('./routes/api/users')


const { render } = require('ejs');
const { appendFileSync } = require('fs');


const port= 3030

// ---------- Middlewares 
app.use(express.static(path.join(__dirname, '../public')));  // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'))
app.use(express.json())

// ---------Sesiones y cookies
app.use(session({
  secret: 'sticker wizzard',
  resave: false,
  saveUninitialized: true,
}))
app.use(cookieParser());
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(auth);

app.listen(process.env.PORT||port ,()=>{
  console.log("El servidor esta corriendo en "+ port)
}
)

app.set("view engine","ejs")
app.set('views', path.join(__dirname,'./views'))

app.use("/",homeRouter)
app.use("/",productsRouter )
app.use("/", userRoutes);

// APIs
app.use('/api/products',apiProductsRouter);
app.use('/api/users',apiUsersRouter);
app.use('/api/genres',apiGenresRouter);
// ************ catch 404 and forward to error handler ************
app.use(function(req,res,next){ res.status(404).render("404-page"); next()})
//app.use((req, res, next) => next(createError(404)));

// ************ error handler ************
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;