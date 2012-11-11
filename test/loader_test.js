describe("Loader",function(){
	var loader = new Loader();
	var q = document.querySelector("#sample");
	var self = this;
	describe("setup",function(){
		it("should create instance of Loader",function(){
			assert((loader instanceof Loader) === true);
		});

		it("should received response when call load",function(){
			loader.load("tmp/sample.html","#sample",function(content){
				var q = document.querySelector("#sample");
				assert(!!content === true );
				q.innerHTML = content;
			});
		});

		it("should have #sample elem has many strings",function(){
			setTimeout(function(){
				var q = document.querySelector("#sample");
				assert(q.innerHTML.length > 10);
			},500);

		});

	});
});