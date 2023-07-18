
 
const personagens = document.querySelectorAll('.personagem');

personagens.forEach((person) => {
    person.addEventListener('mouseenter', () => {

        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        removeShadowBox();
        person.classList.add('selecionado');  
        alterarImagemPesonagemSelecionado(person);
        alterarNomePersonagem(person);
        alterarDescricaoPersonagem(person);


    })
})
function alterarDescricaoPersonagem(person) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = person.getAttribute('data-descricao');
}

function alterarNomePersonagem(person) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = person.getAttribute('data-name');
}

function alterarImagemPesonagemSelecionado(person) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = person.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removeShadowBox() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

