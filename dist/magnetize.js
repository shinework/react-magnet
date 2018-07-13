import { TweenMax, Power2, Elastic } from "gsap/TweenMax";

var move = function move(element, dx, dy) {
  TweenMax.to(element, 0.3, {
    x: 0.6 * dx,
    y: 0.6 * dy,
    rotation: 0.07 * dx,
    ease: Power2.easeOut
  });
};

var reset = function reset(element) {
  TweenMax.to(element, 0.7, {
    x: 0,
    y: 0,
    scale: 1,
    rotation: 0,
    ease: Elastic.easeOut
  });
};

var magnetize = function magnetize(element) {
  var isMagnetic = false;
  var isTransformed;
  var distance = 4;
  var attraction = 1;

  window.addEventListener("mousemove", function (e) {
    var mouse = {
      x: e.clientX,
      y: e.clientY
    };

    var maxDistance = isMagnetic ? distance : attraction;
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    var offset = element.getBoundingClientRect();

    var center = {
      x: offset.left + width / 2,
      y: offset.top + height / 2
    };

    var dx = mouse.x - center.x;
    var dy = mouse.y - center.y;

    isTransformed = false;

    if (Math.sqrt(dx * dx + dy * dy) < width * maxDistance) {
      isTransformed = true;
      isMagnetic = true;
      move(element, dx, dy);
    }

    if (!isTransformed && isMagnetic) {
      isMagnetic = false;
      reset(element);
    }
  });
};

export default magnetize;