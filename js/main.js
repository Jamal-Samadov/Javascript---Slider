


var mySlider = [
    'assests/img/1237247725.0.jpg',
    'assests/img/galatasaray-haberleri-cimbom-sezon-sonu-sil-bastan-5-ayrilik-birden-1651917762046.jpg',
    'assests/img/Manchester United crest 2020.jpg'
]


let slider = 0;
let img = document.querySelector('.slider img')
img.src = mySlider[slider]

let next= document.querySelector('.next')
let last = document.querySelector('.last')
let circle = document.querySelector('.circle')

next.addEventListener('click', function(){
    slider ++
    if(slider > mySlider.length-1){
        slider = 0
    }
    img.src = mySlider[slider]
    for (i = 0; i < circle.length; i++) {
        circle[0].className = circle[0]
    }
})

last.addEventListener('click', function(){
    slider--;
    if(slider === -1){
        slider = mySlider.length - 1;
    }
    img.src = mySlider[slider]
    for (i = 0; i < circle.length; i--) {
        circle[0].className = circle[0]
      }

})



