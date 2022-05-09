const modal = document.querySelector('.modal');

function openModal() {
  const newModal = modal.style.display = "block";
}

function closeModal() {
  const eventModalClose = modal.style.display = 'none'
}

const tagsInput = document.querySelector('#tags-input');

// initialize Tagify on the above input node reference
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
