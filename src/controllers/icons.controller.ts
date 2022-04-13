import {Router,Request,Response} from 'express';
import IconsService from '../service/icons.service'
export default class IconsController extends IconsService {
    router:Router = Router()
    constructor(){
        super()
    }
    intializeRoutes() {
      
    }

    static async SaveIcons(req: Request, res: Response){
        try {
            
        } catch (error) {
            return res.status(500).json({status:500,message:error.message});
        }
    }

}