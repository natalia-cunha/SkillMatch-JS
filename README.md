# SkillMatch-JS

Sistema desenvolvido em JavaScript para analisar a compatibilidade entre candidatos e vagas de emprego.

## 📌 Sobre o projeto

O SkillMatch-JS simula um sistema de recrutamento que compara as habilidades dos candidatos com os requisitos das vagas disponíveis.

Para cada candidato, o sistema:

* calcula o percentual de compatibilidade com cada vaga;
* classifica a compatibilidade;
* identifica as habilidades que estão faltando;
* encontra a vaga com maior compatibilidade;
* recomenda uma habilidade para estudo.

O projeto foi desenvolvido para praticar conceitos de JavaScript por meio de uma situação próxima de um sistema real de análise de vagas.

## 🎯 Objetivo

O objetivo do projeto é analisar o perfil profissional dos candidatos e identificar quais vagas possuem maior compatibilidade com suas habilidades.

Além disso, o sistema indica uma habilidade que pode ser priorizada nos estudos para aumentar as possibilidades de compatibilidade com as vagas.

## ⚙️ Como executar

### 1. Pré-requisito

É necessário ter o **Node.js** instalado no computador.

### 2. Clonar o projeto

No terminal, execute:

```bash
git clone https://github.com/natalia-cunha/SkillMatch-JS.git
```

### 3. Entrar na pasta do projeto

```bash
cd SkillMatch-JS
```

### 4. Executar o sistema

```bash
node skillmatch.js
```

Após a execução, o sistema apresenta no terminal as vagas recebidas, as análises dos candidatos e as informações de processamento das vagas.

## 📊 Regra de cálculo da compatibilidade

Para calcular a compatibilidade, o sistema verifica quantos requisitos da vaga o candidato possui.

A fórmula utilizada é:

```text
Percentual de compatibilidade =
requisitos compatíveis / total de requisitos × 100
```

Por exemplo, se uma vaga possui 4 requisitos e o candidato possui 3 deles:

```text
3 / 4 × 100 = 75%
```

A classificação utilizada é:

* **80% ou mais:** Alta compatibilidade
* **50% a 79%:** Média compatibilidade
* **Abaixo de 50%:** Baixa compatibilidade

Escolhi essa regra porque ela é simples de entender e permite comparar candidatos e vagas de acordo com a proporção de requisitos que já são atendidos.

## 📚 Critério para recomendação de estudo

Para definir o que o candidato deve estudar, o sistema verifica as habilidades que estão faltando em cada vaga analisada.

A habilidade que aparece como faltante no maior número de vagas é considerada a **prioridade de estudo**.

Por exemplo:

```text
Vaga 1 → falta React
Vaga 2 → falta React
Vaga 3 → falta Git
```

Nesse caso, a recomendação será:

```text
React
```

porque essa habilidade aparece como requisito faltante em duas vagas.

Em caso de empate, o sistema considera a primeira habilidade encontrada.

Escolhi esse critério porque estudar uma habilidade que aparece em várias vagas pode aumentar a quantidade de oportunidades para as quais o candidato possui compatibilidade.

## 🧠 Conceitos do Módulo 01 aplicados

### Arrays

Arrays foram utilizados para armazenar candidatos, vagas, habilidades e requisitos.

Exemplo:

```javascript
const habilidades = ["HTML", "CSS", "JavaScript"];
```

### Objetos

Objetos são utilizados para representar as vagas e suas informações:

```javascript
const vaga = {
    empresa: "Tech Solutions",
    cargo: "Desenvolvedor Front-end Júnior",
    requisitos: ["HTML", "CSS", "JavaScript"]
};
```

### Strings, números e booleanos

O projeto utiliza:

* **Strings** para nomes, empresas, cargos e habilidades;
* **Números** para experiência, quantidade de requisitos e percentuais;
* **Booleanos** nas verificações de habilidades, por meio de `includes()` e do operador `!`.

### Let e const

`const` é utilizado para valores que não precisam ser reatribuídos, enquanto `let` é utilizado quando o valor pode ser alterado.

Exemplo:

```javascript
const candidatos = [];
let requisitosCompativeis = 0;
```

### Operadores lógicos e matemáticos

Foram utilizados operadores matemáticos no cálculo do percentual:

```javascript
requisitosCompativeis / totalRequisitos * 100
```

Também foram utilizados operadores de comparação e negação:

```javascript
percentual >= 80
!candidato.possuiHabilidade(requisito)
```

### Condicionais

Foram utilizadas estruturas `if/else` para classificar a compatibilidade:

```javascript
if (percentual >= 80) {
    return "Alta compatibilidade";
} else if (percentual >= 50) {
    return "Média compatibilidade";
} else {
    return "Baixa compatibilidade";
}
```

### Laços de repetição

Foi utilizado `for` para processar as vagas:

```javascript
for (let i = 0; i < vagas.length; i++) {
    const resultado = callback(vagas[i]);
}
```

Também foram utilizados `forEach()` para percorrer candidatos, vagas e habilidades.

