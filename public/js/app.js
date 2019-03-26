console.log('Client side javascript is loaded');
const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');



// Event Listeners
weatherForm.addEventListener('submit',(e) => {
  e.preventDefault();

  const location = search.value;

  messageOne.textContent = 'Loading...';
  messageTwo.textContent = ''; 

  fetch(`http://localhost:3002/weather?address=${location}`)
.then(((response)=>{
  response.json().then((data) => {
    if(data.error){
      messageOne.textContent = data.error;
      console.log(data.error);
    } else {
      messageOne.textContent = data.location;
      messageTwo.textContent = data.forecast; 
      console.log(data.location);
      console.log(data.forecast);
    }
  })
}))

  
  console.log(location);

  search.value = '';
})