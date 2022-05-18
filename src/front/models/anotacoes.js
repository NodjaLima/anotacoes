// class Anotacoes {
//   constructor (titulos, notas) {
//     try {
//       if (typeof titulos === 'string') {
//         this.titulos = titulos;
//       } else {
//         throw new Error ("Criação de títulos - dados inválidos")
//       }  
//     } catch (erro) {
//       console.log(erro)
//     };

//     try {
//       if (typeof notas === 'string') {
//         this.notas = notas;
//       } else {
//         throw new Error ("Criação de notas - dados inválidos")
//       }  
//     } catch (erro) {
//       console.log(erro)
//     }

//   }


// }

class Anotacoes {
  constructor (titulo, notas) {
    try {
      if (typeof titulo === "string" && typeof notas === "string") {
        this.titulo = titulo;
        this.notas = notas;
      } else {
        throw new Error("Criação de notas - dados inválidos");
      }
    } catch (erro) {
      console.log(erro);
  }
}
}