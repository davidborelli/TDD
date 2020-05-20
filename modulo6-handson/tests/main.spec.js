const expect = require("chai").expect;

let arr = [];

beforeEach(function () {
  arr = [1, 2, 3];
});

describe("Main", function () {
  // Smoke test, serve para testar tipos, e se ela existe, teste básico
  it("should be an array", function () {
    expect(arr).to.be.a("array");
  });

  it("should have array", function () {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  it("should remove the value from arrau", function () {
    arr.pop();

    expect(arr).to.not.include(3);
  });

  it("should return true when pop form array", function () {
    expect(arr.pop() === 3).to.be.true;
  });

  it("should be array size 3", function () {
    arr.pop();
    expect(arr).to.have.lengthOf(2);
  });
});
