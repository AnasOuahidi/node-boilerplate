import * as express from 'express';
import * as config from 'config';
import * as compression from 'compression';
import * as bodyParser from 'body-parser';
import * as homeController from './controllers/home';

const app = express();
app.set('port', config.get('server.port'));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/**
 * API examples routes.
 */
app.get('/home', homeController.index);

module.exports = app;
