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
   */
  function calculateReadingTime() {
    var numberWords = document.querySelector('.article-content').innerHTML.split(' ').length;
    var wordLength = numberWords / 200;
    return Math.floor(wordLength);
  }
  /**
   * @function outputReadingTime()
   */


  function outputReadingTime() {
    var element = document.querySelector('[data-read-time]');
    var time = calculateReadingTime();

    if (element) {
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