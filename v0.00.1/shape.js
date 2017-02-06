var files = ["vector","box","triangle"];
var version = "v0.00.1";
for(var i = 0;i<files.length;i++){
  var fileName = files[i];
  var src = "https://rawgit.com/teak1/shapejs/master/"+version+"/"+fileName+".js";
  var script = document.createElement("script");
  script.setAttribute("src",src);
  document.head.appendChild(script);
}
