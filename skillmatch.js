const candidatos = [
    {
        nome: "Natália de Souza Cunha",
        areaInteresse: "Front-end",
        habilidades: ["HTML", "CSS", "JavaScript"],
        experiencia: 0
    },
    {
        nome: "Ana Beatriz Silva",
        areaInteresse: "Front-end",
        habilidades: ["HTML", "CSS", "JavaScript"],
        experiencia: 1
    },
    {
        nome: "Lucas Oliveira",
        areaInteresse: "Front-end",
        habilidades: ["HTML", "CSS", "JavaScript", "Git"],
        experiencia: 2
    },
    {
        nome: "Mariana Santos",
        areaInteresse: "Front-end",
        habilidades: ["HTML", "CSS", "JavaScript", "React"],
        experiencia: 1
    }
];

const vagas = [
    {
        empresa: "Tech Solutions",
        cargo: "Desenvolvedor Front-end Júnior",
        requisitos: ["HTML", "CSS", "JavaScript"]
    },
    {
        empresa: "CodeLab",
        cargo: "Desenvolvedor Front-end Júnior",
        requisitos: ["HTML", "CSS", "JavaScript", "Git"]
    },
    {
        empresa: "WebStart",
        cargo: "Desenvolvedor Front-end Júnior",
        requisitos: ["HTML", "CSS", "JavaScript", "React"]
    }
];

function calcularCompatibilidade(habilidades, requisitos) {
    let requisitosCompativeis = 0;

    requisitos.forEach(requisito => {
        if (habilidades.includes(requisito)) {
            requisitosCompativeis++;
        }
    });

    return requisitosCompativeis;
}

function calcularPercentualCompatibilidade(requisitosCompativeis, totalRequisitos) {
    return requisitosCompativeis / totalRequisitos * 100;
}

function classificarCompatibilidade(percentual) {
    if (percentual >= 80) {
        return "Alta compatibilidade";
    } else if (percentual >= 50) {
        return "Média compatibilidade";
    } else {
        return "Baixa compatibilidade";
    }
}

candidatos.forEach(candidato => {

    vagas.forEach(vaga => {

        const requisitosCompativeis = calcularCompatibilidade(
            candidato.habilidades,
            vaga.requisitos
        );

        const percentual = calcularPercentualCompatibilidade(
            requisitosCompativeis,
            vaga.requisitos.length
        );

        const classificacao = classificarCompatibilidade(percentual);

        const habilidadesFaltantes = vaga.requisitos.filter(
            requisito => !candidato.habilidades.includes(requisito)
        );

        console.log(candidato.nome);
        console.log(vaga.cargo);
        console.log(percentual);
        console.log(classificacao);
        console.log(habilidadesFaltantes);
    });
});

