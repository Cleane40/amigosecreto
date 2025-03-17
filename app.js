let amigos = []
 
function adicionarAmigo(){
    let nomeDoAmigo = document.getElementById("amigo");
    let nome = nomeDoAmigo.value.trim();
 
    if (nome == ""){
        alert("Amigo, você deve inserir um nome");
        return;
    } 
    amigos.push(nome);
    console.log(amigos);
 
    nomeDoAmigo.value = "";
    exibirAmigos();
}
 
function exibirAmigos(){
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";
    console.log("Lista limpa");
 
    for (let i = 0; i < amigos.length; i++){
        let li = document.createElement("li")
        li.textContent = amigos[i]
        lista.appendChild(li);
    }
}
function sortearAmigo() {
    if (amigos.length <= 3) {
        alert("Numero de nomes abaixo do esperado.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = "";
   
    resultado.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`;
   
}