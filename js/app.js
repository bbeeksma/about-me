console.log('Loaded app.js');
function submit(){
  var responses = {
    name: document.getElementById('name').value,
    color: document.getElementById('color').value,
    food: document.getElementById('food').value,
    language: document.getElementById('language').value,
    passion: document.getElementById('passion').value
  };
  console.log(responses);
  document.getElementById('answer1').innerHTML = 'My name is David. (Says it in the header above)';
  document.getElementById('answer2').innerHTML = 'My favorite colors to some people aren\'t colors but I enjoy black and white.';
  document.getElementById('answer3').innerHTML = 'I love eating Gyro, they are simple yet so good.';
  document.getElementById('answer4').innerHTML = 'In the past I\'ve always prefered C# but lately I\'ve been learning the applications of Javascript and have been greatly enjoying it.';
  document.getElementById('answer5').innerHTML = 'My passion is promoting creativity because I think it is dying out in society lately.';
  if((responses.name).toUpperCase() === 'DAVID') {
    document.getElementById('question1').style.color = 'green';
  } else {
    document.getElementById('question1').style.color = 'red';
  }
  if((responses.color).toUpperCase() === 'WHITE' || 'BLACK'){
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
  if((responses.passion).toUpperCase() === 'CREATIVITY' || 'BLACK'){
    document.getElementById('question5').style.color = 'green';
  } else {
    document.getElementById('question5').style.color = 'red';
  }
}
