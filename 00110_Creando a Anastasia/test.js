describe("anastasia", function(){
  it( "existe", function(){
    assert(typeof(anastasia) !== undefined );
  });
  it("es un objecto", function(){
    assert(anastasia.constructor == Object);
  });
})