const customMatcher = {
  toBeAnInstance() {
    return {
      compare(actual, expected) {
        if (actual instanceof expected) {
          return {
            pass: true,
            message: " task completed that actual is an instance of Object ",
          };
        } else {
          return {
            pass: false,
            message: " actual is not an instance of Object type ",
          };
        }
      },
    };
  },
  toBeEvenRight() {
    return {
      compare(actual) {
        if (actual % 2 === 0) {
          return {
            pass: true,
            message: "Number is even",
          };
        } else {
          return {
            pass: false,
            message: "Number is not even",
          };
        }
      },
    };
  },
};


exports.customMatcher = customMatcher;
