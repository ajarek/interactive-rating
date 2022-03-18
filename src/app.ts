const circles = document.querySelectorAll('.circle')
const btn = document.querySelector('.btn button')
const card = document.querySelector('.card') as HTMLDivElement
const card1 = document.querySelector('.card1') as HTMLDivElement
let arr:string[]=[]
const lenCircles = document.querySelector('#len') as HTMLSpanElement
const sel = document.querySelector('#sel') as HTMLSpanElement
let len = circles.length
circles.forEach((circle,index) => { 
    circle.addEventListener('click', () => {
        removeActive()
        if(!circle.classList.contains('active')) {
        circle.classList.add('active')
        arr.push(String(index+1))
        } 
    })
})

function removeActive() {
    circles.forEach((circle,index) => {
        circle.classList.remove('active')
    })
}

function displayCard() {
    sel.innerHTML=arr[arr.length-1]||'0'
    lenCircles.innerHTML = len.toString()
  card.style.display = 'none'
    card1.style.display = 'flex'
    arr=[]
}

btn?.addEventListener('click', displayCard)

card1?.addEventListener('click', () => {
    card.style.display = 'flex'
    card1.style.display = 'none'
    removeActive()
})