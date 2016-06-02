/* Index JS */


window.onload = function() {

	mv.app.toTip();
	console.log("check2");

};
var mv={}; 

mv.tools = {};

mv.ui = {};

mv.ui.textChange = function(obj, str){

	obj.onfocus = function(){
		if(this.value == str){
			this.value='';
		}	
	};

	obj.onblur = function(){
		if(this.value == ''){
			this.value = str;
		}
	};
};

mv.app = {};

mv.app.toTip = function(){
	var oText1 = document.getElementById('text1');
	var oText2 = document.getElementById('text2');

	mv.ui.textChange(oText1,'Search website');
	mv.ui.textChange(oText2,'Search website');
};


