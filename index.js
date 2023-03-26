//haciendo un event al cargar la página
window.addEventListener('load', ()=>{
    console.log('este es Elias')
    const h1 = document.createElement('h1')
    h1.innerHTML = 'Este es Elias'
    document.documentElement.appendChild(h1)
})