$(document).ready(function() {
  // ONLY PUT FUNCTIONS HERE THAT SHOULD SHOW UP ON **EVERY** PAGE

  // Instantiate the Google Analytics tracking queue if it isn't already
  var _gaq = _gaq || [];
  //

  // Center images in their paragraphs (there is no CSS parent selector, so do via javascript)
  $(document).ready(function() {
    return $("img").parent("p").css("text-align", "center");
  });
  //

  // Nofollow and open in new tabs all links inside blog posts that are external
  var hostname = new RegExp(location.host);
  var internal = new RegExp('^\\/.*$');

  $('.post-content a').each(function(){
    var url = $(this).attr("href");

    if (internal.test(url) || hostname.test(url)) {
      // Local link
      $(this).addClass('local');
      // Set to open in new tab
      $(this).attr("target", "_blank");
    } else {
      // External link
      $(this).addClass('external');
      // Set to open in new tab
      $(this).attr("target", "_blank");
      // Nofollow
      $(this).attr("rel", "nofollow");
    }

  });
  //

  // Open all links in projects and about pages in new tabs
  var url = window.location.pathname;

  if ((url === '/projects') || (url === '/about')) {
    $("#page-content a").attr("target", "_blank");
  }
  //

  // Catch social profile link clicks in Google Analytics
  $("#twitter-link").click(function() {
    _gaq.push(['_trackEvent', 'social', 'twitter-profile-visit']);
  });

  $("#googleplus-link").click(function() {
    _gaq.push(['_trackEvent', 'social', 'gplus-profile-visit']);
  });

  $("#linkedin-link").click(function() {
    _gaq.push(['_trackEvent', 'social', 'linkedin-profile-visit']);
  });

  $("#github-link").click(function() {
    _gaq.push(['_trackEvent', 'social', 'github-profile-visit']);
  });

  $("#feed-link").click(function() {
    _gaq.push(['_trackEvent', 'social', 'rss-subscribe']);
  });
  //

});
