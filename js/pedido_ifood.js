//Função para utilizar o total do pedido Automaticamente.
function atualizarTotal() {
    const produtos = document.querySelectorAll('.produto');
    let total = 0;

    // Itera sobre os produtos e calcula o total
    produtos.forEach(produto => {
        const preco = parseFloat(produto.getAttribute('data-preco'));
        const input = produto.querySelector('input[type="number"]');
        const quantidade = parseInt(input.value);

        // Verifica se a quantidade é válida (maior que 0)
        if (!isNaN(quantidade) && quantidade > 0) {
            total += preco * quantidade;
        }
    });

    // Atualiza o elemento do total do pedido
    const totalElemento = document.getElementById('totalPedido');
    if (totalElemento) {
        totalElemento.textContent = `R$ ${total.toFixed(2)}`;
    }
}

// Função para finalizar o pedido, salvar no localStorage e redirecionar para a página de pagamento
function finalizarPedido() {
    const produtos = document.querySelectorAll('.produto');
    const pedido = [];

    // Itera sobre os produtos e cria um objeto para cada item comprado
    produtos.forEach(produto => {
        const nome = produto.getAttribute('data-nome');
        const preco = parseFloat(produto.getAttribute('data-preco'));
        const input = produto.querySelector('input[type="number"]');
        const quantidade = parseInt(input.value);

        // Verifica se a quantidade é maior que 0 antes de adicionar ao pedido
        if (!isNaN(quantidade) && quantidade > 0) {
            pedido.push({ nome, preco, quantidade });
        }
    });

    // Verifica se algum item foi adicionado ao pedido
    if (pedido.length === 0) {
        alert("Você precisa selecionar ao menos um item para continuar.");
        return;
    }

    // Salva o pedido no localStorage
    localStorage.setItem('pedido', JSON.stringify(pedido));

    // Redireciona para a página de pagamento
    window.location.href = "pagamento.html";
}

// Escuta mudanças nos inputs de quantidade para atualizar o total
window.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.produto input[type="number"]');
    inputs.forEach(input => {
        input.addEventListener('input', atualizarTotal);
    });

    // Atualiza o total assim que a página carregar
    atualizarTotal();
});
