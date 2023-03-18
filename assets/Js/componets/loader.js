function loader () {
  window.addEventListener('load', function(){
    const loader = this.document.querySelector('.loader')
    loader.classList.add('loader--hiden')
  })
}

export default loader;