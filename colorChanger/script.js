const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (eventObj) {
    console.log(eventObj);
    console.log(eventObj.target);
    if (eventObj.target.id === 'grey') {
      body.style.backgroundColor = eventObj.target.id;
    }
    if (eventObj.target.id === 'white') {
      body.style.backgroundColor = eventObj.target.id;
    }
    if (eventObj.target.id === 'blue') {
      body.style.backgroundColor = eventObj.target.id;
    }
    if (eventObj.target.id === 'yellow') {
      body.style.backgroundColor = eventObj.target.id;
    }
    if (eventObj.target.id === 'red') {
      body.style.backgroundColor = eventObj.target.id;
    }
    if (eventObj.target.id === 'pink') {
      body.style.backgroundColor = 'rgb(189, 29, 167)';
    }
    if (eventObj.target.id === 'green') {
      body.style.backgroundColor = eventObj.target.id;
    }
    if (eventObj.target.id === 'darkBlue') {
      body.style.backgroundColor = '#120E43';
    }
    if (eventObj.target.id === 'skyBlue') {
      body.style.backgroundColor = '#5DA3FA';
    }
  });
});
