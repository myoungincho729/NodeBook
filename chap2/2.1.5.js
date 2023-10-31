// Destructuring_assignment

var candyMachine = {
  status: {
    name: "node",
    count: 5,
  },
  getCandy: function () {
    this.status.count--;
    return this.status.count;
  },
};
var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;

var candyMachine2 = {
  status: {
    name: "node",
    count: 5,
  },
  getCandy2() {
    this.status.count--;
    return this.status.count;
  },
};
const {
  getCandy2,
  status: { count2 },
} = candyMachine2;
getCandy2();
const array = ["node", {}, 10, true];
const [node, obj, , bool] = array;
