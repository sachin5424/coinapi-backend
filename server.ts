
   
import App from './src/app';
import {connect} from './config/db'
import IconsController from './src/controllers/icons.controller';
import exchangeController from './src/controllers/exchange.controller'
const Controllers:any[] = [
  new IconsController,
  new exchangeController
]
const app =  new App(Controllers,connect);
app.listen()