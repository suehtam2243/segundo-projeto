
function gerarMentoria() {

    const interesses = document
        .getElementById("interesses").value.toLowerCase();

    const habilidades = document
        .getElementById("habilidades").value.toLowerCase();

    const objetivo = document
        .getElementById("objetivo").value;

    const resultado = document.getElementById("resultado");

    if (interesses.trim() === "" ||
        habilidades.trim() === "" ||
        objetivo === "") {

        resultado.innerHTML = `
            <h2>⚠️ Atenção!</h2>
            <p>Preencha todos os campos para receber sua orientação profissional.</p>
        `;
        return;
    }

    let carreira = "";
    let descricao = "";
    let cursos = [];

    if (interesses.includes("tecnologia") ||
        interesses.includes("programação") ||
        interesses.includes("computador")) {

        carreira = "Desenvolvedor de Software";
        descricao = "Você demonstra interesse pela tecnologia e pode desenvolver soluções digitais.";
        cursos = [
            "Lógica de Programação",
            "HTML, CSS e JavaScript",
            "Python",
            "Desenvolvimento Web"
        ];

    } else if (interesses.includes("design") ||
               interesses.includes("arte") ||
               interesses.includes("criatividade")) {

        carreira = "Designer Gráfico";
        descricao = "Sua criatividade pode ser uma grande vantagem na área de design e comunicação visual.";
        cursos = [
            "Design Gráfico",
            "Adobe Photoshop",
            "Figma",
            "UX e UI Design"
        ];

    } else if (interesses.includes("negócios") ||
               interesses.includes("vendas") ||
               interesses.includes("empreender")) {

        carreira = "Empreendedor ou Gestor de Negócios";
        descricao = "Seu interesse por negócios pode abrir oportunidades na gestão e no empreendedorismo.";
        cursos = [
            "Administração",
            "Marketing Digital",
            "Gestão Financeira",
            "Empreendedorismo"
        ];

    } else if (interesses.includes("saúde") ||
               interesses.includes("ajudar") ||
               interesses.includes("pessoas")) {

        carreira = "Profissional da Área da Saúde";
        descricao = "Seu interesse em ajudar pessoas pode combinar com profissões da área da saúde.";
        cursos = [
            "Primeiros Socorros",
            "Enfermagem",
            "Psicologia",
            "Saúde Pública"
        ];

    } else {

        carreira = "Analista de Projetos";
        descricao = "Você pode explorar áreas que envolvam organização, planejamento e resolução de problemas.";
        cursos = [
            "Gestão de Projetos",
            "Comunicação",
            "Pacote Office",
            "Liderança"
        ];
    }

    resultado.innerHTML = `
        <h2>🤖 Resultado da sua Mentoria</h2>

        <h3>🎯 Carreira recomendada:</h3>
        <p><strong>${carreira}</strong></p>

        <h3>💡 Por que essa carreira?</h3>
        <p>${descricao}</p>

        <h3>⭐ Suas habilidades:</h3>
        <p>${habilidades}</p>

        <h3>📚 Cursos recomendados:</h3>
        <ul>
            ${cursos.map(curso => `<li>${curso}</li>`).join("")}
        </ul>

        <h3>🚀 Seu objetivo:</h3>
        <p>${objetivo}</p>

        <h3>📌 Próximo passo:</h3>
        <p>Escolha um dos cursos recomendados, estude e desenvolva um projeto prático para começar sua jornada profissional!</p>

        <p><em>Esta é uma sugestão inicial baseada nas suas respostas, não uma avaliação profissional definitiva.</em></p>
    `;
}
