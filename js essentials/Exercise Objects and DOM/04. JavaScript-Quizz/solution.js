function solve() {
  let rightAnswers = 0;

  let pageFirstLeft = document.querySelector('section:nth-child(2) li.low-value div').addEventListener('click', e => {
    rightAnswers++;
    document.querySelector('section:nth-child(2)').setAttribute('class', 'hidden');
    document.querySelector('section:nth-child(3)').setAttribute('class', '');
  });

  let pageFirstRight = document.querySelector('section:nth-child(2) li.high-value div').addEventListener('click', e => {
    document.querySelector('section:nth-child(2)').setAttribute('class', 'hidden');
    document.querySelector('section:nth-child(3)').setAttribute('class', '');
  });

  let pageSecondLeft = document.querySelector('section:nth-child(3) li.low-value div').addEventListener('click', e => {
    document.querySelector('section:nth-child(3)').setAttribute('class', 'hidden');
    document.querySelector('section:nth-child(4)').setAttribute('class', '');
  });

  let pageSecondRight = document.querySelector('section:nth-child(3) li.high-value div').addEventListener('click', e => {
    rightAnswers++;
    document.querySelector('section:nth-child(3)').setAttribute('class', 'hidden');
    document.querySelector('section:nth-child(4)').setAttribute('class', '');
  });

  let pageThirdRight = document.querySelector('section:nth-child(4) li.low-value div').addEventListener('click', e => {
    document.querySelector('section:nth-child(4)').setAttribute('class', 'hidden');
    rightAnswers++;
    document.querySelector('ul#results').style.display = 'block';

    if (rightAnswers === 3) {
      document.querySelector('.results-inner h1').textContent = 'You are recognized as top JavaScript fan!';
    } else {
      document.querySelector('.results-inner h1').textContent = `You have ${rightAnswers} right answers`;
    }
  });

  let pageThirdLeft = document.querySelector('section:nth-child(4) li.high-value div').addEventListener('click', e => {
    document.querySelector('section:nth-child(4)').setAttribute('class', 'hidden');
    document.querySelector('ul#results').style.display = 'block';

    if (rightAnswers === 3) {
      document.querySelector('.results-inner h1').textContent = 'You are recognized as top JavaScript fan!';
    } else {
      document.querySelector('.results-inner h1').textContent = `You have ${rightAnswers} right answers`;
    }
  });
}