document.getElementById("get_data").addEventListener("click", getData);

function getData(data) {
  fetch('https://api.chucknorris.io/jokes/random')
  
  .then(function(response) {
  return response.json();
  })
  .then(function(data) {
  console.log(data);
  })
.catch(function(err) {
  console.log(err);
  });

}


.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.log(err));