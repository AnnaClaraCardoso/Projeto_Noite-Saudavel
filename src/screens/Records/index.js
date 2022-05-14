// Controle do modal de adicionar registro
const modal = document.querySelector('.modal');
let num;

function openModal() {
  const newModal = modal.style.display = "block";
}

function closeModal() {
  const eventModalClose = modal.style.display = 'none'
}


// Instanciando campo de tags (influenciadores)
const tagsInput = document.querySelector('#input-sleepFactors');
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

// Função para pegar o valor decimal da hora
function pickHourValues(hour) {
  const hours = Number(hour.split(':')[0]);
  const minutes = Number(hour.split(':')[1]);
  return hours + (minutes / 60);
}

// Função para montar registros com os horários entrados no form
function appendRecord() {
  const sleepAt = document.querySelector('#input-sleepAt').value;
  const wakeUpAt = document.querySelector('#input-wakeUpAt').value;
  const sleepFactors = [...tagify.value.map(factor => factor.value)];
  // console.log(sleepAt)
  // console.log(wakeUpAt)

  const sleepAtHourValue = pickHourValues(sleepAt);
  const wakeUpAtHourValue = pickHourValues(wakeUpAt);

  if (sleepAtHourValue > wakeUpAtHourValue) {
    sleepDuration = (wakeUpAtHourValue+12) - (sleepAtHourValue-12);
  } else {
    sleepDuration = wakeUpAtHourValue - sleepAtHourValue;
  }
  // console.log(sleepDuration)

  hours = Math.abs(sleepDuration)
  minutes = (sleepDuration - Math.floor(sleepDuration))*60;
  // console.log(minutes)

  const date = new Date()
  let month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][date.getMonth()];
  
  recordHTML = `
    <table class="table-ultima">
      <!--
      <div class="button-h1">
        <h1 class="h1-d">${date.getDate()} de ${month}, ${date.getFullYear()}</h1>
      </div>
      -->
      <tr class="cabeçalho-list">
        <td>Hora em que dormiu</td>
        <td>Hora que acordou</td>
        <td>Tempo de sono</td>
        <td>Fator influenciador</td>
      </tr>
      <tr class="dados">
        <td>${sleepAt}</td>
        <td>${wakeUpAt}</td>
        <td>${Math.trunc(hours).toString()}h${Math.trunc(minutes).toString()}min</td>
        <td class="fator">
          <ul>
            ${sleepFactors.map(factor => `<li>${factor}</li>`).join('')}
          </ul>
        </td>
      </tr>
    </table>
  `;	

  document.querySelector('.last-record').insertAdjacentHTML('beforeend', recordHTML);
}
