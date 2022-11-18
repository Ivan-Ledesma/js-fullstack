const exp = require('constants');
const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const serveStatic = require('serve-static');
const path = require('path');

//initializations
const app = express();


//settings
app.set('port', 3000);


//midlewares(todos los midlewares de exprees son funciones, osea que cada peticion va a pasar por aqui)
app.use(morgan('dev'));
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename(req, file, cb){
        cb(null, new Date().getTime() + path.extname(file.originalname));
    } 
})
app.use(multer({storage}).single('image'));
app.use(express.urlencoded({extended: false}))
app.use(express.json());

//routes
app.use('/api/books', require('./routes/books'));


//static files
app.use(express.static('public'));


//start server
app.listen(app.get('port'), ()=>{
    console.log(('server on port ', app.get('port')))
});