var pepita = new Object()
pepita.cantar = function() {
  return this.canto
}

var canto = new Object()
canto.size_count = 0
canto.length = function() {
  this.size_count++;
}

pepita.canto = canto