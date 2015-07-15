describe "pepita" do
  it('existe') do
      expect(!!defined? pepita).to be true
  end
  it('es un objeto') do
      expect(pepita.class).to be Object
  end
end

describe("pepita", function(){
  it( "existe", function(){
    assert.notOk(typeof(pepita) !== undefined );
  });
  it("es un objecto", function(){
    assert(pepita.constructor == Object);
  });
})