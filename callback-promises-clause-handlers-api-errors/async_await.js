// const harry = async () =>{
//     let delhiWeather = new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             resolve("27 degree")
//         },2000)
//     })
//     let BngloreWeather = new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             resolve("24 degree")
//         },5000)
//     })

//     console.log("pending delhiweather")
//     let DelhiW = await delhiWeather;
//     console.log("fetched delhiweather : " + DelhiW);

//     console.log("pending bngloreweather")
//     let BngloreW = await BngloreWeather;
//     console.log("fetched bngloreW : " + BngloreW);

//     return [DelhiW, BngloreW];
// }

// console.log("Welcome to weather control room")
// let a = harry()
// a.then((value) =>{
//     console.log(value);
// })
// console.log(a);






// async function harry(){
//     let delhiWeather = new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             resolve("27 degree")
//         },2000)
//     })
//     let BngloreWeather = new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             resolve("24 degree")
//         },5000)
//     })

//     console.log("pending delhiweather")
//     let DelhiW = await delhiWeather;
//     console.log("fetched delhiweather : " + DelhiW);

//     console.log("pending bngloreweather")
//     let BngloreW = await BngloreWeather;
//     console.log("fetched bngloreW : " + BngloreW);

//     return [DelhiW, BngloreW];
// }


// const sherry = () =>{
//     console.log("I'm sherrry")
// }

// console.log("Welcome to weather control room")
// let a = harry()
// let b = sherry()
// a.then((value) =>{
//     console.log(value);
// })
// console.log(a);






async function harry(){
    let delhiWeather = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("27 degree")
        },2000)
    })
    let BngloreWeather = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("24 degree")
        },5000)
    })

   try{
    console.log("pending delhiweather")
    let DelhiW = await delhiWeather;
    console.log("fetched delhiweather : " + DelhiW);

    console.log("pending bngloreweather")
    let BngloreW = await BngloreWeather;
    console.log("fetched bngloreW : " + BngloreW);

    return [DelhiW, BngloreW];
   }catch(error){
       console.log(error);
   }
}


const sherry = async () =>{
    console.log("I'm sherrry")
}


const mainly = async() =>{
    console.log("Welcome to weather control room")
    let a = await harry()
    let b = await sherry()
    console.log(a);
    // console.log(b);
}

mainly();
