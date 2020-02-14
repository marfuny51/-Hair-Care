var plus = document.getElementById('resize');
var fotoFocus = document.getElementById('realFoto');

function changeFoto() {
    fotoFocus.style.opacity = '0.5';
}

function changeFoto2() {
    fotoFocus.style.opacity = '1';
}

plus.addEventListener('mouseover', changeFoto, false);
plus.addEventListener('mouseout', changeFoto2, false);


