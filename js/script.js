$(document).ready(function() {

  $("a.scroller-link").click(function() {
    var scrollID = $(this).attr("href");
    $("html, body").animate({scrollTop: $(scrollID).offset().top}, "slow");
    return false;
  });

  $("#masters-iframe").on("load", function() {
    clearInterval(mastersTimer);
  });

  $("#vw-iframe").on("load", function() {
    clearInterval(vwTimer);
  })

});

// This is a workaround for a bug in Google docs viewer - sometimes it returns an HTTP 204
// This will reload the iframes every 2 seconds until they are loaded
function reloadMasters() {
  document.getElementById("masters-iframe").src=document.getElementById("masters-iframe").src;
}
function reloadVW() {
  document.getElementById("vw-iframe").src=document.getElementById("vw-iframe").src;
}

mastersTimer = setInterval("reloadMasters();", 2000);
vwTimer = setInterval("reloadVW();", 2000);
