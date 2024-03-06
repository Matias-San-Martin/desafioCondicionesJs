    const imgref = document.querySelector('#img')
    if (!(imgref.style.border='2px red solid')){
    imgref.style.border='2px red solid'
    }else {
    (imgref.style.border='2px yellow solid')
    }   



    if (!this.hasAttribute('data-borde-rojo')) {
        this.style.border='2px red solid';
        this.setAttribute('data-borde-rojo', 'true');
    } else {
        this.style.border='none';
        this.removeAttribute('data-borde-rojo');
    }

    imgref = document.querySelector('img')
    imgref.style.border = '2px red solid'