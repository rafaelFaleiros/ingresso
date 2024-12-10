let pistaTotal = 100;
let inferiorTotal = 400;
let superiorTotal = 200;
let quantidadeDisp  = 0;

function comprar() {
    //pegar qual tipo do ingresso
    let ingresso = document.getElementById('tipo-ingresso').value;
    
    //pegar a quantidade
    let quantidade = document.getElementById('qtd').value;

    //ver se tem disponivel
    if (ingresso == 'inferior'){
        if (inferiorTotal >= quantidade){
            inferiorTotal = inferiorTotal - quantidade;
        }
        else{
            alert('Essa quantidade não está disponivel.');
        }
    }
    else if (ingresso == 'superior'){
        if (superiorTotal >= quantidade){
            superiorTotal = superiorTotal - quantidade;
        }
        else{
            alert('Essa quantidade não está disponivel.');
        }
    }
    else{
        if (pistaTotal >= quantidade){
            pistaTotal = pistaTotal - quantidade;
        }
        else{
            alert('Essa quantidade não está disponivel.');
        }
    }
      
    document.getElementById('qtd-pista').innerHTML = pistaTotal;
    document.getElementById('qtd-inferior').innerHTML = inferiorTotal;
    document.getElementById('qtd-superior').innerHTML = superiorTotal;
    console.log(superiorTotal);
}