function triangle(){
  this.point1 = new vector(a,b);
  this.point2 = new vector(c,d);
  this.point3 = new vector(e,f);
}
triangle.prototype=Object.assign(triangle.prototype,{
  getPoints(){
    return new Array(this.point1,this.point2,this.point3)
  }
})
