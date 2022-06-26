// Controle do modal de adicionar registro
const modal = document.querySelector('.modal');

function openModal() {
  const displayModal = modal.style.display = "block";
  const bodyOverflow = document.body.style.overflow = "hidden";
  
}

function closeModal() {
  const eventModalClose = modal.style.display = 'none'
  const bodyOverflow = document.body.style.overflow = "auto";
}

const tagsInput = document.querySelector('#input-goals');
const tagify = new Tagify(tagsInput, {
  whitelist : ['Luminosidade', 'Temperatura', 'Ansiedade', 'Barulho'],
  dropdown : {
      classname     : "color-blue",
      enabled       : 0,              // show the dropdown immediately on focus
      maxItems      : 5,
      position      : "text",         // place the dropdown near the typed text
      closeOnSelect : false,          // keep the dropdown open after selecting a suggestion
      highlightFirst: true
  }
})
