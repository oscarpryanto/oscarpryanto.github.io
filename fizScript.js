const inputs = document.querySelector("#inputs");
const btn = document.querySelector("#btn");
const ooutput = document.querySelector("#output");

btn.addEventListener('click' , () => {
    if(inputs.value % 3 === 0 && inputs.value % 5 === 0) {
        output.innerHTML += `<p>FizzBuzz</p>`;
    } else if (inputs.value % 3 === 0) {
        output.innerHTML += `<p>Fizz</p>`;
    } else if (inputs.value % 5 === 0) {
        output.innerHTML += `<p>Buzz</p>`;
    } else {
        output.innerHTML += `<p>${inputs.value}</p>`;
    }

    inputs.value = '';
});
