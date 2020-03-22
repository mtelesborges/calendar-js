import { en } from './locale/locale.js'

export function render(date){

  let _locale = en; 

  // cria o calendário
  function createCalendar(){

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

    setDays();
    setYear();
    setMonths();
  }
  
  // renderiza as descrições dos dias da semana
  function setDays(){
    
    _locale.days.forEach((element, index) => {
      document.getElementById(`wd${index + 1}`).innerHTML = element.short;
    });
  }

  // renderiza as descrições dos meses
  function setMonths(){
    
    _locale.months.forEach((element, index) => {
      const id = `m${index + 1}`;
      document.getElementById(id).innerHTML = element.extended;
      if((date.getMonth() + 1) == (index + 1))
        document.getElementById('months').value = index;
    });
  
  }

  // seta o ano corrente
  function setYear(){
    document.getElementById('year').value = date.getFullYear(); 
  }

  // configura a data para o próximo mês em relação ao mês exibido
  function nextMonth(){
    date.setMonth(date.getMonth() + 1);
    createCalendar();
  }

  // configura a data para o mês anterior em relação ao mês exibido
  function previousMonth(){
    date.setMonth(date.getMonth() - 1);
    createCalendar();
  }

  // atualiza o calendário em acordo com os dados de pesquisa
  function updateCalendar(){
    const month = document.getElementById('months').value;
    const year  = document.getElementById('year').value;
    date = new Date(year, month, 1);
    createCalendar();
  }

  function setLocale(locale){
    _locale = locale;
  }

  return {
    createCalendar,
    updateCalendar,
    nextMonth,
    previousMonth,
    setLocale
  }

}
