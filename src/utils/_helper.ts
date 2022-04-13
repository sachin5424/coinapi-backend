const aggregate =async(model:any,filter:any[])=>{
    return new Promise((resolve,reject)=>{
       
        model.aggregate(
            filter
        ).exec( function (err:any, invites:any) {
            if (err) {
             reject(err)
            }
            resolve(invites)
          }
        );
    })  
}

export {
    aggregate
}