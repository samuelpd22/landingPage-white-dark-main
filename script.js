// Selecionando elementos do menu
const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');

// Adicionando evento de clique para alternar a visibilidade do menu
menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
});

// Selecionando botões de modo
const btnModoNoturno = document.getElementById('modo-noturno');
const btnModoDia = document.getElementById('modo-dia');

// Recuperando modo salvo do armazenamento local
let modoNoturnoAtivado = localStorage.getItem('modoNoturno') === 'true';

// Função para alternar entre os modos
function alternarModo() {
    modoNoturnoAtivado = !modoNoturnoAtivado;
    if (modoNoturnoAtivado) {
        document.body.classList.add('dark-mode');
        btnModoNoturno.style.display = 'none';
        btnModoDia.style.display = 'block';
        // Salvando o modo no armazenamento local
        localStorage.setItem('modoNoturno', true);
    } else {
        document.body.classList.remove('dark-mode');
        btnModoNoturno.style.display = 'block';
        btnModoDia.style.display = 'none';
        // Salvando o modo no armazenamento local
        localStorage.setItem('modoNoturno', false);
    }
}

// Adicionando eventos de clique aos botões de modo
btnModoNoturno.addEventListener('click', alternarModo);
btnModoDia.addEventListener('click', alternarModo);

// Aplicando o modo armazenado ao carregar a página
if (modoNoturnoAtivado) {
    document.body.classList.add('dark-mode');
    btnModoNoturno.style.display = 'none';
    btnModoDia.style.display = 'block';
} else {
    document.body.classList.remove('dark-mode');
    btnModoNoturno.style.display = 'block';
    btnModoDia.style.display = 'none';
}





 // Inicializa o mapa
 var map = L.map('map').setView([-19.5256748, -42.6265492], 15);

 // Adiciona camada de azulejos do OpenStreetMap
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 }).addTo(map);

 // Adiciona um marcador para indicar a localização do estabelecimento
 L.marker([-19.5256748, -42.6265492]).addTo(map)
     .bindPopup('Localização do Estabelecimento')
     .openPopup();