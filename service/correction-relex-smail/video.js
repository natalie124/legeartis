document.addEventListener("DOMContentLoaded", function() {
  'use strict';
  var videoLinks = document.querySelectorAll('._video-link');

  if (!videoLinks) {
    return
  }
  
  function createIframe(videoLink) {
    var iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', generateURL(videoLink));
    iframe.classList.add('video-iframe');

    return iframe;
  }

  function generateURL(videoLink) {
    return videoLink.getAttribute('href') + '?rel=0&autoplay=1';
  }

  videoLinks.forEach(function(link) {
    var container = link.parentNode;
    var iframe = createIframe(link);

    link.addEventListener('click', function(e) {
      e.preventDefault();
      container.appendChild(iframe);
      link.remove();  
    });
  });
});