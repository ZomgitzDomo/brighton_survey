$(function() {

/*
	var colourscheme = $('body').attr('id');

	if(!colourscheme) {} else {
		$('<style>.underline:after { background: #'+colourscheme+'; } .cover, #share { background: #'+colourscheme+'; }</style>').appendTo('head');
	}
*/

	var styles = {
	modernfeminine: 0,
	urban: 0,
	colourriot: 0,
	minimalist: 0
	}, result = 'modernfeminine';

	$('.answers .button').on('click', function() {
		if ($(this).attr('data-style') == 'modernfeminine') { styles.modernfeminine++ };
		if ($(this).attr('data-style') == 'urban') { styles.urban++ };
		if ($(this).attr('data-style') == 'colourriot') { styles.colourriot++ };
		if ($(this).attr('data-style') == 'minimalist') { styles.minimalist++ };
	})

// this will get tallie up when the last question links to result and you change the #question7 to which ever amount of questions you have
	$('#question7 .button').on('click', function() {
		if(whichStyle(styles) == 'modernfeminine') { $('#result').css({background: '#E12936'}); }
		if(whichStyle(styles) == 'urban') { $('#result').css({background: '#a8ae9c'}); }
		if(whichStyle(styles) == 'colourriot') { $('#result').css({background: '#add4d6'}); }
		if(whichStyle(styles) == 'minimalist') { $('#result').css({background: '#dad8d6'}); }
		setTimeout(function() {window.location.href = "result/"+whichStyle(styles)+".html"}, 1200);
	});



	function whichStyle(styles) {

	    var max = -Infinity; // calling Math.max with no arguments returns -Infinity
	    var chosenStyle = null;
	    for (var key in styles) {
	       var num = styles[key];

	       if (num > max) {
	           max = num;
	           chosenStyle = key;
	       }

	       max = (num > max && num) || max;
	    }

	    return chosenStyle;
	}

    $('.subscribe form').submit(function (e) {
        e.preventDefault();
        $.getJSON(
        this.action + "?callback=?",
        $(this).serialize(),
        function (data) {
            if (data.Status === 400) {
                alert('error');
            } else { // 200
	            $('.subscribe input').prop('disabled', true);
	            $('.subscribe button').text('Thank You!').prop('disabled', true).removeClass('underline');
            }
        });
    });

	$('.slideshow1').slick({
		autoplay: true,
		arrows: false,
		fade: true,
		pauseOnHover: false,
		swipe: false,
		draggable: false,
		touchMove: false,
		speed: 1600,
		autoplaySpeed: 2000
	});

	$('.slideshow2').slick({
		autoplay: true,
		arrows: false,
		fade: true,
		pauseOnHover: false,
		swipe: false,
		draggable: false,
		touchMove: false,
		speed: 1600,
		autoplaySpeed: 2000
	});

	$('.share').on('click', function() {
		$('#share').addClass('open');
		return false;
	});

	$('#share .close').on('click', function() {
		$('#share').removeClass('open');
		return false;
	});


	//Scroll arrows

	var sections = $('.section');
	console.log(sections);
	var i =0;

	function next(){
	    if(i == 0){
	        $('.up').css({opacity:1})
	    }
	    if(i < sections.length -1){
	        i++;
	        if(i == sections.length -1){
	             $('.down').css({opacity:0.2})
	        }
	         $('html, body').animate({
	            scrollTop: sections[i].offsetTop-120
	        }, 1000);
	    }
	}

	function prev(){
	    if(i == sections.length -1){
	        $('.down').css({opacity:1})
	    }
	    if(i > 0){
	        i--;
	        if(i == 0){
	        	$('.up').css({opacity:0.2})
	        }
	         $('html, body').animate({
	            scrollTop: sections[i].offsetTop-120
	        }, 1000);
	    }
	}
	$('html').keydown(function(e){
	    if(e.which == '38'){
	        prev();
	    }
	   if(e.which == '40'){
	        next();
	    }
	});
	$('.down').click(function(e){
	   e.preventDefault();
	   next();
	});

	$('.up').click(function(e){
	   e.preventDefault();
	   prev();
	});


});

$(window).scroll(function() {
	if($(window).scrollTop() > 60) {
		$('.stickyshare').addClass('visible');
		$('header').addClass('scrolled');
	} else {
		$('.stickyshare').removeClass('visible');
		$('header').removeClass('scrolled');
	}
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}






$('.carousel1').slick();
