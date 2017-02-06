function box(x,y,w,h){
  this.size = new vector(x,y);
  this.pos = new vector(w,h);
  //constructor contains size<vector> and pos<vector>
}
box.prototype = Object.assign(box.prototype,{
  collide(other){
    if(this.pos.x-other.size.x<=other.pos.x && this.pos.x+this.size.x >=b.pos.x){
      if(this.pos.y-other.size.y<=other.pos.y && this.pos.y+this.size.y >=b.pos.y)return true;
    }
    return false;
  }
});
