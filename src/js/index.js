
//passo 1: 
const personagens = document.querySelectorAll('.personagem');

//passo 2: ADC a classe selecionado com a passagem do curso em cima dos elementos LI.

personagens.forEach((person) => {
    person.addEventListener('mouseenter', () => {

        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        removeShadowBox();
        person.classList.add('selecionado');
        //alteração do valor da imagem grande pelo valor do ID que ´´e o mesmo nome presente nas fotos 
        alterarImagemPesonagemSelecionado(person);
        //pegamos o atributo alterando o nome do personagem na tela 
        alterarNomePersonagem(person);
        // alterando a descrição: 
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

