describe("triangleType", function() {
  it("returns equilateral if all sides are equal", function() {
    expect(triangleType(1, 1, 1)).to.equal("equilateral");
  });

  it("returns isosceles if two sides are equal and the other is not", function() {
    expect(triangleType(1, 1, 0.5)).to.equal("isosceles");
  });

  it("returns isosceles if two sides are equal and the other is not", function() {
    expect(triangleType(1, 0.5, 1)).to.equal("isosceles");
  });

  it("returns isosceles if two sides are equal and the other is not", function() {
    expect(triangleType(0.5, 1, 1)).to.equal("isosceles");
  });

  it("returns scalene if no sides are equal", function() {
    expect(triangleType(3, 4, 5)).to.equal("scalene");
  });

  it("returns not a triangle if sides do not make a triangle", function() {
    expect(triangleType(1, 4, 5)).to.equal("Not a triangle.");
  });

  it("returns not a triangle if sides do not make a triangle", function() {
    expect(triangleType(3, 1, 5)).to.equal("Not a triangle.");
  });

  it("returns not a triangle if sides do not make a triangle", function() {
    expect(triangleType(3, 4, 1)).to.equal("Not a triangle.");
  });
});
