// spec/calculatorSpec.js
const {
  // add: calculator,
  // a,
  // array,
  // err,
  // obj,
  // checkSpies,
  // getName,
  // add,
} = require("../test");
const { customMatcher } = require("./custom-matcher");

describe("Calculator:-", () => {
  // describe("add function", () => {
  //   xit("should add two positive numbers correctly", () => {
  //     expect(calculator(2, 3)).toBe(5);
  //     expect(calculator(2, 6)).toBe(8);
  //   });
  //   it("should add negative numbers correctly", () => {
  //     expect(calculator(-2, -3)).toBe(-5);
  //   });
  // });
  // describe("check the undefined value", () => {
  //   it("should be undefined ",()=>{
  //     expect(a).not.toBeDefined()
  //   })
  // });
  //   describe("subtract function", () => {
  //     it("should subtract two numbers correctly", () => {
  //       expect(calculator (5, 3)).toBe(2);
  //     });
  //     it("should handle negative results", () => {
  //       expect(calculator (3, 5)).toBe(-2);
  //     });
  //   });
  // it("validate hello in the array ", () => {
  //   expect(array).toContain(" hello".padEnd(" hello".length + 1, " "));
  // });
  // it("error throwing testing", () => {
  //   expect(err).toThrow(new Error(" error throws "));
  // });
  // it("error throwing testing along with the error object ", () => {
  //   expect(err).toThrowError(Error, " error throws ");
  // });
  // it("checking the variable has anything in it ", () => {
  //   expect(a).toEqual(jasmine.anything());
  // });
  // it("checking the varable has string in it", () => {
  //   expect(a).toEqual(jasmine.any(String));
  // });
  // it("checking the object contains value or not ", () => {
  //   expect(obj).toEqual(
  //     jasmine.objectContaining({
  //       hesaru: "hemanth",
  //     })
  //   );
  // });
  //implementation of custom matchers

  // it(" checking the object is an insance of Object class or not ", () => {
  // jasmine.addMatchers(customMatcher);

  //   expect(obj).toBeAnInstance(Object)
  // });

  // it("checking the number is even or not ", () => {
  //   jasmine.addMatchers(customMatcher);
  //   expect(2).toBeEvenRight();
  // });
  // it("checking the matchers is even or not ", () => {
  //   jasmine.addMatchers(customMatcher);
  //   expect(2).toBeEvenRight();
  // });

  // it("using the spies to check the function is called or not", async () => {
  //   spyOn(checkSpies, "hesaru"); // Spy on the `hesaru` function

  //   // Call the function you are testing
  //   await getName(); // This calls `hesaru` internally

  //   // Check if `hesaru` was called
  //   expect(checkSpies.hesaru).toHaveBeenCalled();
  // });



  // it("check the update method is calling or not ", () => {
  //   spyOn(obj, "updateValue");

  //   add();

  //   expect(obj.updateValue).toHaveBeenCalled();
  // });

  // it("checking the upate method should call only for error scenarios ", () => {
  //   spyOn(obj, "updateValue");
  //   add(2, "2");
  //   expect(obj.updateValue).toHaveBeenCalledWith(
  //     "error the operator is invalid "
  //   );
  // });

  // it("checking the upate method should call only for proper number  scenarios ", () => {
  //   spyOn(obj, "updateValue");
  //   add(2, 2);
  //   expect(obj.updateValue).toHaveBeenCalledWith(4);
  //   expect(obj.updateValue).toHaveBeenCalledTimes(2);
  // });

  it("check for protypes methods  add ", () => {

    const spy=spyOn(Calculator.prototype)

  });
  xit("check for protypes methods  sub ", () => {});
  xit("check for protypes methods  mul ", () => {});
  xit("check for protypes methods  div ", () => {});
});
