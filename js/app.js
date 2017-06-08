console.log('Loaded app.js');
function main(){
  var userName = prompt('Hello, What\'s your name?');
  if (userName.toUpperCase() === 'DAVID'){
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
  document.getElementById('answer1').innerText = 'Of course my name is David.';
  document.getElementById('answer2').innerText = 'I am from Florida. I moved to Iowa when I was younger after going through fostercare.';
  document.getElementById('answer3').innerText = 'Yes I do have a python, his name is mukluk.';
  document.getElementById('answer4').innerText = 'I have actually done freelance game development, I did not enjoy it.';
  document.getElementById('answer5').innerText = 'My main hobby is actually herping (look it up).';
  document.getElementById('answer6').innerText = '';
  document.getElementById('answer7').innerText = '';
  document.getElementById('answer8').innerText = '';
  document.getElementById('answer9').innerText = '';
  document.getElementById('answer10').innerText = '';
  document.getElementById('answer11').innerText = '';
  document.getElementById('answer12').innerText = '';
  document.getElementById('answer13').innerText = '';
  document.getElementById('answer14').innerText = '';
  document.getElementById('answer15').innerText = '';
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
