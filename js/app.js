let listaAmigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value;
    if (nomeAmigo == '') {
        alert('Informe o nome do amigo');
        return;
    }

    if (listaAmigos.includes(listaAmigos)) {
        alert('Nome já adicionado');
        return;
    }
    let adicionarAmigosInclusos = document.getElementById('lista-amigos');
    listaAmigos.push(nomeAmigo);
    adicionarAmigosInclusos.innerHTML += `${nomeAmigo}<br>`;
    document.getElementById('nome-amigo').value = '';
    //console.log(nomeAmigo);
    //console.log(listaAmigos);
    //console.log(adicionarAmigosInclusos);
}

function sortear() {
    if (listaAmigos.length <= 2) {
        alert('Iforme pelo menos 3 pessoas para realizar o sorteio');
        return;
    }
    embaralha(listaAmigos);
    let listaSorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < listaAmigos.length; i++) {
        if (i == listaAmigos.length - 1) {
            listaSorteio.innerHTML += listaAmigos[i] + ` --> ` + listaAmigos[0] + `<br>`;
        } else {
            listaSorteio.innerHTML += listaAmigos[i] + ` --> ` + listaAmigos[i + 1] + `<br>`;
        }
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    listaAmigos = [];
}