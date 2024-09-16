const baseUrl = "http://localhost:3000/login";
//funções mais simples no comando

//funcção para alterar a mensagem do *Titulo*
function mensagemDeErro(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}


// variavel para quebrar o loop da base de Dados com o Front-end
let b = 0;

//Essa será a ativação da consulta e utilização dos valores inseridos pelo usuário com a DataBase.XLSX

function confirmarValores(){
  //abri o chamado do fetch
  (fetch);
  //varaivel async para o call do fetch
  (async() => {
    const json = await chamarApi();

    //consulta ampla dos dados
    //console.log(json);

    //Valores inseridos pelo usuário

    // Valor respectivo ao Número de série
    const numeroSerie = document.getElementById("ns").value; 
    // Valor respectivo ao Número do patrimônio 
    const numeroPatrimonio = document.getElementById("np").value; 

    //utilização dos dados
    for (let i = 0; i < json.length; i++) {
      if(json[i][0] == numeroSerie //O arquivo *json* está procurando todos valores que se encontram na "COLUNA A" 
        && json[i][1] == numeroPatrimonio //O arquivo *json* está procurando todos valores que se encontram na "COLUNA B"
      ){
        const testeSerial = true;
        console.log(testeSerial); // informação da coerência do código
        // utilização da variavel *testeSerial*
        if(testeSerial == true){
          location.href = "cadastro.html" // implementação FRONT-BACK
          b++; // função obrigatorio para que a consição While não ative caso os valores correspomdam. 
        }
      }
    }
    //caso os dados gerados pelo cliente não correspondam com a base de dados está será a informação apresentada!
    while(b < 1) {
      b++;
      mensagemDeErro("h1", "NÚMERO INVALIDO");// está função será executada apenas uma vez
    }
  //confirma se o fetch está respondendo
  console.log("tem suporte");
  })();
}
async function chamarApi(){
  const resposta = await fetch(baseUrl);
  if (!resposta.ok){
    throw new Error(`${resposta.status} ${resposta.statusText}`);
  };
  const json = await resposta.json();
  return json;
}
