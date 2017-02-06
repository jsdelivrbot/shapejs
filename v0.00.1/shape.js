var files = ["box","triangle","vector"];
var version = "v0.00.1";
for(var i = 0;i<files.length;i++){
  var fileName = files[i];
  var src = "https://raw.githubusercontent.com/teak1/shapejs/master/v0.00.1/"+fileName+".js";
  var script = document.createElement("script");
  script.setAttrabute("src",src);
  document.head.appendChild(script));
}
