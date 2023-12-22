document.addEventListener('DOMContentLoaded', function() {
  // URL pré-definida
  var defaultURL = 'https://slimeread.com';

  // Verificar o status automaticamente quando a página carregar
  checkStatus(defaultURL);
});

function checkStatus(url) {
  var resultDiv = document.getElementById('result');

  if (!url || url.trim() === '') {
      resultDiv.innerHTML = 'URL não definida.';
      resultDiv.className = 'result-box error';
      return;
  }

  resultDiv.innerHTML = 'Verificando...';
  resultDiv.className = 'result-box';

  fetch(url, { method: 'HEAD' })
      .then(response => {
          if (response.ok) {
              resultDiv.innerHTML = 'O site está ativo.';
              resultDiv.className = 'result-box success';
          } else {
              resultDiv.innerHTML = 'O site está fora do ar.';
              resultDiv.className = 'result-box error';
          }
      })
      .catch(error => {
          resultDiv.innerHTML = 'Erro ao verificar o status do site.';
          resultDiv.className = 'result-box error';
      });
}
