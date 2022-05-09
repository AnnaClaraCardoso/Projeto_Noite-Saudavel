const modal = document.querySelector('.modal');

function openModal() {
  const newModal = modal.style.display = "block";
}

function closeModal() {
  const eventModalClose = modal.style.display = 'none'
}


let tags = []

function addTag(e) {
  let code = (e.keyCode ? e.keyCode : e.which);
  if (code != 13) {
    return;
  }
  
  let tag = e.target.value.trim();
  if(tag.length < 1 || tags.includes(tag)) {
    e.target.value = ''
    return
  }

  let index = tags.push(tag);

  let tagItem = document.createElement('div');
  tagItem.classList.add('tag');
  tagItem.innerHTML = `
    <span class="delete-btn" onclick="deleteTag(this, ${tag})">
      &times
    </span>
    span class="tag-name">${tag}</span>
  `;

  document.querySelector('.influenciadores .tag-list').appendChild(tagItem);
  e.target.value = ''
}

document.querySelector('.influenciadores .input div input').addEventListener('keyup', addTag);