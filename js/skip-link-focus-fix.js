/**
 * skip-link-focus-fix.js
 *
 * Helps with accessibility for keyboard only users.
 *
 * Learn more: https://github.com/Automattic/_s/pull/136
 */
(function() {
  const isWebkit = navigator.userAgent.toLowerCase().indexOf('webkit') > -1;
  const isOpera = navigator.userAgent.toLowerCase().indexOf('opera') > -1;
  const isIE = navigator.userAgent.toLowerCase().indexOf('msie') > -1;

  if (
    (isWebkit || isOpera || isIE) &&
    document.getElementById &&
    window.addEventListener
  ) {
    window.addEventListener(
      'hashchange',
      function() {
        const id = location.hash.substring(1);
        
        let element;

        if (!/^[A-z0-9_-]+$/.test(id)) {
          return;
        }

        element = document.getElementById(id);

        if (element) {
          if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
            element.tabIndex = -1;
          }

          element.focus();
        }
      },
      false
    );
  }
})();

//function to add quote to the database

//line 3 will trigger the event for the class post-quotes on click
jQuery('#post-quotes').on('submit', function(event) {
  event.preventDefault();
  var wisdom = $( '#quote-of-wisdom' ).val();
  console.log('working');
//using ajax function to make a one way request to the wp api
  jQuery.ajax ({

    method: 'post',
    url: localhost:8080/quotesondev/wp-content/themes/quotesondev-starter-master + 'wp/v2/posts/',
    
    beforeSend: function(xhr) {
      xhr.setRequestHeader( 'X-WP-Nonce', quotes_on_dev.wpapi_nonce );
    }
  }).done(function(response) {
    alert('Success! Quote added!');
  });
});




