describe "anastasia" do
  it('se le envio el mensaje cantar exactamente una vez') do
      expect(anastasia.canto).to eq 1
  end
end

describe('anastasia', function () {
  it('se le envio el mensaje cantar exactamente una vez', function () {
    assert(anastasia.canto === 1);
  });
});