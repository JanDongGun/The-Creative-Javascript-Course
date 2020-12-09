function Mouse(name, color) {
  this.name = name;
  this.color = color;
}

Mouse.prototype.run = function () {
  console.log(this);
};

let mouse1 = new Mouse("Mouse1", "Yellow");
mouse1.run();
