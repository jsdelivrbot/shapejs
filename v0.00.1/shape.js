var files = ["vector","box","triangle","scene/colider_divisions"];
var version = "v0.00.1";
for(var i = 0;i<files.length;i++){
  var fileName = files[i];
  var src = "https://rawgit.com/teak1/shapejs/master/"+version+"/"+fileName+".js";
  var script = document.createElement("script");
  script.setAttribute("src",src);
  document.head.appendChild(script);
  console.log("loading "+files[i]+" from "+src);
}
files = ["https://cdn.jsdelivr.net/gh/jriecken/sat-js/SAT.min.js"];//,"https://www.rawgit.com/processing-js/processing-js/v1.4.8/processing.min.js"];
for(var i = 0;i<files.length;i++){
  var fileName = files[i];
  var src = fileName;
  var script = document.createElement("script");
  script.setAttribute("src",src);
  document.head.appendChild(script);
  console.log("loading "+files[i]+" from "+src);
}
files = ["p5.dom","p5","p5.sound"];
for(var i = 0;i<files.length;i++){
  var fileName = files[i];
  var src = "https://cdn.jsdelivr.net/gh/teak1/shapejs/req/"+fileName+".js";
  var script = document.createElement("script");
  script.setAttribute("src",src);
  document.head.appendChild(script);
  console.log("loading "+files[i]+" from "+src);
}
