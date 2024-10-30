// Obter os modais
var modalAlunos = document.getElementById("modal-alunos");
var modalProfessor = document.getElementById("modal-professor");

// Obter os botões que abrem os modais
var btnAlunos = document.querySelector(".rodape button:first-child");
var btnProfessor = document.querySelector(".rodape button:nth-child(2)");

// Obter os elementos <span> que fecham os modais
var spanAlunos = document.getElementsByClassName("close-alunos")[0];
var spanProfessor = document.getElementsByClassName("close-professor")[0];

// Obter as setas
var setaAlunos = document.querySelector(".seta");
var setaProfessor = document.querySelector(".seta-prof");

// Quando o usuário clicar no botão, abre o modal e gira a seta
btnAlunos.onclick = function() {
    modalAlunos.style.display = "block";
    setaAlunos.classList.add("vertical");
}

btnProfessor.onclick = function() {
    modalProfessor.style.display = "block";
    setaProfessor.classList.add("vertical");
}

// Quando o usuário clicar em <span> (x), fecha o modal e gira a seta de volta
spanAlunos.onclick = function() {
    modalAlunos.style.display = "none";
    setaAlunos.classList.remove("vertical");
}

spanProfessor.onclick = function() {
    modalProfessor.style.display = "none";
    setaProfessor.classList.remove("vertical");
}

// Quando o usuário clicar fora do modal, fecha o modal e gira a seta de volta
window.onclick = function(event) {
    if (event.target == modalAlunos) {
        modalAlunos.style.display = "none";
        setaAlunos.classList.remove("vertical");
    }
    if (event.target == modalProfessor) {
        modalProfessor.style.display = "none";
        setaProfessor.classList.remove("vertical");
    }
}
