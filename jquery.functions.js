(function( $ ) {
	// jQuery Functions
	// $.fn.shakker = function(options)
	$.fn.typethis = function(text, i, callback, callbackFreq) {
		this.each(function() {
			typethis($(this), text, i, callback, callbackFreq);
		});
	}

	$.fn.backspace = function(text, offset, callback, callbackFreq) {
		this.each(function() {
			backspace($(this), text, offset, callback, callbackFreq);
		});
	}

	$.fn.select = function(needle, callback, callbackFreq) {
		this.each(function() {
			select($(this), needle, callback, callbackFreq);
		});
	}

	$.fn.deselect = function(text, callback, callbackFreq) {
		this.each(function() {
			deselect($(this), text, callback, callbackFreq);
		});
	}

	$.fn.capitalise = function(callback, callbackFreq) {
		this.each(function() {
			capitalise($(this), callback, callbackFreq);
		});
	}

	$.fn.changeTextTo = function(init, fin, callback, callbackFreq) {
		this.each(function() {
			changeTextTo($(this), init, fin, callback, callbackFreq);
		});
	}

	$.fn.makeDivs = function(callback, callbackFreq) {
		this.each(function() {
			makeDivs($(this), callback, callbackFreq);
		});
	}

}( jQuery ));