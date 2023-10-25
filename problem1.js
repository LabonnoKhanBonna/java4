// function isInteger (number){
//    if (typeof number != "number"){
//    return "please provide a number";
//    }

//   if (number %1 == 0){
//     return true;
//   }
//   else{
//     return false;
//   }

// }



// console.log(isInteger(4.2))


function isJavaScriptFile(filename){
    console.log(typeof filename)

    if (typeof filename != "string"){
        return "pelase provide me a valid file name"
    }
    else{ 
        if (filename.endsWith(".js") == true){
            return true
        }
        else{
            return false
        }
    }
}
console.log(isJavaScriptFile("hello.js"))