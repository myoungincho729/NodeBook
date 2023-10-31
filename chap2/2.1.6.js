// class

var Human = function (type) {
  this.type = type || "human";
};
Human.isHuman = function (human) {
  return human instanceof Human;
};
Human.prototype.breathe = function () {
  console.log("haaam");
};
var Zero = function (type, firstName, lastName) {
  Human.apply(this, arguments);
  this.firstName = firstName;
  this.lastName = lastName;
};
Zero.prototype = Object.create(Human.prototype);
Zero.prototype.constructor = Zero;
Zero.prototype.sayName = function () {
  console.log(this.firstName + this.lastName);
};
var oldZero = new Zero("human", "zero", "cho");
var a = Human.isHuman(oldZero);
console.log(a);
oldZero.breathe();
oldZero.sayName();

class Human2 {
  constructor(type = "human") {
    this.type = type;
  }

  static isHuman(human) {
    return human instanceof Human2;
  }

  breathe() {
    console.log("ha-am");
  }
}

class Zero2 extends Human2 {
  constructor(type, firstName, lastName) {
    super(type);
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayName() {
    super.breathe();
    console.log(this.firstName + this.lastName);
  }
}
const newZero = new Zero2("human", "myoungin", "cho");
newZero.sayName();
