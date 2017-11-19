'use strict';

(function () {
  var body = document.querySelector('body'),
    minifyCalcButton = document.querySelectorAll('main > header > section > button')[1],
    screenData = document.querySelector('article > main > div > span'),
    articles = document.querySelectorAll('article'),
    dataButtons = document.querySelectorAll('td');

  minifyCalcButton.addEventListener('click', function () {
    toggleArticle(articles[0], articles[1]);
  });

  articles[1].addEventListener('click', function () {
    toggleArticle(articles[1], articles[0]);
  });

  if (dataButtons && dataButtons.length > 0) {
    var datas = {
      frontValue: 0,
      backValue: 0,
      sign: null,
      beforeKey: null,
    };
    for (var i=0; i<dataButtons.length; i++) {
      dataButtons[i].addEventListener('click', function (e) {
        calculatorEventListener(e, screenData, datas);
      });
    }
  }
})();

function toggleArticle(target1, target2) {
  target1.className = 'activating';
  setTimeout(function () {
    target1.style.display = 'none';
    target2.style.display = 'block';
    target1.className = '';
  }, 600);
}

function getDecimalPoint(value) {
  var tempDecimal = value;
  var tempSplitedResult = String(value).split('.');
  if (value - Math.floor(value) !== 0 && tempSplitedResult[1] && tempSplitedResult[1].length > 5) {  // 소숫점 5자리 이상이면 잘라줌.
    tempDecimal = Math.floor(value) + '.' + tempSplitedResult[1].slice(0, 5);
  }
  return tempDecimal;
}

function addPointInValue(value) {
  var decimalValue = String(value).split('.')[1] || '';
  decimalValue = decimalValue !== '' ? ('.' + decimalValue) : ''
  return Math.floor(Number(value)).toLocaleString('en') + decimalValue;
}

function removePointInValue(value) {
  return value.split(',').join('');
}

function getResults(screenData, datas) {
  if (datas.frontValue === '-∞' || datas.frontValue === '∞') {
    datas.frontValue = 0;
  }
  var result = eval(datas.frontValue + datas.sign + datas.backValue); // 계산
  result = isNaN(result) || result === Infinity ? 0 : result; // 필터링
  result = getDecimalPoint(result);  // 소숫점 체크
  result = addPointInValue(result);  // 콤마 추가

  return result;
}

function calculatorEventListener(e, screenData, datas) {
  var targetValue = e.target.innerText;

  if (targetValue === 'C') {
    clearEvent(screenData, datas);
  } else if (targetValue === '±') {
    screenData.innerText = addPointInValue(-removePointInValue(screenData.innerText));
    targetValue = screenData.innerText;
  } else if (targetValue === '+' || targetValue === '-' || targetValue === '×' || targetValue === '÷') {
    arithmeticCommonEvent(screenData, datas);
    if (targetValue === '+') {
      datas.sign = '+';
    } else if (targetValue === '-') {
      datas.sign = '-';
    } else if (targetValue === '×') {
      datas.sign = '*';
    } else if (targetValue === '÷') {
      datas.sign = '/';
    }
  } else if (targetValue === '=') {
    equalEvent(screenData, datas);
  } else if (targetValue === '.') {
    if (screenData.innerText != 0) {
      if (screenData.innerText.split('.').length <= 1) {
        screenData.innerText += '.';
      }
    }
  } else {
    if (String(screenData.innerText).length >= 13 && !isNaN(Number(datas.beforeKey))) {  // 소숫점 포함 13자리
      return;
    }
    if (screenData.innerText == 0 || (datas.beforeKey != '.' && isNaN(Number(datas.beforeKey)))) {
      screenData.innerText = e.target.innerText;
    } else {
      screenData.innerText = addPointInValue(removePointInValue(screenData.innerText) + e.target.innerText);
    }
  }
  datas.beforeKey = targetValue;
}

function clearEvent(screenData, datas) {
  screenData.innerText = 0;
  datas.frontValue = 0;
  datas.backValue = 0;
  datas.sign = null;
}

function arithmeticCommonEvent(screenData, datas) {
  if (datas.sign && datas.frontValue != 0) {
    if (!isNaN(Number(datas.beforeKey))) {
      datas.backValue = removePointInValue(screenData.innerText);
      var result = getResults(screenData, datas);
      screenData.innerText = result;
      datas.frontValue = removePointInValue(screenData.innerText);
    }
  } else {
    datas.frontValue = removePointInValue(screenData.innerText);
  }
}

function equalEvent(screenData, datas) {
  if (!datas.frontValue && !datas.backValue && !datas.sign) {
    return false;
  }
  if (datas.beforeKey !== '=') {
    datas.backValue = removePointInValue(screenData.innerText);
  }
  var result = getResults(screenData, datas);
  screenData.innerText = result;
  datas.frontValue = removePointInValue(screenData.innerText);
}
