$(document).ready(function() {

  // if ($("body").hasClass("touch-device")) {
  // // Calculate height based on touch device viewport
  //   function calculateHeight() {
  //     $("...")
  //   }
  // } Is this worth it though, could do set height on mobile devices..

  // Smooth scrolling
  $("a.scroller-link").click(function() {
    var scrollID = $(this).attr("href");
    $("html, body").animate({scrollTop: $(scrollID).offset().top}, 400);
    return false;
  });

  // This is a workaround for a bug in Google docs viewer - sometimes it returns an HTTP 204
  // This will reload the iframes every 2 seconds until they are loaded
  $("#masters-iframe").on("load", function() {
    clearInterval(mastersTimer);
  });

  $("#vw-iframe").on("load", function() {
    clearInterval(vwTimer);
  })

});


// Determine whether touch or hover device / iPhone workaround helper
if ("ontouchstart" in document.documentElement) {
  $("body").addClass("touch-device");
} else {
  $("body").addClass("hover-device");
}

mastersTimer = setInterval("reloadMasters();", 2000);
vwTimer = setInterval("reloadVW();", 2000);


// Google Docs workaround helpers
function reloadMasters() {
  document.getElementById("masters-iframe").src=document.getElementById("masters-iframe").src;
}
function reloadVW() {
  document.getElementById("vw-iframe").src=document.getElementById("vw-iframe").src;
}
