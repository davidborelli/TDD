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

  describe("Sum", function () {
    it("should return 4 when `sum(2,2)`", function () {
      expect(calc.sum(2, 2)).to.be.equal(4);
    });
  });

  describe("Sub", function () {
    it("should return 4 when `sub(6,2)`", function () {
      expect(calc.sub(6, 2)).to.be.equal(4);
    });

    it("should return -4 when `sub(2,6)`", function () {
      expect(calc.sub(2, 6)).to.be.equal(-4);
    });
  });

  describe("Mult", function () {
    it("should return 4 when `mult(2,2)`", function () {
      expect(calc.mult(2, 2)).to.be.equal(4);
    });
  });

  describe("Div", function () {
    it("should return 4 when `div(8,2)`", function () {
      expect(calc.div(8, 2)).to.be.equal(4);
    });

    it("should return `Não é possível divisão por zero!` when divide by 0", function () {
      expect(calc.div(8, 0)).to.be.equal("Não é possível divisão por zero!");
    });
  });
});
