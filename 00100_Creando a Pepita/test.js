describe("pepita", function(){
  it( "existe", function(){
    assert(typeof(pepita) !== undefined );
  });
  it("es un objecto", function(){
    assert(pepita.constructor == Object);
  });
})