// try{
//     harry
// }catch(error){
//     console.log(error.name)
//     console.log(error.message)
// }



try{
    throw new ReferenceError("Something went wrong");
}catch(error){
    console.log(error.name)
    console.log(error.message)
}