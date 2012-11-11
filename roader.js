var Loader = function(){
	var self = this;

	var render = function(){
		console.log("render");
	};

	// create xhr obj and load from str and passed it to callback function.

	this.load = function(tmpl,query,callback){
		var lastDir = location.pathname.split("/").pop();
		var dirList = location.pathname.split("/").filter(function(dir){
			return lastDir !== dir;
		},this);
		console.log(dirList);
		var tmpls = tmpl.split("/");
		tmpls.map(function(dir){
			dirList.push(dir);
		},this)
		console.log(dirList);



		var url = location.protocol +  dirList.join("/");
		console.log(url);


		var req = new XMLHttpRequest();
		req.open("GET",url);
		req.onload = function(evt){
			var responseTxt = evt.target.responseText;
			callback(responseTxt);

		};
		req.send();
	}











};
