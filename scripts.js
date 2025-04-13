document.addEventListener('DOMContentLoaded', () => {
  // Dados simulados de jogos
  const jogos = [
    { data: '2025-04-01', mandante: 'Time A', visitante: 'Time B', cartoesAmarelos: 3, escanteios: 5 },
    { data: '2025-04-02', mandante: 'Time C', visitante: 'Time D', cartoesAmarelos: 2, escanteios: 6 },
    // Adicione mais dados conforme necessário
  ];

  // Função para gerar a tabela de jogos
  function gerarTabela() {
    const tabelaCorpo = document.querySelector('table tbody');
    tabelaCorpo.innerHTML = '';
    jogos.forEach(jogo => {
      const linha = document.createElement('tr');
      linha.innerHTML = `
        <td>${jogo.data}</td>
        <td>${jogo.mandante}</td>
        <td>${jogo.visitante}</td>
        <td>${jogo.cartoesAmarelos}</td>
        <td>${jogo.escanteios}</td>
      `;
      tabelaCorpo.appendChild(linha);
    });
  }

  // Função para gerar o gráfico de desempenho
  function gerarGrafico() {
    const ctx = document.getElementById('graficoDesempenho').getContext('2d');
    const labels = jogos.map(jogo => `${jogo.mandante} vs ${jogo.visitante}`);
    const cartoesData = jogos.map(jogo => jogo.cartoesAmarelos);
    const escanteiosData = jogos.map(jogo => jogo.escanteios);

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Cartões Amarelos',
            data: cartoesData,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          },
          {
            label: 'Escanteios',
            data: escanteiosData,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
     
::contentReference[oaicite:0]{index=0}
 
