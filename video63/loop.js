let array = [1,93,5,6,88]

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element)
    
// }
// array.forEach((value,index,arr)=>{
//     console.log(value,index,arr)
// })
let obj = {
    a:1,
    b:2,
    c:3
}
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element)
    }
}
// for (const iterator of array) {
//     console.log(iterator)
// }
