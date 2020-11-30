	var banstatus = 1;
	var bantime = 5000;
	
	window.onload = function() {
		banloop();
	};
	var startbanloop = setInterval(function(){
		banloop();
	}, bantime);
	
	function banloop() {
		if (banstatus === 1) {
			document.getElementById("pban2").style.opacity = "0";
			setTimeout(function(){
				document.getElementById("pban1").style.right = "0px";
				document.getElementById("pban1").style.zIndex = "1000px";
				document.getElementById("pban2").style.right = "-1000px";
				document.getElementById("pban2").style.zIndex = "1200px";
				document.getElementById("pban3").style.right = "1000px";
				document.getElementById("pban3").style.zIndex = "800x";
			}, 500);
			setTimeout(function(){
			document.getElementById("pban2").style.opacity = "1";
			}, 1000);
			banstatus = 2;
		}
		else if (banstatus === 2) {
			document.getElementById("pban3").style.opacity = "0";
			setTimeout(function(){
				document.getElementById("pban2").style.right = "0px";
				document.getElementById("pban2").style.zIndex = "1000px";
				document.getElementById("pban3").style.right = "-1000px";
				document.getElementById("pban3").style.zIndex = "1200px";
				document.getElementById("pban1").style.right = "1000px";
				document.getElementById("pban1").style.zIndex = "800px";
			}, 500);
			setTimeout(function(){
			document.getElementById("pban3").style.opacity = "1";
			}, 1000);
			banstatus = 3;
		}
		else if (banstatus === 3) {
			document.getElementById("pban1").style.opacity = "0";
			setTimeout(function(){
				document.getElementById("pban3").style.right = "0px";
				document.getElementById("pban3").style.zIndex = "1000px";
				document.getElementById("pban1").style.right = "-1000px";
				document.getElementById("pban1").style.zIndex = "1001px";
				document.getElementById("pban2").style.right = "1000px";
				document.getElementById("pban2").style.zIndex = "999px";
			}, 500);
			setTimeout(function(){
			document.getElementById("pban1").style.opacity = "1";
			}, 1000);
			banstatus = 1;
		}
	}