function vector(x,y,z){
  this.length = arguments.length;//posible later use?
  this.x = x || 0;//default to x or 0
  this.y = y || 0;//default to y or 0
  this.z = z || 0;//default to z or 0
  if(typeof x != "undefined" && x.constructor.name==="vector"){// in case of new vector(<vector>)
    this.x = x.x;
    this.y = x.y;
    this.z = x.z;
  }else if(arguments.length===1){//in case of new vector(<number>) creates a vector using angle <number> and sets x to angle
    this.x = Math.cos(x);
    this.y = Math.sin(x);
    this.z = x;
  }
}
vector.prototype=Object.assign(vector.prototype,{
  add(x,y,z){
    //establish b as a useable datatype to prevent error by running it through new vector() 
    var b = new vector(x,y,z);
    this.x+=b.x;
    this.y+=b.y;
    this.z+=b.z;
    return this;
  },
  sub(x,y,z){
    //establish b as a useable datatype to prevent error by running it through new vector()
    var b = new vector(x,y,z);
    this.x-=b.x;
    this.y-=b.y;
    this.z-=b.z;
    return this;
  },
  mult(x,y,z){
    //establish b as a useable datatype to prevent error by running it through new vector()
    var b = new vector(x,y,z);
    this.x*=b.x;
    this.y*=b.y;
    this.z*=b.z;
    return this;
  },
  dist(x,y,z){
    //establish b as a useable datatype to prevent error by running it through new vector()
    var b = new vector(x,y,z);
    var dx = this.x-b.x;
    var dy = this.y-b.y;
    var dz = this.z-b.z;
    return Math.pow(Math.pow(dx,2)+Math.pow(dy,2)+Math.pow(dz,2),1/3);
  },
  avg(){
    //take average of all inputed values
    return (this.x+this.y+this.z)/this.length;
  }
});
