(function(){
	var keys = {
		SHIET: 16,
		CTRL: 17,
		SPACE: 32,
		LEFT: 37,
		UP: 38,
		RIGHT: 39,
		DOWN: 40
	};
	
	function isKey(key) {
		var code;
		if (typeof keys[key] !== 'undefind') {
			code = keys[key];
		}
		else {
			code = key.charCodeAt(0);
		}
		return (event.keyCode == cpde);
	}
	
	window.input = {
		isKey: function(key) {
			return isKey(key.toUpperCase());
		},
		isLock: false
	};
}) ();








