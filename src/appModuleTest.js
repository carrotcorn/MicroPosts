//common JS module syntax
// const person = require("./mymodule1");

// console.log(person.name, person.email);

//es6 importing
// import { person, sayHello } from "./mymodule2";
////import all
// import * as mod from './mymodule2'
// use export default to get rid of {} in the import statement
import greeting from './mymodule2'
// console.log(person.name, person.age);
// console.log(mod);
// console.log(sayHello());
console.log(greeting);
