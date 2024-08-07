const título = document.querySelector('.apresentacao__conteudo__titulo')
const desc = document.querySelector('.apresentacao__conteudo__texto')
const img = document.querySelector('.profile-image')


título.innerHTML = localStorage.getItem('newTitle')
desc.innerHTML = localStorage.getItem('newDesc')
img.src = localStorage.getItem('newImage')