### Funções

O projeto foi dividido em funções com responsabilidades diferentes, como:

* `calcularCompatibilidade()`;
* `calcularPercentualCompatibilidade()`;
* `classificarCompatibilidade()`;
* `recomendarEstudo()`;
* `analisarCandidatos()`;
* `analisarRequisitos()`;
* `processarVagas()`;
* `criarContador()`;
* `carregarVagas()`.

### Arrow functions

Arrow functions foram utilizadas principalmente nos métodos de array:

```javascript
requisitos.forEach(requisito => {
    // ...
});
```

### Métodos de array

Foram utilizados diferentes métodos de array:

* `forEach()` → percorre candidatos, vagas e habilidades;
* `filter()` → identifica as habilidades que o candidato ainda não possui;
* `reduce()` → encontra a vaga com maior percentual de compatibilidade;
* `includes()` → verifica se uma habilidade está presente no candidato.

### Classes e objetos

A classe `Pessoa` representa características gerais, como `nome` e `experiencia`.

A classe `Candidato` representa um candidato e possui informações específicas como `areaInteresse` e `habilidades`.

```javascript
class Pessoa {
    constructor(nome, experiencia) {
        this.nome = nome;
        this.experiencia = experiencia;
    }
}
```

### Herança

A classe `Candidato` herda de `Pessoa` utilizando `extends` e `super()`:

```javascript
class Candidato extends Pessoa {
    constructor(nome, experiencia, areaInteresse, habilidades) {
        super(nome, experiencia);
        this.areaInteresse = areaInteresse;
        this.habilidades = habilidades;
    }
}
```

A herança foi utilizada para evitar repetição dos atributos gerais de uma pessoa.

### `this`

O `this` é utilizado para acessar e armazenar os atributos do objeto atual.

Também é utilizado no método `possuiHabilidade()`:

```javascript
possuiHabilidade(habilidade) {
    return this.habilidades.includes(habilidade);
}
```

### Callback

A função `analisarRequisitos` é passada como parâmetro para `processarVagas`:

```javascript
processarVagas(vagasRecebidas, analisarRequisitos);
```

Dentro de `processarVagas`, a função recebida é executada para cada vaga.

### Closure

A função `criarContador()` utiliza uma closure para manter o valor da variável `contador` entre as chamadas:

```javascript
function criarContador() {
    let contador = 0;

    return function() {
        contador++;
        return contador;
    };
}
```

### Promise

A função `carregarVagas()` utiliza uma `Promise` para simular o carregamento das vagas a partir de um servidor:

```javascript
function carregarVagas() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (vagas.length > 0) {
                resolve(vagas);
            } else {
                reject("Não foi possível carregar as vagas.");
            }
        }, 2000);
    });
}
```

O `setTimeout()` simula o tempo de resposta do servidor.

O `resolve()` representa o sucesso no carregamento das vagas e o `reject()` representa uma situação de erro.

O erro é tratado utilizando `try/catch`.

### Async/Await

A função `iniciarSistema()` utiliza `async/await` para aguardar o carregamento das vagas:

```javascript
async function iniciarSistema() {
    try {
        const vagasRecebidas = await carregarVagas();

        // processamento das vagas

    } catch (erro) {
        console.log(erro);
    }
}
```

## 🌐 Arquitetura cliente-servidor

A arquitetura cliente-servidor é um modelo em que um **cliente solicita informações ou serviços** e um **servidor processa a solicitação e retorna uma resposta**.

Neste projeto, essa arquitetura é **simulada**, pois não existe um servidor real ou uma API externa.

A função:

```javascript
carregarVagas()
```

representa a solicitação das vagas.

A `Promise` e o `setTimeout()` simulam o tempo necessário para obter uma resposta do servidor:

```javascript
setTimeout(() => {
    resolve(vagas);
}, 2000);
```

Quando a Promise é resolvida, as vagas são recebidas pelo sistema e o processamento é iniciado.

O fluxo pode ser representado assim:

```text
Cliente
   ↓
Solicita vagas
   ↓
"Servidor" (simulado)
   ↓
Retorna vagas
   ↓
Sistema recebe as vagas
   ↓
Analisa candidatos e vagas
```

## 📊 Exemplo de funcionamento

Para um candidato que possui:

```text
HTML
CSS
JavaScript
```

e uma vaga que exige:

```text
HTML
CSS
JavaScript
Git
```

o sistema identifica:

```text
Compatibilidade: 75%

Classificação: Média compatibilidade

Habilidade faltante: Git
```

## 📁 Estrutura do projeto

```text
SkillMatch-JS/
│
├── skillmatch.js
└── README.md
```

## 🎥 Vídeo de apresentação

[Assistir ao vídeo de apresentação](https://drive.google.com/file/d/17Rh0us6L50barzXs2VHKs6I7i88CTkql/view?usp=sharing)

## 🚀 Status do projeto

Projeto desenvolvido para fins de estudo e prática dos conceitos de JavaScript apresentados no Módulo 01.
