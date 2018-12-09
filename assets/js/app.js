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
  	const numberWords = document.querySelector('.article-content').innerHTML.split(' ').length;
  	const wordLength = (numberWords / 200);

  	return Math.floor(wordLength);
  }

  /**
   * @function outputReadingTime()
   */
  function outputReadingTime() {
    const element = document.querySelector('[data-read-time]');
    const time = calculateReadingTime();

    if (element) {
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
