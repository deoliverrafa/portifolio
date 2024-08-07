const título = document.querySelector('.apresentacao__conteudo__titulo')
const desc = document.querySelector('.apresentacao__conteudo__texto')
const img = document.querySelector('.profile-image')


if (localStorage.getItem('newTitle') != null) {
    título.innerHTML = localStorage.getItem('newTitle')
} else{
    
}

if (localStorage.getItem('newTitle') != null) {
    desc.innerHTML = localStorage.getItem('newDesc')
} else{
    
}

if (localStorage.getItem('newImage') != null) {
    img.src = localStorage.getItem('newImage')
} else{
    
}