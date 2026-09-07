class Pessoa {
    constructor(nome, experiencia) {
        this.nome = nome;
        this.experiencia = experiencia;
    }
}

class Candidato extends Pessoa {
    constructor(nome, experiencia, areaInteresse, habilidades) {
        super(nome, experiencia);
        this.areaInteresse = areaInteresse;
        this.habilidades = habilidades;
    }

    possuiHabilidade(habilidade) {
        return this.habilidades.includes(habilidade);
    }
}


const candidatos = [
    new Candidato(
        "Natália de Souza Cunha",
        0,
        "Front-end",
        ["HTML", "CSS", "JavaScript"]
    ),

    new Candidato(
        "Ana Beatriz Silva",
        1,
        "Front-end",
        ["HTML", "CSS", "JavaScript"]
    ),

    new Candidato(
        "Lucas Oliveira",
        2,
        "Front-end",
        ["HTML", "CSS", "JavaScript", "Git"]
    ),

    new Candidato(
        "Mariana Santos",
        1,
        "Front-end",
        ["HTML", "CSS", "JavaScript", "React"]
    )
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


function calcularCompatibilidade(candidato, requisitos) {
    let requisitosCompativeis = 0;

    requisitos.forEach(requisito => {
        if (candidato.possuiHabilidade(requisito)) {
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


const analises = [];

candidatos.forEach(candidato => {

    const resultados = [];

    vagas.forEach(vaga => {

        const requisitosCompativeis = calcularCompatibilidade(
            candidato,
            vaga.requisitos
        );

        const percentual = calcularPercentualCompatibilidade(
            requisitosCompativeis,
            vaga.requisitos.length
        );

        const classificacao = classificarCompatibilidade(percentual);

        const habilidadesFaltantes = vaga.requisitos.filter(
            requisito => !candidato.possuiHabilidade(requisito)
        );

        resultados.push({
            vaga: vaga,
            percentual: percentual,
            classificacao: classificacao,
            habilidadesFaltantes: habilidadesFaltantes
        });
    });


    const melhorVaga = resultados.reduce((acumulador, elementoAtual) => {

        if (elementoAtual.percentual > acumulador.percentual) {
            return elementoAtual;
        }

        return acumulador;
    });


    const recomendacaoEstudo = resultados.map(resultado => {
        return resultado.habilidadesFaltantes;
    });


    analises.push({
        candidato: candidato,
        resultados: resultados,
        melhorVaga: melhorVaga,
        recomendacaoEstudo: recomendacaoEstudo
    });
});


console.dir(analises, { depth: null });

function analisarRequisitos(vaga) {
    return `${vaga.empresa} - ${vaga.cargo}: ${vaga.requisitos.length} requisitos`;
}

function processarVagas(vagas, callback) {
    vagas.forEach(vaga => {
        const resultado = callback(vaga);
        console.log(resultado);
    });
}

processarVagas(vagas, analisarRequisitos);