const btn = document.querySelector('.generate');
const count = document.querySelector('.count');

const randomNumber = () => {
    let number = Math.ceil(Math.random() * 10 + 1);
    count.innerHTML = number;
}

btn.addEventListener("click", randomNumber);