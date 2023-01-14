const assert = require("assert");
import getTimeInMillis from "../src/index";

describe("getTimeInMillis", function () {
  it("works", () => {
    assert.ok(!isNaN(getTimeInMillis()));
  });
});
