console.log('Loaded app.js');
function main(){
  var userName = prompt('Hello, What\'s your name?');
  if (username.toUpperCase() === 'DAVID'){
    alert('Wow! David is my name too. I hope you enjoy my about me, good luck on the guessing game!');
  } else {
    alert('Well ' + userName + ' I hope you enjoy my about me, good luck on the guessing game!');
  }
}

function submit(){
  var responses = {
    response1Y: document.getElementById('response1Y'),
    response1N: document.getElementById('response1N'),
    response2Y: document.getElementById('response2Y'),
    response2Y: document.getElementById('response2N'),
    response3Y: document.getElementById('response3Y'),
    response3N: document.getElementById('response3N'),
    response4Y: document.getElementById('response4Y'),
    response4N: document.getElementById('response4N'),
    response5Y: document.getElementById('response5Y'),
    response5N: document.getElementById('response5N'),
    response6: document.getElementById('response6').value,
    response7: document.getElementById('response7').value,
    response8: document.getElementById('response8').value,
    response9: document.getElementById('response9').value,
    response10: document.getElementById('response10').value,
    response11: document.getElementById('response11').value,
    response12: document.getElementById('response12').value,
    response13: document.getElementById('response13').value,
    response14: document.getElementById('response14').value,
    response15: document.getElementById('response15').value
  };
  console.log(responses);
  document.getElementById('answer1').innerText = 'My name is David. (Says it in the header above)';
  document.getElementById('answer2').innerText = 'My favorite colors to some people aren\'t colors but I enjoy black and white.';
  document.getElementById('answer3').innerText = 'I love eating Gyro, they are simple yet so good.';
  document.getElementById('answer4').innerText = 'In the past I\'ve always prefered C# but lately I\'ve been learning the applications of Javascript and have been greatly enjoying it.';
  document.getElementById('answer5').innerText = 'My passion is promoting creativity because I think it is dying out in society lately.';
  if((responses.name).toUpperCase() === 'DAVID') {
    document.getElementById('question1').style.color = 'green';
  } else {
    document.getElementById('question1').style.color = 'red';
  }
  if((responses.color).toUpperCase() === 'WHITE' || (responses.passion).toUpperCase() === 'BLACK'){
    document.getElementById('question2').style.color = 'green';
  } else {
    document.getElementById('question2').style.color = 'red';
  }
  if((responses.food).toUpperCase() === 'GYRO'){
    document.getElementById('question3').style.color = 'green';
  } else {
    document.getElementById('question3').style.color = 'red';
  }
  if((responses.language).toUpperCase() === 'C#'){
    document.getElementById('question4').style.color = 'green';
  } else {
    document.getElementById('question4').style.color = 'red';
  }
  if((responses.passion).toUpperCase() === 'CREATIVITY' || (responses.passion).toUpperCase() === 'PROMOTING CREATIVITY'){
    document.getElementById('question5').style.color = 'green';
  } else {
    document.getElementById('question5').style.color = 'red';
  }
}
