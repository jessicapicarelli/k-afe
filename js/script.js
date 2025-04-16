// Função para preencher o resumo do pedido na página de confirmação
function preencherResumoPedido() {
    // Recupera os produtos armazenados no localStorage
    const produtos = JSON.parse(localStorage.getItem('pedido')); // 'pedido' é o nome que usamos no armazenamento
    const pedidoResumoDiv = document.getElementById('pedidoResumo');
    
    let resumoHTML = '';
    let total = 0;
    
    // Verifica se há produtos no localStorage
    if (produtos && produtos.length > 0) {
      produtos.forEach(produto => {
        // Calcula o total por item
        const totalProduto = produto.preco * produto.quantidade;
        resumoHTML += `
          <p><strong>${produto.nome}</strong> - Quantidade: ${produto.quantidade} - R$ ${totalProduto.toFixed(2)}</p>
        `;
        total += totalProduto;
      });
    
      resumoHTML += `<h3>Total: R$ ${total.toFixed(2)}</h3>`;
    } else {
      resumoHTML = "<p>Nenhum item foi selecionado.</p>";
    }
    
    pedidoResumoDiv.innerHTML = resumoHTML;
  }
  
  // Função chamada ao clicar no botão de pagamento
  function escolherPagamento(tipoPagamento) {
    alert(`Você escolheu pagar com ${tipoPagamento}`);
    // Aqui você pode redirecionar para uma página de pagamento real ou simular o processo de pagamento
    // Exemplo de redirecionamento (ajuste conforme necessário):
    // window.location.href = 'pagamento_processado.html'; 
  }
  
  // Chama a função quando a página carrega
  window.onload = function() {
    preencherResumoPedido();
  }
  function finalizarPedido() {
    window.location.href = "pagamento.html";
};
  