window.onload = function(){
    //pegar o botao adicionar
    const BOTAO_ENVIAR = document.querySelector('#enviar')
    
    //adicionar envento ao clicar no botao 'adicionar'
    BOTAO_ENVIAR.addEventListener('click', event => {
        event.preventDefault()
    
        //pegar dados do formulario
        let nomeDaBanda = document.getElementById('exampleInputText1').value
        let descricaoDaBanda = document.getElementById('exampleInputText2').value
        let imgDaBanda = document.getElementById('exampleInputText3').value

        //console.log(nomeDaBanda, descricaoDaBanda, imgDaBanda)

        //criar cards
        let criaCard = document.createElement('div')
        criaCard.innerHTML = `
          <div class="card">
            <img src= '${imgDaBanda}' class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${nomeDaBanda}</h5>
              <p class="card-text">${descricaoDaBanda}</p>
                <a href="./view/detalhes.html" class="btn-abrir btn-abrir-guns" target="_blank">Abrir</a>
            </div>
          </div>  
        `
        document.querySelector('.itens').appendChild(criaCard)
    })
}
