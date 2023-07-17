const { sqlForPartialUpdate } = require("./sql");

describe("sqlForPartialUpdate", function () {
  test("works with  1", function () {
    const result = sqlForPartialUpdate(
      { fun1: "v1" },
      { fun1: "f1", ff2: "f2" }
    );
    expect(result).toEqual({
      setCols: '"f1"=$1',
      values: ["v1"],
    });
  });
});
