/**
* Let's get this show on the road...
*/
(function() {
    var nightTheme = false;

    $(document).ready(function() {
        setTheme();
        if(nightTheme) loadNightLogoImage();
        initNav();
    	initListeners();
        updateFooter();
    });

    function setTheme() {
        var hour = (new Date()).getHours();
        if(hour > 19 || hour < 4) {
            $("body").addClass("night");
            nightTheme = true;
        }
    }

    function loadNightLogoImage() {
        var src = $("img.kineo_logo").attr("src");
        var lastIndex = src.lastIndexOf(".");
        var newFilename = [src.slice(0, lastIndex), "_night", src.slice(lastIndex)].join('');

        $("img.kineo_logo").attr("src", newFilename);
    }

    function initNav() {
        if($('#mobile_label').css('display') != 'none') {
            $('#nav_bar').slideUp(0);
            $('#mobile_label span.visible').css('display', 'none');
            $('#mobile_label span.hidden').css('display', 'inline');
        }
        else {
            $('#nav_bar').slideDown(0);
            // disable button for current page
            $("#nav_bar .button[data-id='" + $('body').attr('class').split(" ")[0] + "']").addClass('disabled');
        }

        $('a.back_up').fadeOut(0);
    }

    function initListeners() {
    	$('#nav_bar .button').click(onButtonClicked);
        $('#mobile_label').click(toggleNav);
        $(window).scroll(onScroll);

        if (matchMedia) {
        	var mq = window.matchMedia("(min-width: 501px)");
        	mq.addListener(onWidthChange);
        }
    }

    function updateFooter() {
        var year = (new Date()).getFullYear();
        $(".year", "#footer").html(year);
    }

    function toggleNav(e) {
        e.preventDefault();

        var $nav_bar = $('#nav_bar');

        $('#mobile_label span.visible').css('display', $nav_bar.css('display') == 'none' ? 'inline' : 'none');
        $('#mobile_label span.hidden').css('display', $nav_bar.css('display') != 'none' ? 'inline' : 'none');

        $nav_bar.slideToggle(400);
    }

    function onButtonClicked(event) {
    	if(!$(event.currentTarget).hasClass("disabled")) {
            $('#nav_bar .button').removeClass('disabled');
            $(event.currentTarget).addClass('disabled');
        } else {
            event.preventDefault();
        }
    }

    function onWidthChange(mq) {
        initNav();
    }

    function onScroll(event) {
        var fadeTime = 300;
        var $btn = $('a.back_up');

        if($(window).scrollTop() < $(window).height()) $btn.fadeOut(fadeTime);
        else $btn.fadeIn(fadeTime);
    }
})();
