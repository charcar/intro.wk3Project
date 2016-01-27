describe("pingPong", function() {
  it("is divisible by 15", function() {
    expect(pingPong(30)).to.equal("ping-pong");
  });

  it("is divisible by 5", function() {
    expect(pingPong(10)).to.equal("pong");
  });

  it("is divisble by 3", function() {
    expect(pingPong(6)).to.equal("ping");
  });

  it("is an integer not divisible by 3, 5, or 15", function() {
    expect(pingPong(7)).to.equal(7);
  });
});
