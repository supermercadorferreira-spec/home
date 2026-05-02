let carrinho = [];
let total = 0;

function toggleCarrinho() {
    document.getElementById('carrinho-lateral').classList.toggle('active');
}

function addItem(nome, preco) {
    carrinho.push({ nome, preco });
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const lista = document.getElementById('itens-carrinho');
    const contador = document.getElementById('cart-count');
    const totalDisplay = document.getElementById('cart-total');
    
    lista.innerHTML = "";
    total = 0;

    carrinho.forEach((item, index) => {
        total += item.preco;
        lista.innerHTML += `
            <div class="cart-item">
                <div>
                    <strong>${item.nome}</strong><br>
                    <small>R$ ${item.preco.toFixed(2)}</small>
                </div>
                <button onclick="removerItem(${index})" style="background:none; border:none; color:red; cursor:pointer;">Remover</button>
            </div>
        `;
    });

    if(carrinho.length === 0) {
        lista.innerHTML = '<p style="text-align: center; margin-top: 20px;">O carrinho está vazio.</p>';
    }

    contador.innerText = carrinho.length;
    totalDisplay.innerText = `R$ ${total.toFixed(2)}`;
}

function removerItem(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

function finalizarCompra() {
    if(carrinho.length === 0) return alert("Seu carrinho está vazio!");
    
    let mensagem = "Olá, gostaria de fazer um pedido:\n\n";
    carrinho.forEach(item => {
        mensagem += `- ${item.nome}: R$ ${item.preco.toFixed(2)}\n`;
    });
    mensagem += `\n*Total: R$ ${total.toFixed(2)}*`;
    
    // Link do WhatsApp com a mensagem pronta
    const fone = "5577999999999"; // Substitua pelo seu número real
    window.open(`https://wa.me/${fone}?text=${encodeURIComponent(mensagem)}`);
}