$(document).ready(function(){

$(".work").css("display", "none");
$(".education").css("display", "none");
$(".education h3").css("display", "none");
$(".education li").css("display", "none");


//dropdown module
var DropDownMenu = (function(){
  
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

$(".past-link-row").on("click", DropDownMenu.toggle);






});