import express from 'express';
// import {connect} from '../config/db';
import cors from 'cors'

export default class App {
    app:any  = express();
    constructor(controllers:any[],connect:any){
        this.app.use(express.json())
        this.app.use(cors())
        connect()
        this.initializeControllers(controllers)
    };

    initializeControllers(controllers: any) {
        controllers.forEach((controller: any) => {
            this.app.use('/api/', controller.router)
        });
    }
    listen(){
      this.app.listen(3008,()=>{
 
          console.log(`connect server`);
      })
    }
}