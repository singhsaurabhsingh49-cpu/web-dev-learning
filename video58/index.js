function nice(name) {
    console.log("Hey " + name + "you are nice!")
    console.log("Hey " + name + "you are good!")
    console.log("Hey " + name + " Harry your tshirt is nice!")
    console.log("Hey " + name + " Harry your course is good too!")
}
nice("Rohan")
function sum(a,b,c=3){
    // console.log(a+b)
    return a+b+c
}
result1=sum(3,5)
result2=sum(4,12)
result3=sum(9,2,6)
console.log("the sum of these number is :",result1)
console.log("the sum of these number is :",result2)
console.log("the sum of these number is :",result3)

const func1=(x)=>{
    console.log("i am arrow function",x)
}
func1(34);
func1(54);
func1(35);
