TSP Colapsador Esmeralda 💎


[![Status: Em Desenvolvimento](https://img.shields.io/badge/status-em%20desenvolvimento-yellow.svg)](https://github.com/alvaro-alencar/TSP_Colapsador_Esmeralda_lote)
[![Tecnologia: JavaScript](https://img.shields.io/badge/tecnologia-JavaScript-blue.svg)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Licença: MIT](https://img.shields.io/badge/licença-MIT-green.svg)](https://opensource.org/licenses/MIT)


Heurística original para o Problema do Caixeiro Viajante (TSP), baseada em princípios harmônicos inspirados na Tábua de Esmeralda de Hermes Trismegisto, com refinamento via 2-Opt e suporte a execução em lote de instâncias TSPLIB.

👉 ✨ Demonstração ao vivo ✨

**[✨ Acessar a Demonstração Ao Vivo ✨](https://alvaro-alencar.github.io/TSP_Colapsador_Esmeralda_lote/)**

---

✨ Inspiração Filosófica

> "O que está embaixo é como o que está em cima, e o que está em cima é como o que está embaixo, para realizar os milagres de uma única coisa."



O Colapsador Esmeralda nasceu do cruzamento entre hermetismo e ciência da computação.
Cada cidade é tratada não apenas como um ponto em um plano, mas como parte de uma vibração harmônica global.

A função emeraldPerfectRefinedValue projeta os pontos em uma ordem ditada por ondas harmônicas moduladas pela proporção áurea (φ). A rota inicial é quase como uma “melodia natural” que, ao ser refinada por 2-Opt, revela caminhos competitivos com as melhores soluções conhecidas.


---

⚙️ Como Funciona

1. Ordenação Harmônica (Heurística Esmeralda)

Cálculo de valores harmônicos para cada ponto.

Construção de rota inicial seguindo a ordem vibracional.



2. Refinamento Local (2-Opt)

Troca sistemática de arestas para eliminar cruzamentos.

Redução adicional do custo total.


## 📊 Resultados Iniciais

Comparativo entre o **custo ótimo conhecido** (TSPLIB) e o **custo obtido pelo Colapsador
Esmeralda**.

| Instância | Dimensão | Custo Ótimo | Custo Obtido | Erro (%) | Tempo (s) |
|-----------|----------|-------------|--------------|----------|-----------|
| eil51 | 51 | 426 | 444.84 | +4.4% | 0.02 |
| eil101 | 101 | 629 | 688.97 | +9.5% | 0.14 |
| st70 | 70 | 675 | 637.53 | -5.5% | 0.03 |
| berlin52 | 52 | 7542 | 8032.80 | +6.5% | 0.06 |
| berlin52 | 52 | 7542 | 7918.78 | +5.0% | 0.28 |
*Resultados obtidos em execução direta no navegador, sem otimização de baixo nível.*


---


## 🔎 Afinando os Parâmetros — Caso Berlin52
| N (harmônicas) | Custo Obtido | Erro (%) | Tempo (s) |

|----------------|--------------|----------|-----------|
| 4 | 8197.79 | +8.7% | 0.03 |
| 5 | 8032.80 | +6.5% | 0.06 |
| 6 | 7866.00 | +4.3% | 0.06 |
| 7 | 8647.96 | +14.6% | 0.04 |
| 111 | 7918.78 | +5.0% | 0.28 |



👉 Mostra que há uma faixa ótima de ressonância dos parâmetros, onde a heurística converge para valores próximos ao ótimo conhecido.


---

📂 Formatação Correta dos Arquivos .tsp

O Colapsador Esmeralda segue o padrão TSPLIB95.
Cada arquivo .tsp deve conter, no mínimo:

NAME: <nome>
TYPE: TSP
DIMENSION: <número_de_cidades>
EDGE_WEIGHT_TYPE: EUC_2D
NODE_COORD_SECTION
1   x1   y1
2   x2   y2
...
N   xN   yN
EOF

EDGE_WEIGHT_TYPE: O algoritmo suporta EUC_2D e GEO.

NODE_COORD_SECTION: Cada linha deve conter id x y.

EOF: Necessário ao final do arquivo.



---

✅ Funcionalidades

Carregamento de múltiplos arquivos .tsp e execução em lote.

Visualização interativa da rota final para cada instância.

Parâmetros ajustáveis (A, s, N) para explorar a heurística.

Tabela de custo e tempo em tempo real.

Gráfico de dispersão Custo × Tempo.



---

🚀 Como Usar

1. Abra a demonstração ao vivo.


2. Carregue arquivos .tsp (padrão TSPLIB).


3. Ajuste os parâmetros se desejar.


4. Clique em Rodar em lote.


5. Analise tabela, gráfico e rotas individuais.




---

🛠️ Tecnologias

JavaScript (ES6+)

HTML5 + CSS3

Chart.js para visualização



---

👤 Autor

Álvaro Alencar – GitHub
https://github.com/alvaro-alencar

---

📜 Licença

MIT – veja o arquivo LICENSE para detalhes.


   