jQuery(document).ready(function() {

  jQuery("h1").on("click",function() {
    alert("This is a heading.");
  });

  jQuery("p").on("click",function() {
    alert("This is a paragraph.");
  });

  jQuery("img").on("click",function() {
    alert("This is an image.");
  });
});