var Mock = function(canto) {
  this.canto = canto;
  this.cantar = function() {
    this.canto ||= 0;
    this.canto++;
    return this.canto;
  }
}