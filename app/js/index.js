'use strict';

(function () {
  var body = document.querySelector('body');
  var minifyCalcButton = document.querySelectorAll('main > header > section > button')[1];
  var articles = document.querySelectorAll('article');

  minifyCalcButton.addEventListener('click', function () {
    toggleArticle(articles[0], articles[1]);
  });

  articles[1].addEventListener('click', function () {
    toggleArticle(articles[1], articles[0]);
  });
})();

function toggleArticle(target1, target2) {
  target1.style.opacity = 0;
  setTimeout(function () {
    target2.style = '';
    setTimeout(function () {
      target1.className = '';
      target1.style.display = 'none';
      target2.className = 'activate';
    }, 800);
  }, 800);
}