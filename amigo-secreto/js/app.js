let amigo = '';
let lista = '';
let amigos = [];
let sorteio;

function adicionar() {
    amigo = document.getElementById('nome-amigo');
    lista = document.getElementById('lista-amigos');
    let maiuscula = String(amigo.value).toUpperCase();

    if (amigos.includes(maiuscula)) {
        alert('O nome ' + amigo.value + ' já existe na lista. Entre um nome diferente!');
        return;
    }

    amigos.push(maiuscula);

    // if (amigos.includes(amigo.value)) {
    //     alert('O nome ' + amigo.value + ' já existe na lista. Entre um nome diferente!');
    //     return;
    // }

    // amigos.push(amigo.value);

    if (lista.textContent == '' && amigo.value != '') {
        lista.textContent = amigo.value;
    } else if (amigo.value != '') {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    } else {
        alert('Para adicionar você precisa digitar o nome do amigo!');
    }

    amigo.value = '';
}

function sortear() {
    if (amigos.length <= 3) {
        alert('Você precisa de pelo menos 4 amigos para que a brincadeira funcione!');
    } else {
        embaralhar(amigos);
        sorteio = document.getElementById('lista-sorteio');

        for (let i = 0; i < amigos.length; i++) {
            if (i == amigos.length - 1) {
                sorteio.innerHTML += amigos[i] + ' --> ' + amigos[0] + '<br>';
            } else {
                sorteio.innerHTML += amigos[i] + ' --> ' + amigos[i + 1] + '<br>';   
            }
        }
    }

    
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    // document.getElementById('lista-amigos') = '';
    // document.getElementById('lista-sorteio') = '';
    amigo.value = '';
    lista.textContent = '';
    sorteio.innerHTML = '';
}