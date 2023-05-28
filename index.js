
function playGame() {

    let randomNumber1 = Math.floor(Math.random()*6 + 1);
    let randomImage = 'dice' + randomNumber1 + '.png';
    let randomImgSrc = 'images/' + randomImage;
    let img1 = document.querySelectorAll('img')[0];
    img1.setAttribute('src',randomImgSrc)
    let randomNumber2 = Math.floor(Math.random()*6 + 1);
    
    let randomImage2 = 'images/dice' + randomNumber2 + '.png';
    document.querySelectorAll('img')[1].setAttribute('src', randomImage2);
    
    if(randomNumber1 > randomNumber2) {
        document.querySelector('h1').textContent = 'Player 1 Won';
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector('h1').textContent = 'Player 2 Won';
    } else {
        document.querySelector('h1').textContent = "It's a Draw";
    }
    
}