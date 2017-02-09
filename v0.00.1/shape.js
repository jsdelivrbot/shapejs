var files = ["vector","box","triangle"];
var version = "v0.00.1";
for(var i = 0;i<files.length;i++){
  var fileName = files[i];
  var src = "https://rawgit.com/teak1/shapejs/master/"+version+"/"+fileName+".js";
  var script = document.createElement("script");
  script.setAttribute("src",src);
  document.head.appendChild(script);
  console.log("loading "+files[i]+" from "+src);
}
files = ["https://rawgit.com/jriecken/sat-js/master/SAT.js","https://rawgit.com/jriecken/sat-js/master/SAT.min.js"];
for(var i = 0;i<files.length;i++){
  var fileName = files[i];
  var src = fileName;
  var script = document.createElement("script");
  script.setAttribute("src",src);
  document.head.appendChild(script);
  console.log("loading "+files[i]+" from "+src);
}
