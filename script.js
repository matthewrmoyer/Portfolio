$(document).ready(function(){

//hamburger menu module
var HamburgerMenu = (function() {

  //private function to open menu
  var _privateOpenFunction = function() {
    $(this).siblings("ul").addClass("hamburger-menu-displayed");
    $(this).siblings("ol").addClass("hamburger-menu-displayed");
  }

  //private fuction to close menu
  var _privateCloseFunction = function() {
    $(this).siblings("ul").removeClass("hamburger-menu-displayed");
    $(this).siblings("ol").removeClass("hamburger-menu-displayed");
  }

  var _privateRotateFunction = function() {
    $(this).removeClass("rotate-180-reverse");
    $(this).addClass("rotate-180");
  }

  var _privateReverseRotateFunction = function() {
    $(this).removeClass("rotate-180");
    $(this).addClass("rotate-180-reverse");
  }

  //empty array to store media type / platform
  var _mediaTypeArray = [];
  //add / remove from array depending on if checked and if already in array
  var _netflixValidate = function() {
    if (document.getElementById('netflix-box').checked) {
      //if not in array, add to array
      if (_mediaTypeArray.indexOf("netflix") === -1) {
        _mediaTypeArray.push("netflix");
      }
    } else {
      //if in array, splice at that index for 1 item
      var index = _mediaTypeArray.indexOf("netflix");
      if (index > -1) {
        _mediaTypeArray.splice(index, 1);
      }

    }
  }

  var _primeValidate = function() {
    if (document.getElementById('prime-box').checked) {
      if (_mediaTypeArray.indexOf("prime") === -1) {
        _mediaTypeArray.push("prime");
      }
    } else {
      var index = _mediaTypeArray.indexOf("prime");
      if (index > -1) {
        _mediaTypeArray.splice(index, 1);
      }
    }
  }

  var _huluValidate = function() {
    if (document.getElementById('hulu-box').checked) {
      if (_mediaTypeArray.indexOf("hulu") === -1) {
        _mediaTypeArray.push("hulu");
      }
    } else {
      var index = _mediaTypeArray.indexOf("hulu");
      if (index > -1) {
        _mediaTypeArray.splice(index, 1);
      }

    }
  }
  var _hboValidate = function() {
    if (document.getElementById('hbo-box').checked) {
      if (_mediaTypeArray.indexOf("hbo") === -1) {
        _mediaTypeArray.push("hbo");
      }
    } else {
      var index = _mediaTypeArray.indexOf("hbo");
      if (index > -1) {
        _mediaTypeArray.splice(index, 1);
      }
    }
  }

  return {
    open: function() {
      _privateOpenFunction.call(this);
    },
    close: function() {
      _privateCloseFunction.call(this);
    },
    toggle: function() {
      if ($(this).siblings("ul").is(":visible") || $(this).siblings("ol").is(":visible")) {
        _privateCloseFunction.call(this);
        _privateReverseRotateFunction.call(this);
      } else {
        _privateOpenFunction.call(this);
        _privateRotateFunction.call(this);
      }

    },
    validate: function() {
      _netflixValidate();
      _primeValidate();
      _huluValidate();
      _hboValidate();
      console.log(_mediaTypeArray);

    }
  }

})();


$("#hamburger-open-icon-1").on("click", HamburgerMenu.toggle);

});













