// Write your code here
const stats = document.querySelector('.stats');
const startBtn = document.querySelector('button[name=start]');
const btnClick = document.querySelector('button[name=click]');

const winScore = 10;
let count = 0;

startBtn.addEventListener('click',()=>{
    start();
});

btnClick.addEventListener('click',()=> {
    count++;
    stats.textContent = count;
});

const start = () => {
    count = 0;

    stats.textContent = count;

    btnClick.removeAttribute('disabled');

    startCounting();
}

const startCounting = () => {
    setTimeout( ()=> {

        if (isWin()){
            stats.textContent = 'Hurrah! You Win';
        } else{
            stats.textContent = 'alas! You Lost';
        }
        btnClick.setAttribute('disabled', true);
    },2000);
}

const isWin = () => {

    if (count < winScore){
        return false;
    }else{
        return true;
    }
}