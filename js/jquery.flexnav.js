// Generated by CoffeeScript 1.6.1

/*
	FlexNav.js 0.4.8

	Copyright 2013, Jason Weaver http://jasonweaver.name
	Released under the WTFPL license
	http://sam.zoy.org/wtfpl/

//
*/


(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  $.fn.flexNav = function(options) {
    var $nav, breakpoint, is_touch_device, resizer, settings;
    settings = $.extend({
      'animationSpeed': 'fast'
    }, options, $nav = $(this), breakpoint = $nav.data('breakpoint'), resizer = function() {
      if ($(window).width() <= breakpoint) {
        $nav.removeClass("lg-screen").addClass("sm-screen");
        $('.sm-screen.one-page li a').on('click', function() {
          return $nav.removeClass('show');
        });
        return $('.item-with-ul').off();
      } else {
        $nav.removeClass("sm-screen").addClass("lg-screen");
        $nav.removeClass('show');
        return $('.item-with-ul').on({
          mouseenter: function() {
            return $(this).find('>ul').slideDown(settings.animationSpeed);
          },
          mouseleave: function() {
            return $(this).find('>ul').slideUp(settings.animationSpeed);
          }
        });
      }
    }, is_touch_device = function() {
      return !!(__indexOf.call(window, 'ontouchstart') >= 0);
    }, is_touch_device() ? $nav.addClass('flexNav-touch') : $nav.addClass('flexNav-no-touch'), $(this).find("li").each(function() {
      if ($(this).has("ul").length) {
        return $(this).addClass("item-with-ul");
      }
    }), $('.menu-button').on('click', function() {
      return $nav.toggleClass('show');
    }), $('.menu-button, .item-with-ul').append('<span class="touch-button"><i class="navicon">&#9660;</i></span>'), $('.touch-button').on('click', function() {
      return $(this).parent('.item-with-ul').find('>ul').slideToggle(settings.animationSpeed);
    }), $('.item-with-ul *').focus(function() {
      $(this).parent('.item-with-ul').parent().find(".open").not(this).hide().removeClass("open");
      return $(this).parent('.item-with-ul').find('>ul').addClass("open").show();
    }));
    resizer();
    return $(window).on('resize', resizer);
  };

}).call(this);
