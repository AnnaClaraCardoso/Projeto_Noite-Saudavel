const header = document.createElement('header');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const liStatistics = document.createElement('li');
const liRecords = document.createElement('li');
const liIndex = document.createElement('li');
const liContact = document.createElement('li');
// const liLogout = document.createElement('li');
const linkStatistics = document.createElement('a');
const linkRecords = document.createElement('a');
const linkIndex = document.createElement('a');
const linkContact = document.createElement('a');
// const logOutBtn = document.createElement('button');

linkIndex.setAttribute('href', '/index.html');
linkRecords.setAttribute('href', '/src/screens/Records/index.html');
linkStatistics.setAttribute('href', '/src/screens/Statistics/index.html');
linkContact.setAttribute('href', '/src/screens/contact/index.html');

nav.setAttribute('class', 'navbar');
linkIndex.setAttribute('class', 'nav-link');
linkRecords.setAttribute('class', 'nav-link');
linkStatistics.setAttribute('class', 'nav-link');
linkContact.setAttribute('class', 'nav-link');
linkIndex.innerHTML = 'Início';
linkRecords.innerHTML = 'Registros';
linkStatistics.innerHTML = 'Estatísticas';
linkContact.innerHTML = 'Contato';
// logOutBtn.innerHTML = 'Sair';

header.appendChild(nav);
nav.appendChild(ul);
ul.appendChild(liIndex);
ul.appendChild(liRecords);
ul.appendChild(liStatistics);
ul.appendChild(liContact);
// ul.appendChild(liLogout);
liIndex.appendChild(linkIndex);
liRecords.appendChild(linkRecords);
liStatistics.appendChild(linkStatistics);
liContact.appendChild(linkContact);
// liLogout.appendChild(logOutBtn); 

const body = document.querySelector('body');

body.prepend(header);

