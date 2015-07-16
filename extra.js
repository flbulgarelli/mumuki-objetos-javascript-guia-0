var Mock = function(canto) {
  this.canto = canto;
  this.cantar = function() {
    this.canto++;
    return this.canto;
  }
}