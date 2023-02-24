let next = document.getElementById('next');
let prev = document.getElementById('prev');
let resim1 = document.getElementById('f1');
let resim2 = document.getElementById('f2');
let resim3 = document.getElementById('f3');
let c1 = document.getElementById('c1');
let c2 = document.getElementById('c2');
let c3 = document.getElementById('c3');
let i = 0;
let x = 0;

c1.style.backgroundColor = "white"
c2.style.backgroundColor = "transparent"
c3.style.backgroundColor = "transparent"


next.onclick = function () {
    i++;
    if (i == 1) {
        resim1.src = "cod3.jpg";
        resim2.src = "cod1.jpg";
        resim3.src = "cod2.jpg";
        c3.style.backgroundColor = "transparent"
        c2.style.backgroundColor = "white"
        c1.style.backgroundColor = "transparent"
        x = 2;
    }
    if (i == 2) {
        resim1.src = "cod2.jpg";
        resim2.src = "cod3.jpg";
        resim3.src = "cod1.jpg";
        c2.style.backgroundColor = "transparent"
        c1.style.backgroundColor = "transparent"
        c3.style.backgroundColor = "white"
        x = 1;
    }
    if (i == 3) {
        resim1.src = "cod1.jpg";
        resim2.src = "cod2.jpg";
        resim3.src = "cod3.jpg";
        c1.style.backgroundColor = "white"
        c2.style.backgroundColor = "transparent"
        c3.style.backgroundColor = "transparent"
        i = 0;
        x = 0;
    }
}

prev.onclick = function () {
    x++;
    if (x == 1) {
        resim1.src = "cod2.jpg";
        resim2.src = "cod3.jpg";
        resim3.src = "cod1.jpg";
        c2.style.backgroundColor = "transparent"
        c3.style.backgroundColor = "white"
        c1.style.backgroundColor = "transparent"
        i = 2;
    }

    if (x == 2) {
        resim1.src = "cod3.jpg";
        resim2.src = "cod1.jpg";
        resim3.src = "cod2.jpg";
        c3.style.backgroundColor = "transparent"
        c2.style.backgroundColor = "white"
        c1.style.backgroundColor = "transparent";
        i = 1;
    }

    if (x == 3) {
        resim1.src = "cod1.jpg";
        resim2.src = "cod2.jpg";
        resim3.src = "cod3.jpg";
        c1.style.backgroundColor = "white"
        c2.style.backgroundColor = "transparent"
        c3.style.backgroundColor = "transparent"
        x = 0;
        i = 0;
    }
}

