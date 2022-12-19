
function loading() {
    var msg = window.document.getElementById('msg');
    var photo = window.document.getElementById('image');
    var data = new Date()
    var hora = data.getHours()
    // var hora = 19
    msg.innerHTML = `agora são ${hora} horas.`;
    if(hora >= 0 && hora < 12) {
        document.body.style.background = "lightyellow";
        photo.src = 'manha.jpg';
    } else if(hora >= 12 && hora < 18) {
        document.body.style.background = "orange";
        photo.src = 'tarde.jpg';
    } else { 
        document.body.style.background = "darkblue";
        photo.src = 'noite.jpg';
     }
 }

