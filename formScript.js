const inputFile = document.querySelector('#formFile')
const inputDesc = document.querySelector('#desc')
const inputTitle = document.querySelector('#title')

const buttonSubmit = document.querySelectorAll('.btn')


buttonSubmit[0].addEventListener('click', (event) => {  
    localStorage.setItem('newTitle', `${inputTitle.value}`);
    localStorage.setItem('newDesc', `${inputDesc.value}`)        
})

inputFile.addEventListener('change', (event) => {
    const file = event.target.files[0]
    
    const reader = new FileReader()

    reader.onloadend = () => {
        const imageDataUrl = reader.result
        localStorage.setItem('newImage', `${imageDataUrl}`)
    }

    reader.readAsDataURL(file);
    
})

