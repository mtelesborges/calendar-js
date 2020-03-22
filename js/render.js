import { ptBr as locale} from './locales/locale.js'

export function render(date){
  
  let month            = date.getMonth();
  let year             = date.getFullYear();
  let firstDay         = new Date(year, month, 1);
  let dayWeek          = firstDay.getDay();

  let element;

  for (let index = 0; index < 42; index++) {
      
    element = document.getElementById(`d${index + 1}`);
    
    const currentDate = new Date(year, month, -dayWeek + 1 + index);

    element.classList.remove('o');
    element.classList.remove('today');

    if(date.getMonth() != currentDate.getMonth())
      element.classList.add('o');

    if(   currentDate.getFullYear() == (new Date()).getFullYear()
      &&  currentDate.getMonth()    == (new Date()).getMonth()
      &&  currentDate.getDate()     == (new Date()).getDate()){
        element.classList.add('today');
      }

    element.innerHTML = (currentDate).getDate();
  }
  

  for (let index = 0; index < 7; index++) {
    document.getElementById(`wd${index + 1}`).innerHTML = `${locale.days[index].short}`;  
  }

  document.getElementById('now').innerHTML = `${locale.months[date.getMonth()].short} ${date.getFullYear()}`;
  
}
