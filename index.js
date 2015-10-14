function repositionElems() {
	var obj = $("#anim-frame .obj-main");
	var elems = obj.children('div');
	for (i = elems.length - 1; i > -1; i--) {
		var offset = elems.eq(i).offset();
		elems.eq(i).css('position', 'fixed');
		elems.eq(i).css('top', offset.top +'px');
		elems.eq(i).css('left', offset.left +'px');
	}
}

function upSideDownElems() {
	var obj = $("#anim-frame .obj-main");
	var elems = obj.children('div');
	var loffset = elems.eq(0).offset();
	elems.each(function() {
		$(this).css('top', loffset.top +'px');
		$(this).css('left', loffset.left +'px');
		loffset.top += $(this).height() + 20;
	});

	elems.eq(2).css('color', 'red');
	elems.css('border', 'none');

	setTimeout(function() {
		elems.eq(0).css('left', '-500px');
		elems.eq(1).css('left', '-1200px');
		elems.eq(3).css('left', (screen.width + 200) +'px');

		elems.eq(2).css('color', 'black');
		setTimeout(function() {
			var x = elems.eq(2);
			p = x.html();
			x.html("");
			for (i = 0 ; i<p.length; i++) {x.append('<span>' +p[i] +'</span>')};
			var y = x.children('span');
			var offsetDaddy = x.offset();
			for (i = y.length - 1; i > -1; i--) {
				var offset = y.eq(i).offset();
				y.eq(i).css('position', 'absolute');
				y.eq(i).css('top', offset.top - offsetDaddy.top +'px');
				y.eq(i).css('left', offset.left - offsetDaddy.left +'px');
			}

			x.css('width', '64px');
			x.css('height', '64px');

			setTimeout(function() {
				y.css('top', '1px');
				y.css('left', '1px');
				x.css('background', 'yellowGreen');
				x.css('color', 'yellowGreen');
				x.css('transform', 'rotate(720deg)');

				$(".text_2").typethis("Please prove you are a human!", 0, function() {
					$(".text_2").typethis("Please prove you are a human!<br>Move this block to the right!", 33);
				}, 500);
			}, 100);
		}, 100);
	}, 2000 );
}


// js animtations for slides
$(document).ready(function() {
	var obj = $("#anim-frame .obj-main");
	obj.typethis("welcom", 0, function() {
		obj.backspace("welcom", 6, function() {
			obj.typethis("Welcome to my page!", 0, function() {
				obj.backspace("Welcome to my page!", 8, function() {
					obj.typethis("Welcome to minhaz's page!", 11, function() {
						obj.select("minhaz's", function() {
							obj.capitalise(function() {
								obj.deselect("Welcome to MINHAZ'S page!", function() {
									obj.select("MINHAZ'S", function() {
										obj.changeTextTo("MINHAZ'S", "MINHAZ", function() {
											obj.deselect("Welcome to MINHAZ page!", function() {
												obj.makeDivs(function() {
													obj.children("div").css("margin-left", "10px");
													setTimeout(repositionElems, 1000);
													setTimeout(upSideDownElems, 1000);
												}, 500);
											}, 1000);
											$("body").css("background", "white");
										}, 500);
									}, 500);
								}, 1000);
							}, 500);
						}, 500);
					}, 1000);
				}, 500);
			}, 1000);
		}, 500);
	}, 500);


	setTimeout(function() {
		// var _obj = $("#anim-frame .obj-main div").eq(2);
		for (var i = $("#anim-frame .obj-main div").length - 1; i >= 0; i--) {
			var _obj = $("#anim-frame .obj-main div").eq(i);
			var _offset =  _obj.offset();
			_obj.css("top", _offset.top +"px");
			_obj.css("left", _offset.left +"px");
			_obj.css("position", "absolute");
		}
	}, 300);


});