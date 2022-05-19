class AnotacoesController {
  constructor () {
    this.anotacoes = [];
  }

  addAnotacao (text) {
    let anotacao = document.querySelector("#descricaoTarefa").value;
    let titulo = document.querySelector("#titulo").value;
    const anotacoes1 = new Anotacoes(titulo, anotacao);
    this.anotacoes.push(anotacoes1);
    console.log(this.anotacoes);
  }
}


