// Global variables
var GLOBALS = {};
GLOBALS.FREQ = 50;
GLOBALS.soundEnabled = true;
GLOBALS.audio_keystroke = null;
GLOBALS.audio_filename = {
	'audio_keystroke': 'sound/typewriter-key-1.wav'
};


// Function to move a jQuery object by @param: offset
function moveDown(obj, offset) {
	var _newDown = obj.offset().top + offset;
	obj.css('top', _newDown +'px');
}


function rotateAroundTheHinge(obj, theta, thetanew, time) {
	var times = time / GLOBALS.FREQ;
	var dtheta = (thetanew - theta ) / times;
	rotateAroundTheHingehelper(obj, theta, dtheta, times);
}

function rotateAroundTheHingehelper(obj, theta, dtheta, left) {
	if (!left) return;
	var theta = theta + dtheta;
	var _offset1 = obj.offset();
	obj.css('transform', 'rotate(' +theta + 'deg)');
	var _offset2 = obj.offset();

	console.log(_offset1);
	console.log(_offset2);

	obj.css('top', ((2 * _offset1.top) - _offset2.top) +'px');
	obj.css('left', ((2 * _offset1.left) - _offset2.left) +'px');
	--left;
	setTimeout(function() {
		rotateAroundTheHingehelper(obj, theta, dtheta, left);
	}, FREQ);
}


function loadAudio(key, callback) {
	GLOBALS[key] = new Audio();
	// GLOBALS[key].onload = callback;
	GLOBALS[key].src = GLOBALS.audio_filename[key];
	callback();
}

/** 
 * Function to type @param: text
 * in @param: obj (jQuery object)
 * starts from position @param: i in the @param: text
 * @param: callback (function) called after timeinterval
 * @param: callbackFreq (int) (in ms)
 */
function typethis(obj, text, i, callback, callbackFreq) {
	if (GLOBALS.audio_keystroke == null) {
		loadAudio('audio_keystroke', function() {
			typethis(obj, text, 0, callback, callbackFreq);
		});
		return;
	}

	if (typeof i == 'undefined') i = 0;

	if (i == text.length) {
		obj.html(text);
		if (typeof callback != 'undefined'
				&& typeof callbackFreq != 'undefined') {
			setTimeout(callback, callbackFreq);
		}
		return;
	}
	obj.html(text.substr(0, i + 1) +'|');
	if (GLOBALS.soundEnabled) {
		GLOBALS.audio_keystroke.currentTime = 0;
		GLOBALS.audio_keystroke.play();
	}
	
	setTimeout(function() {
		if (GLOBALS.soundEnabled) GLOBALS.audio_keystroke.pause();
		typethis(obj, text, i + 1, callback, callbackFreq);
	}, 100);
}

/** 
 * Function to give backspace like animation
 * @param: text will be deleted in step by step manner from
 * @param: obj (jQuery object) , untill
 * @param: offset (int) charecters are deleted
 * @param: callback (function) called after timeinterval
 * @param: callbackFreq (int) (in ms)
 */
function backspace(obj, text, offset, callback, callbackFreq) {
	if (offset == -1) {
		obj.html(text);
		if (typeof callback != 'undefined'
				&& typeof callbackFreq != 'undefined') {
				setTimeout(callback, callbackFreq);
			}
		return;
	}

	obj.html(text + '|');

	setTimeout(function() {
		backspace(obj, text.substr(0, text.length - 1), offset - 1, callback, callbackFreq);
	}, 50);
}

/** 
 * Function to select @param: needle
 * in @param: obj (jQuery object)
 * @param: callback (function) called after timeinterval
 * @param: callbackFreq (int) (in ms)
 */
function select(obj, needle, callback, callbackFreq) {
	var text = obj.html();
	if (text.indexOf(needle) != -1) {
		text = text.substr(0, text.indexOf(needle)) + '<span class="_selected">'
			+ needle +'</span>' +text.substr(text.indexOf(needle) + needle.length, text.length);
		obj.html(text);
		obj.children("._selected").css('background', "#D86F62");
		obj.children("._selected").css('color', "white");

		if (typeof callback != 'undefined' && typeof callbackFreq != 'undefined')
			setTimeout(callback, callbackFreq);
	}
}

/** 
 * Function to deselect @param: needle
 * in @param: obj (jQuery object)
 * @param: callback (function) called after timeinterval
 * @param: callbackFreq (int) (in ms)
 */
function deselect(obj, text, callback, callbackFreq) {
	obj.html(text);
	if (typeof callback != 'undefined' && typeof callbackFreq != 'undefined')
		setTimeout(callback, callbackFreq);
}

/** 
 * Function to capitalise "._selected" children
 * from @param: obj (jQuery object)
 * @param: callback (function) called after timeinterval
 * @param: callbackFreq (int) (in ms)
 */
function capitalise(obj, callback, callbackFreq) {
	obj.children("._selected").css("text-transform", "uppercase");
	if (typeof callback != 'undefined' && typeof callbackFreq != 'undefined')
			setTimeout(callback, callbackFreq);
}


/** 
 * Function to change @param: init (string) to @param: fin (string)
 * in @param: obj (jQuery object)
 * @param: callback (function) called after timeinterval
 * @param: callbackFreq (int) (in ms)
 */
function changeTextTo(obj, init, fin, callback, callbackFreq) {
	var text = obj.html();
	text = text.replace(init, fin);
	obj.html(text);
	if (typeof callback != 'undefined' && typeof callbackFreq != 'undefined')
		setTimeout(callback, callbackFreq);
}

/**
 * Function to make divs for each word in @param: obj (jQuery object)
 * @param: callback (function) called after timeinterval
 * @param: callbackFreq (int) (in ms)
 */
function makeDivs(obj, callback, callbackFreq) {
	var text = obj.html();
	var elems = text.split(' ');
	obj.html("");
	elems.forEach(function(elem) {
		var d = document.createElement('div');
		$(d).css('display', 'inline-block');
		$(d).html(elem);
		obj.append(d);
	});

	if (typeof callback != 'undefined' && typeof callbackFreq != 'undefined')
		setTimeout(callback, callbackFreq);
}