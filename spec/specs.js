describe('pingPong', function() {
  it("is false for a non integer value", function() {
    expect(pingPong("foobar")).to.equal("Input an integer, please");
  });

  it("is divisible by 15", function() {
    expect(pingPong(30)).to.equal("ping-pong");
  });

  it("is divisible by 5", function() {
    expect(pingPong(10)).to.equal("pong");
  });

  it("is divisble by 3", function() {
    expect(pingPong(6)).to.equal("ping");
  });

  // it("is divisble by 5") function() {
  //   expect(pingPong(10).to.equal("pong"))
  // });





  });
