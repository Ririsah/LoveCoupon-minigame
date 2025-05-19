const btn_calc = document.querySelector('.calc');
const display_result = document.querySelector('.result_display');
const display_sentence = document.querySelector('.sentence_display');

btn_calc.addEventListener('click', function (e) {
    e.preventDefault();

    let love_parse = Math.trunc(Math.random() * 100) + 1;
    console.log(love_parse);
    
    display_result.textContent = `${love_parse}%`; 

    if (love_parse <= 0) {
        display_sentence.textContent = `Jesus...`; 
    } else if (love_parse <= 10) {
        display_sentence.textContent = `Meh! Taylor Swift and Kanye West have more chemistry.`
    } else if (love_parse <= 20) {
        display_sentence.textContent = `God NO! You can try but... idk girl...`; 
    } else if (love_parse <= 30) {
        display_sentence.textContent = `Well, I mean... there's a possibility!`; 
    } else if (love_parse <= 50) {
        display_sentence.textContent = `Maybe push yourself a little more, but don't give up!`; 
    } else if (love_parse <= 60) {
        display_sentence.textContent = `Definitely more than 50%!`; 
    } else if (love_parse <= 70) {
        display_sentence.textContent = `Definily more than 50%!`; 
    } else if (love_parse <= 80) {
        display_sentence.textContent = `Yo! That's actually fire!`; 
    } else if (love_parse <= 90) {
        display_sentence.textContent = `YO YO YO! That's actually SO fire! What the hell!`; 
    } else if (love_parse <= 100) {
        display_sentence.textContent = `OMG! You guys are MADE for each other! Just get married already`; 
    }
});