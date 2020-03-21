import { months } from './months.js';

export function render(date){
  
  let month            = date.getMonth();
  let year             = date.getFullYear();
  let firstDay         = new Date(year, month, 1);
  let dayWeek          = firstDay.getDay();
  
  function getStringDate(){
    return `${months[date.getMonth()]} de ${date.getFullYear()}`
  }

  let element;

  for (let index = 0; index < 42; index++) {
      
    element = document.getElementById(`d${index + 1}`);
    
    const currentDate = new Date(year, month, -dayWeek + 1 + index);

    element.classList.remove('o');

    if(date.getMonth() != currentDate.getMonth())
      element.classList.add('o');
        
    element.innerHTML = (currentDate).getDate();
  }

  document.getElementById('now').innerHTML = getStringDate();

}