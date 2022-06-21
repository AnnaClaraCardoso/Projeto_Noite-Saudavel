const aside = document.createElement('aside');

const form_profileInfo = document.createElement('form');

const profilePicture = document.createElement('img');
const userFullName = document.createElement('h2');
const button_logOut = document.createElement('button');

const ul = document.createElement('ul');

const li_userEmail = document.createElement('li');
const input_email = document.createElement('input');

const li_Password = document.createElement('li');
const span_password = document.createElement('span');
const input_password = document.createElement('input');

const li_goalStatus = document.createElement('li');
const span_goalStatus = document.createElement('span');
const img_liGoalStatus = document.createElement('img');

const li_seeStatistics = document.createElement('li');
const link_seeStatistics = document.createElement('a');
const img_liSeeStatistics = document.createElement('img');

form_profileInfo.setAttribute('class', 'form-profileInfo');
profilePicture.setAttribute('class', 'profile-picture');
userFullName.setAttribute('class', 'user-fullName');
button_logOut.setAttribute('class', 'button-logOut');
ul.setAttribute('class', 'list-profileInfo');

form_profileInfo.appendChild(profilePicture);

ul.appendChild(li_userEmail);
ul.appendChild(li_Password);
ul.appendChild(li_goalStatus);
ul.appendChild(li_seeStatistics);

const listItems = document.querySelectorAll('.list-profileInfo>li');

for (const li of listItems) {
  li.setAttribute('class', 'list-item');
}

li_userEmail.appendChild(input_email);

li_Password.appendChild(span_password);
li_Password.appendChild(input_password);

li_goalStatus.appendChild(span_goalStatus);
li_goalStatus.appendChild(img_liGoalStatus);

li_seeStatistics.appendChild(link_seeStatistics);
li_seeStatistics.appendChild(img_liSeeStatistics);
link_seeStatistics.setAttribute('href', '/src/screens/Statistics/index.html');

span_password.setAttribute('class', 'list-item-span');
span_goalStatus.setAttribute('class', 'list-item-span');
link_seeStatistics.setAttribute('class', 'list-item-link');

aside.appendChild(form_profileInfo);

const body = document.querySelector('body');
body.prepend(aside);

// const span_userEmail = document.createElement('span');