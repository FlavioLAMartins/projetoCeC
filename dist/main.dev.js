"use strict";

/* opens and closes the menu when clicked on the burger icon and x */
var nav = document.querySelector('#header nav');
var toggle = document.querySelectorAll('nav .toggle');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = toggle[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var element = _step.value;
    element.addEventListener('click', function () {
      nav.classList.toggle('show');
    });
  }
  /* when clicking on a menu item, hide the menu */

} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var links = document.querySelectorAll('nav ul li a');
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = links[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var link = _step2.value;
    link.addEventListener('click', function () {
      nav.classList.remove('show');
    });
  }
  /* change the page header when scroll is activated*/

} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
      _iterator2["return"]();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

var header = document.querySelector('#header');
var navHeight = header.offsetHeight;

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
}
/* Testimonials carousel slider swiper */


var swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
});
/*ScrollReveal*/

var scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
});
scrollReveal.reveal("#home .image, #home .text,\n  #about .image, #about .text,\n  #services header, #services .card,\n  #testimonials header, #testimonials .testimonials\n  #contact .text, #contact .links,\n  footer .brand, footer .social\n  ", {
  interval: 100
});
/* Button back-to-top*/

var backToTopButton = document.querySelector('.back-to-top');

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}
/* menu as activated the visible section on the page */


var sections = document.querySelectorAll('main section[id]');

function activateMenuAtCurrentSection() {
  var checkpoint = window.pageYOffset + window.innerHeight / 8 * 4;
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = sections[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var section = _step3.value;
      var sectionTop = section.offsetTop;
      var sectionHeight = section.offsetHeight;
      var sectionId = section.getAttribute('id');
      var checkpointStart = checkpoint >= sectionTop;
      var checkpointEnd = checkpoint <= sectionTop + sectionHeight;

      if (checkpointStart && checkpointEnd) {
        document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.add('active');
      } else {
        document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.remove('active');
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }
}
/* When Scroll*/


window.addEventListener('scroll', function () {
  changeHeaderWhenScroll();
  backToTop();
  activateMenuAtCurrentSection();
});