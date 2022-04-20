function echoType(word){
    
    console.log(typeof(word))

    if(typeof(word) === "string" || typeof(word) === "number"){
        console.log(word)
    } else {
        console.log("Parameter is not suitable for printing")
    }
    

}
echoType(null)