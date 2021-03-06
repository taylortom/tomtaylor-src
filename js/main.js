/**
* Let's get this show on the road...
*/
var nightTheme = false;
$('body').ready(setTheme);

$(function init() {
    // if(nightTheme) loadNightLogoImage();
    initNav();
    initListeners();
    updateFooter();

    $('body').fadeIn(500);
});

function setTheme() {
    var hour = (new Date()).getHours();
    var isDayTime = hour < 20 && hour > 4;
    $("body").addClass(isDayTime ? "day" : "night");
    nightTheme = !isDayTime;
}

function loadNightLogoImage() {
    var src = $("img.kineo_logo").attr("src");
    var lastIndex = src.lastIndexOf(".");
    var newFilename = [src.slice(0, lastIndex), "_night", src.slice(lastIndex)].join('');

    $("img.kineo_logo").attr("src", newFilename);
}

function initNav() {
    if($('#menu_button').css('display') !== 'none') {
        $('#nav_bar').slideUp(0);
        $('#menu_button span.visible').css('display', 'none');
        $('#menu_button span.hidden').css('display', 'inline');
    }
    else {
        $('#nav_bar').slideDown(0);
        // disable button for current page
        $("#nav_bar .button[data-id='" + $('body').attr('data-page') + "']").addClass('disabled');
    }
}

function initListeners() {
    $('#nav_bar .button').click(onButtonClicked);
    $('#menu_button').click(toggleNav);
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

    $('#menu_button span.visible').css('display', $nav_bar.css('display') == 'none' ? 'inline' : 'none');
    $('#menu_button span.hidden').css('display', $nav_bar.css('display') != 'none' ? 'inline' : 'none');

    $nav_bar.slideToggle(400);
}

function onButtonClicked(event) {
    // carry on as normal for external links
    if($(event.currentTarget).attr('target') === '_blank') return;

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
    var $btn = $('a.back_up');
    var atScreenTop = $(window).scrollTop() < $(window).height();

    if(atScreenTop) $btn.addClass('hidden');
    else $btn.removeClass('hidden');
}
