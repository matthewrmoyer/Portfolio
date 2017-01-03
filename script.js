$(document).ready(function(){

$(".work").css("display", "none");
$(".education").css("display", "none");
$(".education h3").css("display", "none");
$(".education li").css("display", "none");
$(".project-1").css("display", "none");
$(".project-1-images").css("display", "none");
$(".project-2").css("display", "none");
$(".project-2-images").css("display", "none");
$(".project-3").css("display", "none");
$(".project-3-images").css("display", "none");

//dropdown module
var PastDropDownMenu = (function(){
  
  var _privateOpenFunction = function(){
    $(".work").css("display", "block");
    $(".education").css("display", "block");
    $(".education h3").css("display", "block");
        $(".education h2").css("display", "block");

    $(".education li").css("display", "block");
  }
  
  var _privateCloseFunction = function(){
    $(".work").css("display", "none");
    $(".education").css("display", "none");
    $(".education h3").css("display", "none");
        $(".education h2").css("display", "none");

$(".education li").css("display", "none");

  }
    
  return {
    open: function(){
      _privateOpenFunction;
    },
    close: function(){
      _privateCloseFunction;
  },
    toggle: function(){
      if($(".work").is(":visible")) {
        _privateCloseFunction.call(this);
     } else{
       _privateOpenFunction.call(this);
     }
    }
  }
  
})();



var ProjectDropDownMenu = (function(){
  
  var _privateOpenFunction = function(){
    $(".project-1").css("display", "block");
$(".project-1-images").css("display", "block");
$(".project-2").css("display", "block");
$(".project-2-images").css("display", "block");
$(".project-3").css("display", "block");
$(".project-3-images").css("display", "block");
    
  }
  
  var _privateCloseFunction = function(){
$(".project-1").css("display", "none");
$(".project-1-images").css("display", "none");
$(".project-2").css("display", "none");
$(".project-2-images").css("display", "none");
$(".project-3").css("display", "none");
$(".project-3-images").css("display", "none");

  }
    
  return {
    open: function(){
      _privateOpenFunction;
    },
    close: function(){
      _privateCloseFunction;
  },
    toggle: function(){
      if($(".project-1").is(":visible")) {
        _privateCloseFunction.call(this);
     } else{
       _privateOpenFunction.call(this);
     }
    }
  }
  
})();



$(".past-link-row").on("click", PastDropDownMenu.toggle);
$(".project-header-row").on("click", ProjectDropDownMenu.toggle);






});