"use strict";

/**
 * ReadingTime()
 *
 * Calculates the reading time for any given article and outputs that as a
 * reading time for the user.
 */
var ReadingTime = function ReadingTime() {
  /**
   * @function calculateReadingTime()
   *
   * Counts all of the "words" inside of our article content by splitting
   * characters apart by spaces and counting. We then divide this number by
   * 200 as it is our assumed words-per-minute that our user will be reading.
   *
   * @returns wordLength (integer) the rounded-down reading time
   */
  function calculateReadingTime() {
    var article = document.querySelector('.article-content');

    if (article) {
      var numberWords = article.innerHTML.split(' ').length;
      var wordLength = numberWords / 200;
      return Math.floor(wordLength);
    }
  }
  /**
   * @function outputReadingTime()
   *
   * Checks to see if we are supposed to output a reading time on a given page
   * and if we are, do so.
   */


  function outputReadingTime() {
    var element = document.querySelector('[data-read-time]');

    if (element) {
      var time = calculateReadingTime();
      element.textContent = time;
    }
  }

  return outputReadingTime();
};
/**
 * Initialize
 */


window.onload = function () {
  var readTime = new ReadingTime();
};