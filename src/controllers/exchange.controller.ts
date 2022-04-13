import { Router, Request, Response } from 'express';
import ExchangeService from '../service/Exchange.service';
import {aggregate} from '../utils/_helper';
import ExchangesModel from '../model/exchanges';
export default class ExchangeController extends ExchangeService {
    router: Router = Router()
    constructor() {
        super();
        this.intializeRoutes()
    }
    intializeRoutes() {
        this.router.get('/exchanges', this.ExchangseDataFind)
    }

    async ExchangseDataFind(req: Request, res: Response) {
        try {
            const search:any = req.query.search
            var filter: any[] = []

            search? filter.push({
                $match:{
                    exchange_id:new RegExp(search.toUpperCase())
                }
            }):{}
             filter.push(
                {
                    $lookup: {
                        from: "icons",
                        localField: "exchange_id",
                        foreignField: "exchange_id",
                        as: "icons"
                    }
                },
                { $unwind: "$icons" },
                {
                    $addFields: {
                        "url": "$icons.url"
                    }
                },
                {
                    $project: { icons: 0 }
                }

             );
            const data = await aggregate(ExchangesModel,filter)
            return res.status(200).json({ status: 200, data })
        } catch (error) {
            console.log(error);

            return res.status(500).json({ status: 500, message: error.message });
        }
    }

}