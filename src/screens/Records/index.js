const modal = document.querySelector('.modal');
let num;

function openModal() {
  const newModal = modal.style.display = "block";
}

function closeModal() {
  const eventModalClose = modal.style.display = 'none'
}

const tagsInput = document.querySelector('#input-sleepFactors');

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

function pickHourValues(hour) {
  const hours = Number(hour.split(':')[0]);
  const minutes = Number(hour.split(':')[1]);
  return hours + (minutes / 60);
}

function appendRegister() {
  const sleepAt = document.querySelector('#input-sleepAt').value;
  const wakeUpAt = document.querySelector('#input-wakeUpAt').value;
  const sleepFactors = [...tagify.value.map(factor => factor.value)];

  const sleepAtHourValue = pickHourValues(sleepAt);
  const wakeUpAtHourValue = pickHourValues(wakeUpAt);


  if (sleepAtHourValue > wakeUpAtHourValue) {
    sleepDuration = (wakeUpAtHourValue+12) - (sleepAtHourValue-12);
  } else {
    sleepDuration = wakeUpAtHourValue - sleepAtHourValue;
  }

  // console.log(sleepDuration)
  hours = sleepDuration.toString().split('.')[0]
  minutes = (((Number(sleepDuration.toString().split('.')[1])) * 60)/10);

  console.log(`${hours}:${minutes}`)

  registerHTML = `
    <li>
      <table class="table-ultima">
        <div class="button-h1">
          <h1 class="h1-d">Dia mês, ano</h1>
        </div>
        <tr class="cabeçalho-list">
          <td>Hora em que dormiu</td>
          <td>Hora que acordou</td>
          <td>Tempo de sono</td>
          <td>Fator influenciador</td>
        </tr>
        <tr class="dados">
          <td>${sleepAt}</td>
          <td>${wakeUpAt}</td>
          <td>${hours}:${minutes}</td>
          <td class="fator">Exemplo</td>
        </tr>
      </table>
    </li>
  `;	

  console.log(sleepAt)
  console.log(wakeUpAt)
  console.log(sleepFactors)
}
