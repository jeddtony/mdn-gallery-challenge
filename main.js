var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for (var i = 1; i <=5; i++){
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i + '.jpg');
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', changePict);
}

function changePict(e){
  // console.log('you clicked and image');
  let event = e.target.getAttribute('src');
  console.log(event);

  displayedImage.setAttribute('src', event);
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function() {
  console.log('btn clicked');
  if(btn.getAttribute('class') === 'dark'){
    btn.setAttribute('class', 'white');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  }
  else{
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
  
}

