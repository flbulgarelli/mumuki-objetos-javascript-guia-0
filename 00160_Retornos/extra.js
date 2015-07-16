var pepita = {}
pepita.cantar = function() {
  return this.canto
}

var canto = {}
canto.size_count = 0
canto.length = function() {
  this.size_count++;
}

pepita.canto = canto