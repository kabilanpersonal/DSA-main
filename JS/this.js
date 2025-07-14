var firstName= "C";
var lastName= "Kabilan";

var obj={
    firstName: "C",
    lastName:"Kabilan",
    fullName : ()=>{
        return this.firstName+" "+this.lastName //undefined undefined
    },
    fullName2 : ()=>{
        return obj.firstName+" "+obj.lastName //C Kabilan
    },
    fullName3: function () {
        return () => {
          return this.firstName + " " + this.lastName;
        };
    }
}
const obj3 = obj.fullName3()

console.log(obj.fullName());
console.log(obj.fullName2());
console.log(obj3())