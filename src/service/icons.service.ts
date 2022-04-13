import IconsModel from '../model/icons';
import axios from 'axios'

export default class IconsService {
    constructor() {
        this.SaveCoinService().then((data)=>{
            console.log("ok");
        })
     }

    async getIconData() {
        return new Promise(async (resolve, reject) => {
            try {
                const data: any = await axios.get("https://rest.coinapi.io/v1/exchanges/icons/32", { headers: { "X-CoinAPI-Key": "FDAB8705-CEAA-4A23-8A5B-6CC30B8D44D9" } });
                resolve(data.data);
            } catch (error) {
                reject(error);
            }
        });

    }
    async SaveCoinService() {
        return new Promise(async (resolve, reject) => {
            try {
             const IconsData:any = await this.getIconData();
             
             IconsData.map(async(item:any)=>{
                const data = await IconsModel.findOne({exchange_id:item.exchange_id});
                 if(!data){
                  await IconsModel.create(item)
                 }
             });
             resolve("save")
            } catch (error) {
                reject(error);
            }
        })
    }
}