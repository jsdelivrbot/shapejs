function triangle(x1,y1,x2,y2,x3,y3,tags){
  this.tags = tags;
  this.points = [new SAT.V(x1,y1),new SAT.V(x2,y2),new SAT.V(x3,y3)];
  this.mask = new SAT.Polygon(new SAT.V(),this.points);
}
triangle.prototype = Object.assign(box.prototype,{
  collide(other){
    var response = new SAT.Response();
    var collided = SAT.testPolygonPolygon(this.mask,other.mask, response);
    return {response:response,isColliding:collided}
  },
  pointInShape(point){
    return SAT.pointInPolygon(p,this.mesh);
  }
});
