// scroll top 
var scrollTop = document.getElementById('scroll-top');

window.onscroll=function(){
    scrollFunction();
};
 function scrollFunction() {
    if(document.documentElement.scrollTop>300) {
        scrollTop.style.display = "flex";
    }
    else {
        scrollTop.style.display = "none";
    }
 }
 scrollTop.addEventListener("click" , function() {
    document.documentElement.scrollTop=0 ;
})


const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar')

if (bar) {
    bar.addEventListener('click', ()=> {
        nav.classList.add('active')
    })
}
if (bar) {
    close.addEventListener('click', ()=> {
        nav.classList.remove('active')
    })
}
// slider0 code
var slide = document.getElementsByClassName('slid0') ;
var nextt = document.querySelector('#next0') ;
var prevv = document.querySelector('#prev0') ;
var x=0 ;

function displayNone() {
    for(let i=0 ; i<slide.length ; i++) {
        slide[i].style.display= 'none' ;
    }
}

function noActive() {
    for(let i=0 ; i<slide.length ; i++) {
        slide[i].classList.remove= ('active0') ;
    }
}

nextt.addEventListener("click" ,function() {
    x++ ;
    if (x>slide.length-1) {
        x=0;
    }

    displayNone();
    noActive();
    slide[x].style.display='block';
    slide[x].classList.add('active0');

}); 


prevv.addEventListener("click" ,function() {
    x-- ;
    if (x<0) {
        x=slide.length-1;
    }

    displayNone();
    noActive();
    slide[x].style.display='block';
    slide[x].classList.add('active0');

}); 
setInterval( function() {
    x++ ;
    if (x>slide.length-1) {
        x=0;
    }

    displayNone();
    noActive();
    slide[x].style.display='block';
    slide[x].classList.add('active0');

} , 7000);
