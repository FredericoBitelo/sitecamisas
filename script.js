const indicadores = document.querySelectorAll(".indicador");
const radios = document.querySelectorAll("input[type='radio']");
let qual = 0;
let temporizador;


for (let i = 0; i < indicadores.length; i++) {
    indicadores[i].addEventListener("click", mudarSlide);
    indicadores[i].setAttribute("indice", i);
}

function mudarSlide(event) {
    event.preventDefault();
    clearInterval(temporizador);


    radios.forEach(radio => radio.removeAttribute("checked"));

    
    qual = this.getAttribute("indice");
    radios[qual].setAttribute("checked", "checked");

    
    indicadores.forEach((indicador, index) => {
        if (index == qual) {
            indicador.classList.add("ativo");
        } else {
            indicador.classList.remove("ativo");
        }
    });

    setTimeout(iniciarTemporizador, 5000);
}

function mudarAutomatico() {
    qual++;
    if (qual >= radios.length) 
        qual = 0;

   
    radios.forEach(radio => radio.removeAttribute("checked"));

    radios[qual].setAttribute("checked", "checked");

    
    indicadores.forEach((indicador, index) => {
        if (index == qual) {
            indicador.classList.add("ativo");
        } else {
            indicador.classList.remove("ativo");
        }
    });
}

function iniciarTemporizador() {
    temporizador = setInterval(mudarAutomatico, 8000);
}

iniciarTemporizador();


let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nome, quantidade, preco) {
    quantidade = parseInt(quantidade);
    if (quantidade > 0) {
        carrinho.push({ nome, quantidade, preco });
        total += quantidade * preco;
        alert(`${quantidade} ${nome}(s) adicionada(s) ao carrinho.`);
        document.getElementById(`quantidade${carrinho.length}`).value = ''; // Limpa a quantidade
    } else {
        alert('Por favor, insira uma quantidade válida.');
    }
}

function mostrarCarrinho() {
    const carrinhoElement = document.getElementById('carrinho');
    carrinhoElement.innerHTML = '';

    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.quantidade} x ${item.nome} - R$ ${(item.preco * item.quantidade).toFixed(2)}`;
        carrinhoElement.appendChild(li);
    });

    document.getElementById('total').textContent = `Total: R$ ${total.toFixed(2)}`;
    document.getElementById('carrinho-section').style.display = 'block';
}

function esconderCarrinho() {
    document.getElementById('carrinho-section').style.display = 'none';
}

