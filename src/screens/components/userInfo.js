const profileDiv = document.querySelector('nav>.profile');
const sideBar = document.querySelector('.closed');

profileDiv.addEventListener('click', toogleSideBar);

function toogleSideBar() {
  sideBar.classList.toggle('sidebar');
}


const photo = document.getElementById('imgPhoto');
const file = document.getElementById('flImage');
const smallProfilePicture = document.querySelector('.profile-picture');

photo.addEventListener('click', () => {
    file.click();
});

file.addEventListener('change', () => {

    if (file.files.length <= 0) {
        return;
    }

    let reader = new FileReader();

    reader.onload = () => {
        photo.src = reader.result;
        smallProfilePicture.src = reader.result;
    }

    reader.readAsDataURL(file.files[0]);
});

const editInfoUser_btn = document.getElementById('editInfo_btn');

// editInfoUser_btn.addEventListener('click', () => {
//   console.log('campos habilitados');

//   userForm_inputs.forEach(element => {
//     element.removeAttribute('disabled')
//   });

//   console.log(editInfoUser_btn.type)
// })
