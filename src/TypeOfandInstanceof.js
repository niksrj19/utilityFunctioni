let obj = {
  name: "Ntiehs"
};
console.log("Object typeof=", typeof obj);
console.log("Object instanceof Arrray =", obj instanceof Array);
console.log("Object instanceof Object =", obj instanceof Object);
console.log("Object instanceof Function =", obj instanceof Function);

let arr = [1, 2, 3, 5];
console.log("Array=", typeof arr);
console.log("Array instanceof Arrray =", arr instanceof Array);
console.log("Array instanceof Object =", arr instanceof Object);
console.log("Array instanceof Function =", arr instanceof Function);

let num = 45;
console.log("number typeof=", typeof num);
console.log("number instance of number=", num instanceof Number);
console.log("number instance of object=", num instanceof Object);
console.log("number instance of String=", num instanceof String);

let strinng = "abc";
console.log("string=", typeof strinng);
console.log("string instance of number=", strinng instanceof Number);
console.log("string instance of object=", strinng instanceof Object);
console.log("string instance of String=", strinng instanceof String);

let null_obj = null;
console.log("null obj=", typeof null_obj);
console.log("null_obj instanceof Arrray =", null_obj instanceof Array);
console.log("null_obj instanceof Object =", null_obj instanceof Object);
console.log("null_obj instanceof Function =", null_obj instanceof Function);

let undefined_obj = undefined;
console.log("undefined_obj obj=", typeof undefined_obj);
console.log(
  "undefined_obj instanceof Arrray =",
  undefined_obj instanceof Array
);
console.log(
  "undefined_obj instanceof Object =",
  undefined_obj instanceof Object
);
console.log(
  "undefined_obj instanceof Function =",
  undefined_obj instanceof Function
);

let functionn_obj = () => {
  let a = 5;
};
console.log("functionn_obj =", typeof functionn_obj);

console.log(
  "functionn_obj instanceof Arrray =",
  functionn_obj instanceof Array
);
console.log(
  "functionn_obj instanceof Object =",
  functionn_obj instanceof Object
);
console.log(
  "functionn_obj instanceof Function =",
  functionn_obj instanceof Function
);
