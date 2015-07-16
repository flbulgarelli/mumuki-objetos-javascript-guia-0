describe('', function () {
  it('pepita entiende vivacidad', function () {
    assert(pepita.vivacidad() !== undefined ); 
  });

  it('la vivacidad de pepita es 15', function () {
    assert(pepita.vivacidad() === 15);
  });
});