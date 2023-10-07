
 
// Array para armazenar os alunos cadastrados

let alunos = [];

// Função para cadastrar um aluno

function cadastrarAluno(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;

  const aluno = { nome, idade };
  alunos.push(aluno);

  exibirAlunos();
  limparFormulario();
}

// Função para exibir os alunos cadastrados
vc
function exibirAlunos() {
  const listaAlunos = document.getElementById("alunos-lista");
  listaAlunos.innerHTML = "";

  alunos.forEach(aluno => {
    const itemLista = document.createElement("li");
    itemLista.textContent = `• Nome: ${aluno.nome}  • Idade: ${aluno.idade}`;
    listaAlunos.appendChild(itemLista);
  });
}

// Função para limpar o formulário
function limparFormulario() {
  document.getElementById("form-aluno").reset();
}

// Event listener para o evento submit do formulário

document.getElementById("form-aluno").addEventListener("submit", cadastrarAluno);
 
