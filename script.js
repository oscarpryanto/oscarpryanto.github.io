const klik = document.querySelector('.button');

klik.addEventListener('click', function(){
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(response => {
            document.querySelector(".heading").innerHTML = `<h2>"${response.slip.advice}"</h2>`;
        });     
    
        
})



