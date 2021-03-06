function GridEntity() {

  this.x = 0;
  this.y = 0;
  this.row = 0;
  this.col = 0;
  this.id = 0;
  this.isActive = false;

  this.draw = function() {
    if (this.isActive) {
      //var gridSize = canvas.width / global.map[0].length ;
      canvas.context.strokeStyle = settings.GRID_COLOR;
      canvas.context.strokeRect(this.x, this.y, 40, 40);
      canvas.context.stroke();
    }
  };

  this.add = function(_x, _y, _row, _col, _id) {
      this.x = _x;
      this.y = _y;
      this.row = _row;
      this.col = _col;
      this.isActive = true;
    },

    this.reset = function(_x, _y, _row, _col, _id) {
      this.x = _x;
      this.y = _y;
      this.row = _row;
      this.col = _col;
      this.id = _id;

    };

}
