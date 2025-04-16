function exibirResumoPedido() {
    const pedido = JSON.parse(localStorage.getItem('pedido')) || [];
    const resumoLista = document.getElementById('resumo-lista');
    const totalPedido = document.getElementById('total-pedido');

    let total = 0;

    pedido.forEach(item => {
        const li = document.createElement('li');
        const subtotal = item.preco * item.quantidade;
        li.textContent = `${item.nome} x${item.quantidade} - R$ ${subtotal.toFixed(2)}`;
        resumoLista.appendChild(li);
        total += subtotal;
    });

    totalPedido.textContent = `Total: R$ ${total.toFixed(2)}`;
}

function confirmarPagamento() {
    alert("Pagamento confirmado! Obrigado por comprar no K-afé ☕");
    localStorage.removeItem('pedido');
    window.location.href = "index.html";
}

window.onload = exibirResumoPedido;
