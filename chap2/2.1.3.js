// object literal
var sayNode = function () {
  console.log("Node");
};
var es = "ES";
var oldObject = {
  sayJs: function () {
    console.log("JS");
  },
  sayNode: sayNode,
};
oldObject[es + 6] = "fantastic";
oldObject.sayJs();
oldObject.sayNode();
console.log(oldObject.ES6);

const newObject = {
  sayJs() {
    console.log("JS");
  },
  [es + 6]: "fantastic",
  sayNode,
};
newObject[es + 6] = "fantastic";
newObject.sayJs();
newObject.sayNode();
console.log(newObject.ES6);
