// * DATA TYPE => PRIMITUIVE , NON-PRIMITIVE

// ? PRIMITIVE
// ! 1- STRING
// ! 2- NUMBER
// ! 3- NULL
// ! 4- UNDEFINED
// ! 5- BOOLEAN
// ! 6- SYMBOL
// ! 7- BIGINT

// ? NON-PRIMITIVE 

// ! 1-ARRAY 
// ! 2-OBJECT

const name = "Nehal"
const phoneNumber = 123
const accoundNo = 123
const isPresent = false
// let rollNumber ;
const rollNumber = null ;
const password = Symbol("abc")
const abc = Symbol("abc")
const contact = BigInt(39007199254740992)

// const studentData = ["nehal" , "arslan" , "shehzad" , 123 , true , null]
const studentData = {
    name: "nehal",
    rollNumber:213857,
    isPresent:true,
    profileImg:null,
}
console.log("🚀 ~ studentData:", studentData.rollNumber)

console.log(typeof(name))
console.log(typeof(phoneNumber))
console.log(typeof(isPresent))
console.log(typeof(rollNumber))
console.log(typeof(password))
console.log(typeof(contact))
console.log(typeof(studentData))
