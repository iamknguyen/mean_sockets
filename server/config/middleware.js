
const bodyParser = require('body-parser');
const morgan = require('morgan');
module.exports = (app, express)=>{
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    app.use(morgan('dev'));
    app.use(express.static(__dirname+'/../../public'))
}