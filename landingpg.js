$( document ).ready(function() {
 $(".nav").addClass("animated shake");
  $("#about").click(function(){
   $(this).addClass('myClass');
   $("#portafolio, #contact").removeClass('myClass');
 });
  
 $("#portafolio").click(function(){
  $(this).addClass('myClass');
  $("#about, #contact").removeClass('myClass');
 });
  
 $("#contact").click(function(){
  $(this).addClass('myClass');
  $("#about, #portafolio").removeClass('myClass');
 });
  
 $("#title").click(function(){
  $("#about").addClass('myClass');
  $("#portafolio, #contact").removeClass('myClass');
 });
});