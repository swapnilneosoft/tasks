let prom = new Promise((resolve,reject)=>{
    let args = 10;
    if(args > 10)
    {        resolve("All arguments are counted");
    }else{
        reject("Arguments not counted");
    }
})


prom.then(resp=>{
    console.log(resp);
}).catch(rej=>{
    console.log(rej)
})