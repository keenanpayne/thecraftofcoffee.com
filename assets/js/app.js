/**
 * ReadingTime()
 *
 * Calculates the reading time for any given article and outputs that as a
 * reading time for the user.
 */
const ReadingTime = function() {
  /**
   * @function calculateReadingTime()
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
