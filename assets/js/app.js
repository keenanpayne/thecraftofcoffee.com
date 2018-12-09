/**
 * ReadingTime()
 *
 * Calculates the reading time for any given article and outputs that as a
 * reading time for the user.
 */
const ReadingTime = function() {
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
    const article = document.querySelector('.article-content');

    if (article) {
  	  const numberWords = article.innerHTML.split(' ').length;
	    const wordLength = (numberWords / 200);

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
    const element = document.querySelector('[data-read-time]');

    if (element) {
      const time = calculateReadingTime();

      element.textContent = time;
    }
  }

  return outputReadingTime();
};

/**
 * Initialize
 */
window.onload = function() {
  const readTime = new ReadingTime;
};
