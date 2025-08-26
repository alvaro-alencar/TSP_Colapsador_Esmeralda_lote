# TSP_Colapsador_Esmeralda_lote
Heurística para aproximação do resultado ótimo com margem de erro de ~3% para problemas TSP em tempo polinomial - Envio em lote de arquivos TSP

# TSP Colapsador Esmeralda 💎

[![Status: Em Desenvolvimento](https://img.shields.io/badge/status-em%20desenvolvimento-yellow.svg)](https://github.com/alvaro-alencar/TSP_Colapsador_Esmeralda_lote)
[![Tecnologia: JavaScript](https://img.shields.io/badge/tecnologia-JavaScript-blue.svg)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Licença: MIT](https://img.shields.io/badge/licença-MIT-green.svg)](https://opensource.org/licenses/MIT)

Uma ferramenta interativa para visualização e resolução do Problema do Caixeiro Viajante (TSP) através de uma heurística original, inspirada nos princípios harmônicos da Tábua de Esmeralda de Hermes Trismegisto.

**[✨ Acessar a Demonstração Ao Vivo ✨](https://alvaro-alencar.github.io/TSP_Colapsador_Esmeralda_lote/)**
*(Nota: Este link é um exemplo e precisará ser ativado via GitHub Pages nas configurações do repositório.)*

---

### A Inspiração Filosófica: A Tábua de Esmeralda

> "O que está embaixo é como o que está em cima, e o que está em cima é como o que está embaixo, para realizar os milagres de uma única coisa."

Este projeto nasceu não apenas de um desafio computacional, mas de uma indagação filosófica. A heurística "Esmeralda" é uma tentativa de traduzir o princípio hermético da correspondência e da harmonia para o domínio dos algoritmos.

Em vez de tratar os pontos (cidades) como dados inertes em um plano cartesiano, o algoritmo busca "escutar" uma harmonia intrínseca entre eles. A função `emeraldPerfectRefinedValue` atribui a cada ponto um valor único baseado em uma sobreposição de ondas harmônicas, moduladas pela proporção áurea ($\phi$). A rota inicial é, então, construída seguindo essa ordem vibracional, como se os pontos se organizassem naturalmente em um caminho de menor resistência.

O resultado é uma abordagem que une matemática e intuição, buscando na sabedoria antiga uma nova luz para resolver problemas complexos.

---

### ## Como Funciona

O processo de resolução é dividido em duas fases principais:

1.  **Ordenação Harmônica (A Heurística Esmeralda):** Primeiramente, as cidades são ordenadas de acordo com o valor harmônico calculado pela função `emeraldPerfectRefinedValue`. Isso gera uma rota inicial de alta qualidade, que já é uma excelente aproximação da solução ótima.
2.  **Refinamento Local (2-Opt):** Em seguida, a rota gerada pela heurística é refinada utilizando o algoritmo clássico 2-Opt, que sistematicamente troca pares de arestas para eliminar cruzamentos e reduzir o custo total do percurso.

---

### ## ✨ Funcionalidades

* ✔️ Carregamento de múltiplos arquivos no formato `.tsp` para processamento em lote.
* ✔️ Visualização gráfica interativa da rota resultante para cada instância.
* ✔️ Parâmetros da heurística (`A`, `s`, `N`) totalmente ajustáveis pelo usuário.
* ✔️ Geração de uma tabela de resultados com Custo da Rota e Tempo de Execução.
* ✔️ Gráfico de dispersão (Scatter Plot) comparando Custo vs. Tempo para todas as instâncias processadas.

---

### ## 🚀 Como Usar

1.  Acesse a **[demonstração ao vivo](https://alvaro-alencar.github.io/TSP_Colapsador_Esmeralda_lote/)**.
2.  Clique em "Escolher arquivos" e selecione um ou mais arquivos `.tsp`.
3.  (Opcional) Ajuste os parâmetros da heurística `A`, `s` e `N`.
4.  Clique no botão **🌀 Rodar em lote**.
5.  Analise os resultados na tabela, no gráfico e nas visualizações individuais.

---

### ## 🛠️ Tecnologias Utilizadas

* **JavaScript (ES6+)**
* **HTML5**
* **CSS3**
* **Chart.js** para a plotagem de gráficos.

---

### ## 👤 Autor

* **Álvaro Alencar** - [GitHub](https://github.com/alvaro-alencar)

---

### ## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

