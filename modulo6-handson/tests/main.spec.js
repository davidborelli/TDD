const expect = require("chai").expect;
const calc = require("../src/main");

/*
01 - Smoke test (Simples, verificar se os metodos existem)
*/

describe("calc", function () {
  describe("Smoke tests", function () {
    it("should exist the calc lib", function () {
      expect(calc).to.be.exist;
    });

    it("should exists the method 'sum'", function () {
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.a("function");
    });

    it("should exists the method 'sub'", function () {
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a("function");
    });

    it("should exists the method 'mult'", function () {
      expect(calc.mult).to.exist;
      expect(calc.mult).to.be.a("function");
    });

    it("should exists the method 'div'", function () {
      expect(calc.div).to.exist;
      expect(calc.div).to.be.a("function");
    });
  });
});
