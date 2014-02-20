
/**
 * Module dependencies.
 */

var open = require('viatropos-open-window');

/**
 * Expose `pin`.
 */

module.exports = pin;

/**
 * Pin `url` to Pinterest.
 *
 * @see http://stackoverflow.com/questions/10690019/link-to-pin-it-on-pinterest-without-generating-a-button
 */

function pin(url, image, description) {
  var url = 'http://pinterest.com/pin/create/button/'
    + '?url=' + encodeURIComponent(url)
    + '&media=' + encodeURIComponent(image);

  if (description)
    url +='&description=' + encodeURIComponent(description);

  return open(url);
}