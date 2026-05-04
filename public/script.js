const catalogo = [
  {
    id: 1,
    titulo: "Interestelar",
    tipo: "filme",
    ano: 2014,
    generos: ["ficção científica", "aventura", "drama"],
    nota: 9.5,
    assistido: true,
  },
  {
    id: 2,
    titulo: "Breaking Bad",
    tipo: "serie",
    ano: 2008,
    generos: ["drama", "crime", "thriller"],
    nota: 9.8,
    assistido: true,
  },
  {
    id: 3,
    titulo: "Clube da Luta",
    tipo: "filme",
    ano: 1999,
    generos: ["drama", "thriller"],
    nota: 8.8,
    assistido: false,
  },
  {
    id: 4,
    titulo: "Dark",
    tipo: "serie",
    ano: 2017,
    generos: ["ficção científica", "mistério", "thriller"],
    nota: 9.2,
    assistido: true,
  },
  {
    id: 5,
    titulo: "Parasita",
    tipo: "filme",
    ano: 2019,
    generos: ["drama", "thriller", "comédia negra"],
    nota: 8.6,
    assistido: false,
  },
  {
    id: 6,
    titulo: "Chernobyl",
    tipo: "serie",
    ano: 2019,
    generos: ["drama histórico", "thriller"],
    nota: 9.4,
    assistido: true,
  },
  {
    id: 7,
    titulo: "Matrix",
    tipo: "filme",
    ano: 1999,
    generos: ["ação", "ficção científica"],
    nota: 8.7,
    assistido: false,
  },
  {
    id: 8,
    titulo: "Severance",
    tipo: "serie",
    ano: 2022,
    generos: ["ficção científica", "suspense"],
    nota: 8.9,
    assistido: false,
  },
];

console.log("═══════════════════════════════════════");
console.log("  B.2 — ACESSO E LEITURA DOS DADOS");
console.log("═══════════════════════════════════════");

console.log("📦 Catálogo completo:");
console.log(catalogo);

console.log(`\n▶ Título do primeiro item: "${catalogo[0].titulo}"`);

const ultimo = catalogo[catalogo.length - 1];
console.log(`▶ Ano do último item ("${ultimo.titulo}"): ${ultimo.ano}`);

const terceiroItem = catalogo[2];
if (terceiroItem.generos.length >= 2) {
  console.log(
    `▶ Segundo gênero de "${terceiroItem.titulo}": "${terceiroItem.generos[1]}"`
  );
} else {
  console.log(
    `▶ "${terceiroItem.titulo}" tem apenas 1 gênero: "${terceiroItem.generos[0]}". Segundo gênero inexistente.`
  );
}

console.log("\n═══════════════════════════════════════");
console.log("  B.3-A — forEach: LISTAGEM DE TÍTULOS");
console.log("═══════════════════════════════════════");

catalogo.forEach((item) => {
  console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});



console.log("\n═══════════════════════════════════════");
console.log("  B.3-B — map: TÍTULOS EM CAIXA ALTA");
console.log("═══════════════════════════════════════");

const titulosEmCaixaAlta = catalogo.map((item) => item.titulo.toUpperCase());
console.log(titulosEmCaixaAlta);


console.log("\n═══════════════════════════════════════");
console.log("  B.3-C — filter: NÃO ASSISTIDOS");
console.log("═══════════════════════════════════════");

const naoAssistidos = catalogo.filter((item) => item.assistido === false);
console.log(`Total de itens não assistidos: ${naoAssistidos.length}`);
naoAssistidos.forEach((item) =>
  console.log(`  • ${item.titulo} (${item.tipo}, ${item.ano})`)
);


console.log("\n═══════════════════════════════════════");
console.log("  B.3-D — find: PRIMEIRO COM NOTA ≥ 9");
console.log("═══════════════════════════════════════");

const destaque = catalogo.find((item) => item.nota >= 9);
if (destaque) {
  console.log(`✅ Encontrado: "${destaque.titulo}" — nota ${destaque.nota}`);
} else {
  console.log("❌ Nenhum item com nota igual ou superior a 9 foi encontrado.");
}


