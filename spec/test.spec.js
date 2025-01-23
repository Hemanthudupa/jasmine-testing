// spec/calculatorSpec.js
const { opertion, Calculator } = require("../test");
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

  // it("check for protypes methods  add ", () => {
  //   const spy = spyOn(Calculator.prototype, "update");

  //   opertion(1, 2, "add");
  //   expect(spy).toHaveBeenCalled();
  //   expect(spy).toHaveBeenCalledWith(3, "add");
  //   expect(spy).toHaveBeenCalledTimes(1);
  // });
  // xit("check for protypes methods  sub ", () => {});
  // xit("check for protypes methods  mul ", () => {});
  // xit("check for protypes methods  div ", () => {});

  // it("implementing callFake method to spies ", () => {
  //   const spy = spyOn(Calculator.prototype, "update").and.callFake((a, b) => {
  //     let d = +""+a + b;
  //     return d;
  //   });
  //   // opertion(1, 2, "add");

  //   expect(opertion(1, 2, "add")).toBe("3add");
  // });

  // it(" implementing the returnValue handy function ", () => {
  //   const spy = spyOn(Calculator.prototype, "add").and.returnValue(
  //     " updated successfully done "
  //   );

  //   const spy2=spyOn(Calculator.prototype, "update").and.callThrough()
  //   opertion(1, 3, "add");

  //   expect(spy2).toHaveBeenCalledWith(" updated successfully done ")
  // });
  // it("testing new logics ", () => {
  //   const spy2 = spyOn(Calculator.prototype, "update").and.callThrough();
  //   opertion(1, 3, "add");

  //   expect(spy2).toHaveBeenCalledWith(4);
  // });

  // it(" check the error is handling there or not ", function name() {
  //   const spy = spyOn(Calculator.prototype, "update").and.throwError(
  //     "error came"
  //   );
  //   expect(() => {
  //     opertion(1, 3, "add");
  //   }).toThrow(new Error("error came"));
  // });

  // adding property in the jasmine

  // it("adding property in jasmine ", () => {
  //   Object.defineProperty(Calculator.prototype, "version", {
  //     value: "10.0",
  //   });
  //   console.log(Calculator.prototype.version);
  // });

  // it(" spy on version property ", () => {
  //   const ob = Object.defineProperty(Calculator.prototype, "version", {
  //     get: () => {
  //       return 10;
  //     },
  //   });
  //   const calci = new Calculator();
  //   const spy = spyOnProperty(calci, "version", "get").and.callThrough();

  //   // Access the version property to trigger the getter
  //   const version = calci.version;

  //   // Check that the spy was called
  //   expect(spy).toHaveBeenCalled();
  //   expect(version).toBe(10);
  // });

  it(" fetching the version from git hub gist feautre ", async function () {
    const data = await fetch(
      "https://gist.githubusercontent.com/Hemanthudupa/90ac03eab3b4a514c808507a6f9c6c00/raw/99be03460d7056f104343818027642f14f78e932/gistfile1.txt"
    );
    const mainData = await data.json();
    console.log(mainData);
    let obj = { versoion: 0.4 };
    expect((() => {
      return mainData;
    })()).toEqual(obj);
  });
});
