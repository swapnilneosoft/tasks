function getData(name,surname,callack){
    console.log("Gathering the data .......")
    setTimeout(function(){
       console.log(`My name is :${name + surname}`)
    },3000)
    callack();
}

getData("Swapnil","Dongare",function(){
    console.log("Called the callback function")
})