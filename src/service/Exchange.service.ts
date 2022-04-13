import ExchangesModel from '../model/exchanges';
import axios from 'axios'

export default class ExchangesService {
    constructor() { 
     this.SaveExchangesService().then((data:any)=>{
         console.log(data);
         
     })
    }

    async getExchangesData() {
        return new Promise(async (resolve, reject) => {
            try {
                const data: any = await axios.get("https://rest.coinapi.io/v1/exchanges", { headers: { "X-CoinAPI-Key": "FDAB8705-CEAA-4A23-8A5B-6CC30B8D44D9" } });
                resolve(data.data);
            } catch (error) {
                reject(error);
            }
        });

    }
    async SaveExchangesService() {
        return new Promise(async (resolve, reject) => {
            try {
             const IconsData:any = await this.getExchangesData();
             
             IconsData.map(async(item:any)=>{
                const data = await ExchangesModel.findOne({exchange_id:item.exchange_id});
                 if(!data){
                  await ExchangesModel.create(item)
                 }
             });
             resolve("save")
            } catch (error) {
                reject(error);
            }
        })
    }

   

  
  
}