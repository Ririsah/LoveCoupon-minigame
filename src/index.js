const btn_calc = document.querySelector('.calc');
const display_result = document.querySelector('.result_display');
const display_sentence = document.querySelector('.sentence_display');

btn_calc.addEventListener('click', function () {
    let love_parse = Math.trunc(Math.random() * 100) + 1;
    console.log(love_parse);
    
    display_result.innerHTML = `${love_parse}%`; 

    if (love_parse === 0) {
        display_sentence.innerHTML = `Jesus...`; 
    } else if (love_parse <= 10 && love_parse > 0) {
        display_sentence.innerHTML = `Meh! Taylor Swift and Kanye West have more chemistry.`
    } else if (love_parse <= 20) {
        display_sentence.innerHTML = `God NO! You can try but... idk girl...`; 
    } else if (love_parse <= 30) {
        display_sentence.innerHTML = `Jesus...`; 
    } else if (love_parse <= 50) {
        display_sentence.innerHTML = `Jesus...`; 
    } else if (love_parse <= 80) {
        display_sentence.innerHTML = `Jesus...`; 
    } else if (love_parse <= 90) {
        display_sentence.innerHTML = `Jesus...`; 
    } else if (love_parse === 100) {
        display_sentence.innerHTML = `OMG! You guys are made for each other!`; 
    }
});