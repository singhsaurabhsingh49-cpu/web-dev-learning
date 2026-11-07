// let obj = {
//     a: 1,
//     b:"harry"
// }

// console.log(obj)

// let animal = {
//     eats: true
// } ;
// let rabbit = {
//     jumps: true
// };
// rabbit.__proto__ = animal; //sets rabbit.[[prototype]] = animal

class animal{
    constructor(name){
        this.name = name;
        console.log("saurabh is don...")
    }
    eats(){
        console.log("mujhe marne ka mnn h")
    }
    jumps(){
        console.log("kood raha hoon")
    }
}
class Lion extends animal {
  constructor(name){
    super(name)
    console.log("object is created and he is a lion..")
  }
    eats(){
        super.eats()
        console.log("kha raha hu roar")
    }
  }

let a = new animal("Aryan");
console.log(a)
let l = new Lion("shera")
console.log(l)  

