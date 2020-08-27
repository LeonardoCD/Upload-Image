const pacote = document.querySelector(".pacote")
const nomeArquivo = document.querySelector(".nome-arquivo")
const btnCancela = document.querySelector("#btn-cancela")
const defaultBtn = document.querySelector("#btn-padrao")
const btnAdiciona = document.querySelector("#btn-adiciona")
const img = document.querySelector("img")
let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/

function defaulBtnActive(){
  defaultBtn.click()
}

defaultBtn.addEventListener("change", function(){
  const file = this.files[0]
  if(file){
    const reader = new FileReader()
    reader.onload = function(){
      const result = reader.result
      img.src = result
      pacote.classList.add("active")
    }
    btnCancela.addEventListener("click", function(){
      img.src = ""
      pacote.classList.remove("active")
    })
    reader.readAsDataURL(file)
  }
  if(this.value){
    let valueStorage = this.value.match(regExp)
    nomeArquivo.textContent = valueStorage   
  }
})