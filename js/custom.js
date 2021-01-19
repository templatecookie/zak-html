$(function(){
    $('.circle1').circleProgress({
        value: 0.95,
        size: 100,
        startAngle: 20.4,
        fill: {
            color: "#FF7F46"
        }
    });
    $('.circle2').circleProgress({
        value: 0.90
    });
    $('.circle3').circleProgress({
        value: 0.90
    });
    $('.circle4').circleProgress({
        value: 0.50
    });
    $('.circle5').circleProgress({
        value: 0.75
    });
    $('.circle6').circleProgress({
        value: 0.90
    });
    $('.circle7').circleProgress({
        value: 0.80
    });
    $('.circle8').circleProgress({
        value: 0.90
    });
    $('.filtr-container').filterizr();
    $('.simplefilter li').click(function () {
        $('.simplefilter li').removeClass('active');
        $(this).addClass('active');
    });
    $('.venobox').venobox({
        spinner: 'cube-grid',
        spinColor: '#d2d2d2'
    });
    $('.type').typeIt({
        strings: ["I am Zakir Hossen", "I am a Designer", "I am a Developer", "I am a Freelancer"],
        speed: 100,
        loop: true,
        loopDelay: 3000,
        breakDelay: 5000,
        deleteSpeed: 30,
        breakLines: false,
        autoStart: false
    });
    var html_body = $('html, body');
    var $window = $(window);
    var $sOfset = 500;
    var $fh = $('.full_header')
    var btt = $('.btt')
    $('body').scrollspy({
        target: ".navbar",
        offset: 50
    });
    $(".menu a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            html_body.animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
    $('.btt').on('click', function () {
        html_body.animate({
            scrollTop: 0
        }, 600)
    });
    $window.on('scroll', function () {
        var $offset = $(this).scrollTop();
        if ($offset > .5) {
            $('.full_header').addClass('sticky');
        } else {
            $('.full_header').removeClass('sticky');
        }
        if ($offset > $sOfset) {
            btt.fadeIn(1000);
        } else {
            btt.fadeOut(1000);
        }
    });
    $window.on('load', function () {
        $('.preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });
    // Contact Form
    var form = $('.contact__form'),
        message = $('.contact__msg'),
        form_data;
    // Success function
    function done_func(response) {
        message.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message.text(response);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
        form.find('input:not([type="submit"]), textarea').val('');
    }
    // fail function
    function fail_func(data) {
        message.fadeIn().removeClass('alert-success').addClass('alert-success');
        message.text(data.responseText);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
    }
    
    form.submit(function (e) {
        e.preventDefault();
        form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form_data
        })
        .done(done_func)
        .fail(fail_func);
    });
    
});
