// function add(a, b) {
//   return a + b;
// }

// console.log(add(1, 2));

// let a = "";

// let array = [1, 2, 34, 5, 42, " hello "];
// let obj = {
//   hesaru: "hemanth",
//   age: 10,
// };
// function err() {
//   throw new Error(" error throws ");
// }
// exports.obj = obj;
// exports.err = err;
// exports.add = add;
// exports.a = a;
// exports.array = array;

// const hesaru = async (type) => {
//   let name = "lol";
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       name = "demon";
//       resolve(name);
//     }, 3000);
//   });
// };
// exports.checkSpies = {
//   hesaru
// };
// const getName = async () => {
//   const name = await exports.checkSpies.hesaru()
//   return name;
// };
// exports.getName=getName;

// const obj = {
//   updateValue(value) {
//     console.log("value is updated to ", value);
//   },
// };

// function add(a, b) {
//   if (a != undefined && b != undefined) {
//     const num = a + b;
//     if (isNaN(num) || typeof num == "string") {
//       console.log("came here also");
//       obj.updateValue("error the operator is invalid ");
//     } else {
//       obj.updateValue(num);
//     }
//   }
//   obj.updateValue("values are undefined ");
// }
// module.exports.add = add;
// module.exports.obj = obj;

class Calculator {
  add(a, b) {
    // this.update(a + b, this.add.name);
    return a + b;
  }
  sub(a, b) {
    this.update(a - b, this.sub.name);
  }
  mul(a, b) {
    this.update(a * b, this.mul.name);
  }
  div(a, b) {
    this.update(a / b, this.div.name);
  }
  update(data, method) {
    console.log(
      data,
      " is the updated data",
      this.update.name,
      " is the method "
    );
  }
  get version() {
    return 10;
  }
}

exports.opertion = function opertation(a, b, type) {
  const calc = new Calculator();

  switch (type) {
    case "add":
      const value = calc.add(a, b);
      calc.update(value);
      break;
    case "sub":
      calc.sub(a, b);
      break;

    case "mul":
      calc.mul(a, b);
      break;

    case "div":
      calc.div(a, b);
      break;
  }
};

module.exports.Calculator = Calculator;