console.log("\n═══════════════════════════════════════");
console.log("  B.3-E — reduce: MÉDIAS DE NOTAS");
console.log("═══════════════════════════════════════");

const somaTotal = catalogo.reduce((acc, item) => acc + item.nota, 0);
const mediaGeral = somaTotal / catalogo.length;

const assistidos = catalogo.filter((item) => item.assistido === true);
const somaAssistidos = assistidos.reduce((acc, item) => acc + item.nota, 0);
const mediaAssistidos =
  assistidos.length > 0 ? somaAssistidos / assistidos.length : 0;

console.log(`📊 Média geral de notas:          ${mediaGeral.toFixed(2)}`);
console.log(`📊 Média de notas dos assistidos: ${mediaAssistidos.toFixed(2)}`);



console.log("\n═══════════════════════════════════════");
console.log("  B.3-F — some / every: CHECAGENS");
console.log("═══════════════════════════════════════");

const temItemAntigo = catalogo.some((item) => item.ano < 2000);
console.log(
  `some → Existe algum item com ano < 2000? ${temItemAntigo ? "✅ SIM" : "❌ NÃO"}`
);

const todosTemGenero = catalogo.every((item) => item.generos.length >= 1);
console.log(
  `every → Todos os itens têm pelo menos 1 gênero? ${todosTemGenero ? "✅ SIM" : "❌ NÃO"}`
);


const totalFilmes = catalogo.filter((i) => i.tipo === "filme").length;
const totalSeries = catalogo.filter((i) => i.tipo === "serie").length;

const ranking = [...catalogo]
  .sort((a, b) => b.nota - a.nota)
  .slice(0, 3);

const medalhas = ["gold", "silver", "bronze"];
const rankingHTML = ranking
  .map(
    (item, idx) => `
    <div class="ranking-item">
      <span class="rank-pos ${medalhas[idx]}">${idx + 1}</span>
      <span class="rank-title">${item.titulo} <span style="color:var(--muted);font-size:0.75rem">(${item.tipo}, ${item.ano})</span></span>
      <span class="rank-nota">${item.nota}</span>
    </div>`
  )
  .join("");

document.getElementById("output").innerHTML = `
  <h2>📊 Resumo do Catálogo</h2>

  <div class="section">
    <div class="section-title">Estatísticas Gerais</div>
    <div class="stat-grid">
      <div class="stat-box">
        <span class="stat-label">Total de itens</span>
        <span class="stat-value">${catalogo.length}</span>
      </div>
      <div class="stat-box">
        <span class="stat-label">Filmes</span>
        <span class="stat-value">${totalFilmes}</span>
      </div>
      <div class="stat-box">
        <span class="stat-label">Séries</span>
        <span class="stat-value">${totalSeries}</span>
      </div>
      <div class="stat-box">
        <span class="stat-label">Não Assistidos</span>
        <span class="stat-value">${naoAssistidos.length}</span>
      </div>
      <div class="stat-box">
        <span class="stat-label">Média Geral</span>
        <span class="stat-value">${mediaGeral.toFixed(2)}</span>
      </div>
      <div class="stat-box">
        <span class="stat-label">Média Assistidos</span>
        <span class="stat-value">${mediaAssistidos.toFixed(2)}</span>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">🏆 Mini Ranking — Top 3 Notas</div>
    ${rankingHTML}
  </div>

  <div class="section">
    <div class="section-title">Checagens</div>
    <p style="font-size:0.82rem">
      • Item com ano &lt; 2000: <strong style="color:var(--accent)">${temItemAntigo ? "Sim" : "Não"}</strong><br/>
      • Todos têm ≥ 1 gênero: <strong style="color:var(--accent)">${todosTemGenero ? "Sim" : "Não"}</strong>
    </p>
  </div>
`;

console.log("\n✅ DOM atualizado com o resumo em #output.");
