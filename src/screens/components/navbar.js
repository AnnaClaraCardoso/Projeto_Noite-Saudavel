// DEFININDO ELEMENTOS DA NAVBAR...
const header = document.createElement('header');
const nav = document.createElement('nav');

const nav_ul = document.createElement('ul');
const liStatistics = document.createElement('li');
const liRecords = document.createElement('li');
// const liIndex = document.createElement('li');
const liContact = document.createElement('li');
// const liLogout = document.createElement('li');
const linkStatistics = document.createElement('a');
const linkRecords = document.createElement('a');
// const linkIndex = document.createElement('a');
const linkContact = document.createElement('a');
// const logOutBtn = document.createElement('button');


// Div miniatura do usuário logado
const profile = document.createElement('div');
const profilePicture = document.createElement('img');
profilePicture.setAttribute('class', 'profile-picture');
const userNickname = document.createElement('p');


// DEFININDO ELEMENTOS DA SIDEBAR COM INFORMAÇÕES DO USUÁRIO

const aside = document.createElement('aside');
aside.setAttribute('class', 'closed sidebar');


// form container da lista de informações
  /**
   * Este form de atualização dos dados somente será
   * habilitado quando o usuário selecionar a opção 
   * de edição.
   */
const form_profileInfo = document.createElement('form');
form_profileInfo.setAttribute('class', 'form-profileInfo');
form_profileInfo.setAttribute('method', 'POST');
form_profileInfo.setAttribute('action', '/src/php/Users/update.php')

const div_userName = document.createElement('div');
div_userName.setAttribute('class', 'div_userName');

// div com input da imagem de perfil

const div_profilePicture = document.createElement('div');
div_profilePicture.setAttribute('class', 'div_profilePicture');

const div_maxWidth = document.createElement('div');
div_maxWidth.setAttribute('class', 'max-width');

const div_imageContainer = document.createElement('div');
div_imageContainer.setAttribute('class', 'imageContainer');

const form_profilePicture = document.createElement('img');
form_profilePicture.setAttribute('id', 'imgPhoto');

const input_image = document.createElement('input');
input_image.type = 'file';
input_image.setAttribute('id', 'flImage');
input_image.setAttribute('name', 'flImage');
input_image.setAttribute('accept', 'image/*');


const userFullName = document.createElement('h2');
userFullName.setAttribute('class', 'user-fullName');

const button_logOut = document.createElement('button');
button_logOut.setAttribute('class', 'button-logOut');

const icon_logOut = document.createElement('i');
icon_logOut.setAttribute('class', 'fa-solid fa-right-from-bracket');

const div_inputGroups = document.createElement('div');
div_inputGroups.setAttribute('class', 'div_inputGroups')


const div_email = document.createElement('div');
div_email.setAttribute('class', 'input');

const span_email = document.createElement('span');
span_email.setAttribute('class', 'span_email')

const input_email = document.createElement('input');
input_email.setAttribute('class', 'input_email');


const div_password = document.createElement('div');
div_password.setAttribute('class', 'input');

const span_password = document.createElement('span');
span_password.setAttribute('class', 'span_password');

const input_password = document.createElement('input');
input_password.setAttribute('class', 'input_password');


const div_goalStatus = document.createElement('div');
div_goalStatus.setAttribute('class', 'input');

const span_goalStatus = document.createElement('span');
span_goalStatus.setAttribute('class', 'span_goal');
const input_goal = document.createElement('input');


const div_editBtn = document.createElement('div');
div_editBtn.setAttribute('class', 'div_editBtn');

const editInfo_btn = document.createElement('button');
editInfo_btn.setAttribute('type', 'button');

const icon_edit = document.createElement('i');
icon_edit.setAttribute('class', 'fa-solid fa-pen')



// MARCANDO ATRIBUTOS DOS ELEMENTOS...

/* Navbar */

// linkIndex.setAttribute('href', '/index.html');
linkRecords.setAttribute('href', '/src/screens/Records/index.html');
linkStatistics.setAttribute('href', '/src/screens/Statistics/index.html');
linkContact.setAttribute('href', '/src/screens/Contact/index.html');

nav.setAttribute('class', 'navbar');
profile.setAttribute('class', 'profile');
profilePicture.setAttribute('class', 'profile-picture');
userNickname.setAttribute('class', 'user-nickname');

userNickname.innerHTML = 'User';

// linkIndex.setAttribute('class', 'nav-link');
linkRecords.setAttribute('class', 'nav-link');
linkStatistics.setAttribute('class', 'nav-link');
linkContact.setAttribute('class', 'nav-link');
// linkIndex.innerHTML = 'Início';
linkRecords.innerHTML = 'Registros';
linkStatistics.innerHTML = 'Estatísticas';
linkContact.innerHTML = 'Contato';
// logOutBtn.innerHTML = 'Sair';


/* Sidebar */

userFullName.innerText = 'Anna Clara Cardoso Martins'.toUpperCase();
button_logOut.innerText = 'Sair';
editInfo_btn.innerText = 'Alterar dados';
editInfo_btn.setAttribute('id', 'editInfo_btn');

span_email.innerText = 'E-mail';
span_password.innerText = 'Senha';

// inserindo elementos filhos
div_profilePicture.appendChild(div_maxWidth)
div_profilePicture.appendChild(input_image);
div_maxWidth.appendChild(div_imageContainer);
div_imageContainer.appendChild(form_profilePicture)

div_userName.appendChild(userFullName)
div_userName.appendChild(button_logOut)
button_logOut.appendChild(icon_logOut);

div_email.appendChild(span_email);
div_email.appendChild(input_email)

div_password.appendChild(span_password);
div_password.appendChild(input_password);

div_goalStatus.appendChild(input_goal);
div_goalStatus.appendChild(span_goalStatus);

div_inputGroups.appendChild(div_email);
div_inputGroups.appendChild(div_password);
div_inputGroups.appendChild(div_goalStatus);

div_editBtn.appendChild(div_inputGroups);
div_editBtn.appendChild(editInfo_btn)
editInfo_btn.appendChild(icon_edit);

// inserindo campos no form
form_profileInfo.appendChild(div_profilePicture);
form_profileInfo.appendChild(div_userName);
form_profileInfo.appendChild(div_editBtn);


// INCLUINDO NAVBAR
header.appendChild(nav);
nav.appendChild(profile);
nav.appendChild(nav_ul);

profile.appendChild(profilePicture);
profile.appendChild(userNickname);

// ul.appendChild(liIndex);
nav_ul.appendChild(liRecords);
nav_ul.appendChild(liStatistics);
nav_ul.appendChild(liContact);
// ul.appendChild(liLogout);
// liIndex.appendChild(linkIndex);
liRecords.appendChild(linkRecords);
liStatistics.appendChild(linkStatistics);
liContact.appendChild(linkContact);
// liLogout.appendChild(logOutBtn); 

// INCLUINDO HEADER COM NAVBAR
const body = document.querySelector('body');
const main = document.querySelector('main')

body.prepend(header);

// INCLUINDO SIDEBAR
aside.appendChild(form_profileInfo);
header.parentNode.insertBefore(aside, header.nextSibling);
// Carregando campos bloqueados
const userForm_inputs = document.querySelectorAll('.form-profileInfo input');
userForm_inputs.forEach(element => {
  element.setAttribute('disabled', '');
});
