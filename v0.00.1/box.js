function box(x,y,w,h,tags){
  this.size = new vector(x,y);
  this.pos = new vector(w,h);
  this.tags=tags;
  this.mask = new SAT.Polygon(new SAT.V(this.pos.x,this.pos.y),[new SAT.V(0,0),new SAT.V(0,this.size.y),new SAT.V(this.size.x,this.size.y),new SAT.V(this.size.x,0)]);
  //constructor contains size<vector> and pos<vector>
}
box.prototype = Object.assign(box.prototype,{
  collide(other){
    var response = new SAT.Response();
    var collided = SAT.testPolygonPolygon(this.mask,other.mask, response);
    return {response:response,isColliding:collided}
  },
  pointInShape(point){
    return SAT.pointInPolygon(p,this.mesh);
  }
});
