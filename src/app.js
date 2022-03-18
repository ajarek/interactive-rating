"use strict";
const circles = document.querySelectorAll('.circle');
const btn = document.querySelector('.btn button');
const card = document.querySelector('.card');
const card1 = document.querySelector('.card1');
let arr = [];
const lenCircles = document.querySelector('#len');
const sel = document.querySelector('#sel');
let len = circles.length;
circles.forEach((circle, index) => {
    circle.addEventListener('click', () => {
        removeActive();
        if (!circle.classList.contains('active')) {
            circle.classList.add('active');
            arr.push(String(index + 1));
        }
    });
});
function removeActive() {
    circles.forEach((circle, index) => {
        circle.classList.remove('active');
    });
}
function displayCard() {
    sel.innerHTML = arr[arr.length - 1] || '0';
    lenCircles.innerHTML = len.toString();
    card.style.display = 'none';
    card1.style.display = 'flex';
    arr = [];
}
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', displayCard);
card1 === null || card1 === void 0 ? void 0 : card1.addEventListener('click', () => {
    card.style.display = 'flex';
    card1.style.display = 'none';
    removeActive();
});
