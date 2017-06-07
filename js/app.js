console.log('Loaded app.js');
function submit(){
  var answers = {
    name: document.getElementById('name').value,
    color: document.getElementById('color').value,
    food: document.getElementById('food').value,
    language: document.getElementById('language').value,
    passion: document.getElementById('passion').value
  };
  console.log(answers);
}
