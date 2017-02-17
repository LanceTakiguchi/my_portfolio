// Thanks you! Saves me time.
// https://www.sitepoint.com/scroll-based-animations-jquery-css3/

// IMPORTANT NOTE: Commented out in index.php

//Cache reference to window and animation items
var $animation_elements = $('.warp');
var $window = $(window);
function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  // $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset();
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      // $element.removeClass('warp-out');
      $element.addClass('warp-in');
    } else {
      $element.removeClass('warp-in');
      /*$element.addClass('warp-out');*/ // I have a bad feeling about this. Guessing it might loop
    }
  // });
}
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');