let a = prompt("Enter a first number")

let b = prompt("Enter a second number")
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("sorry this is not allowed")
}
let  sum = parseInt(a)+parseInt(b)
function main(){
    let x= 1;
try {
    console.log("the sum is ", sum*x)
    return true
} catch (error) {
    console.log("Error aa gaya bhai")
    return false
}
  finally{
    console.log("files are being closed and db connection is being closed")
  }
}
