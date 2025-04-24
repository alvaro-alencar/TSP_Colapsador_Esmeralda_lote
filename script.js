
function runBatch() {
    const files = document.getElementById('fileInput').files;
    const A = parseFloat(document.getElementById("paramA").value);
    const s = parseFloat(document.getElementById("paramS").value);
    const N = parseInt(document.getElementById("paramN").value);

    const container = document.getElementById("canvasContainer");
    const resultsBody = document.getElementById("results-body");
    container.innerHTML = "";
    resultsBody.innerHTML = "";

    const totalStart = performance.now();
    let processed = 0;
    let chartPoints = [];

    for (const file of files) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const start = performance.now();
            const content = e.target.result;
            const cities = parseTSPLIB(content);

            function emeraldPerfectRefinedValue(n, phi = Math.PI * (3 - Math.sqrt(5))) {
                let E_primal = A * Math.sin((2 * Math.PI * n) / phi);
                let E_primordial = 0;
                for (let k = 1; k <= N; k++) {
                    E_primordial += A * Math.sin((2 * Math.PI * k * n) / Math.pow(phi, k));
                }
                const Rn = Math.log(n);
                const smooth = 1 + s * Math.sin((2 * Math.PI * n) / (phi * s));
                return (E_primal + E_primordial) * Rn * (n / Math.log(n + 1)) * smooth;
            }

            const harmonic = [...cities].sort((a, b) => emeraldPerfectRefinedValue(a.id) - emeraldPerfectRefinedValue(b.id));
            const refined = twoOpt(harmonic);
            const cost = totalPathCost(refined).toFixed(2);

            const block = document.createElement("div");
            block.className = "tsp-block";
            const meta = document.createElement("div");
            meta.className = "tsp-meta";
            meta.innerText = `${file.name} • Custo: ${cost}`;
            const canvas = document.createElement("canvas");
            canvas.className = "tsp-canvas";
            canvas.width = 300;
            canvas.height = 300;
            const ctx = canvas.getContext("2d");

            const minX = Math.min(...cities.map(c => c.x));
            const maxX = Math.max(...cities.map(c => c.x));
            const minY = Math.min(...cities.map(c => c.y));
            const maxY = Math.max(...cities.map(c => c.y));
            const padding = 20;
            const scaleX = (canvas.width - 2 * padding) / (maxX - minX);
            const scaleY = (canvas.height - 2 * padding) / (maxY - minY);
            const scale = Math.min(scaleX, scaleY);
            const transform = (coord) => ({
                x: padding + (coord.x - minX) * scale,
                y: padding + (coord.y - minY) * scale
            });

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (const city of cities) {
                const pos = transform(city);
                ctx.beginPath();
                ctx.arc(pos.x, pos.y, 2, 0, 2 * Math.PI);
                ctx.fillStyle = "#00ffff";
                ctx.fill();
                ctx.fillText(city.id, pos.x + 3, pos.y - 3);
            }
            ctx.beginPath();
            const startPoint = transform(refined[0]);
            ctx.moveTo(startPoint.x, startPoint.y);
            for (let i = 1; i < refined.length; i++) {
                const p = transform(refined[i]);
                ctx.lineTo(p.x, p.y);
            }
            ctx.lineTo(startPoint.x, startPoint.y);
            ctx.strokeStyle = "#ff00ff";
            ctx.lineWidth = 1;
            ctx.stroke();

            block.appendChild(meta);
            block.appendChild(canvas);
            container.appendChild(block);

            const end = performance.now();
            const execTime = ((end - start) / 1000).toFixed(2);

            const row = document.createElement("tr");
            row.innerHTML = `<td>${file.name}</td><td>${A}</td><td>${s}</td><td>${N}</td><td>${cost}</td><td>${execTime}</td>`;
            resultsBody.appendChild(row);

            chartPoints.push({ x: parseFloat(execTime), y: parseFloat(cost) });
            processed++;
            if (processed === files.length) {
                chartData.labels = Array.from(files).map(f => f.name);
                chartData.datasets[0].data = chartPoints;
                renderChart();

                const totalEnd = performance.now();
                const totalExec = ((totalEnd - totalStart) / 1000).toFixed(2);
                alert(`✅ Execução concluída para ${files.length} instâncias.⏱️ Tempo total: ${totalExec} segundos.`);
            }
        };
        reader.readAsText(file);
    }
}
