let prom = new Promise((resolve)=>{
    resolve(10);
})

prom.then(res=>{
    console.log(res);
    return res*10;
}).then(res=>{
    console.log(res);
    return res*20;
}).then(res=>{
    console.log(res);
    return res*30;
}).then(res=>{
    console.log(res);
})