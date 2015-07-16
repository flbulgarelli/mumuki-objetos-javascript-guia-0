describe "anastasia" do
  it('existe') do
      expect(!!defined? anastasia).to be true
  end
  it('es un objeto') do
      expect(anastasia.class).to be Object
  end
  it('anasitasia.cantar! devuelve "pri"') do
      expect(anastasia.cantar!).to eq "pri"
  end
end

describe("anastasia", function(){
  it( "existe", function(){
    assert(typeof(anastasia) !== undefined );
  });
  it("es un objecto", function(){
    assert(anastasia.constructor == Object);
  });
  it('anastasia.cantar() devuelve "pri', function () {
    assert(anastasia.cantar() === "pri");
  });
})