import { en } from './locale/locale.js'

export function render(date = (new Date())){

  let _locale = en; 
  let _showing = false;
  const _datepicker = document.getElementById("datepicker");
  const _datepickers = document.querySelectorAll('[datepicker]');
  let _datepickerId = undefined;
  
  // cria o calendário
  function createdatepicker(){
    setDaysOfWeek();
    setCurrentMonth();
    setCurrentYear();
    renderDatepickerDays();
    renderDatepickerMonths();
    renderDatepickerYears();
  }

  function renderDatepickerDays(){

    let month            = date.getMonth();
    let year             = date.getFullYear();
    let firstDay         = new Date(year, month, 1);
    let dayWeek          = firstDay.getDay();

    let element;

    for (let index = 0; index < 42; index++) {
        
      element = document.getElementById(`day${index + 1}`);
      
      const currentDate = new Date(year, month, -dayWeek + 1 + index);

      element.classList.remove('opacity');
      element.classList.remove('current');

      if(date.getMonth() != currentDate.getMonth())
        element.classList.add('opacity');

      if(   currentDate.getFullYear() == (new Date()).getFullYear()
        &&  currentDate.getMonth()    == (new Date()).getMonth()
        &&  currentDate.getDate()     == (new Date()).getDate()){
          element.classList.add('current');
        }
        
      element.setAttribute('datepicker-date', new Intl.DateTimeFormat(_locale.locale).format(new Date(currentDate)));

      element.innerHTML = (currentDate).getDate();
    }
  }
  
  function renderDatepickerMonths(){
    _locale.months.forEach((element, index) => {
      
      const m = document.getElementById(`month${index + 1}`)
      m.setAttribute('datepicker-month-id', index);
      m.innerHTML = element.extended;

      m.classList.remove('current');

      const selected = document
        .getElementById('month')
        .getAttribute('datepicker-month-id') || date.getMonth();      

      if(index == selected)
        m.classList.add('current');

      });
  }

  function renderDatepickerYears(){

    let year = date.getFullYear() - 5;

    for (let index = 0; index < 12; index++) {

      const y = document.getElementById(`year${index + 1}`)
      y.setAttribute('datepicker-year-id', year)

      y.classList.remove('current');

      const selected = document
        .getElementById('year')
        .getAttribute('datepicker-year-id') || date.getFullYear();      

      if(year == selected)
        y.classList.add('current');

      y.innerHTML = year++;
      
    }
  }

  // renderiza as descrições dos dias da semana
  function setDaysOfWeek(){
    _locale.days.forEach((element, index) => {
      document.getElementById(`weekDay${index + 1}`).innerHTML = element.short;
    });
  }

  function setCurrentMonth(){
    const [month] = _locale.months.filter((element, index) => index === date.getMonth() );
    const m = document.getElementById('month')
    m.innerHTML = month.extended;
  }

  // seta o ano corrente
  function setCurrentYear(){
    const y = document.getElementById('year')
    y.innerHTML = date.getFullYear(); 
    y.setAttribute('datepicker-year-id', date.getFullYear());
  }

  // configura a data para o próximo mês em relação ao mês exibido
  function nextMonth(){
    date.setMonth(date.getMonth() + 1);
    createdatepicker();
  }

  // configura a data para o mês anterior em relação ao mês exibido
  function previousMonth(){
    date.setMonth(date.getMonth() - 1);
    createdatepicker();
  }

  // atualiza o calendário
  function updatedatepicker(){

    const month = document
      .getElementById('month')
      .getAttribute('datepicker-month-id');
    
    const year = document
      .getElementById('year')
      .getAttribute('datepicker-year-id');

    date = new Date(year, month, 1);
    
    createdatepicker();
  
  }

  function setLocale(locale){
    _locale = locale;
  }

  // Posiciona o calendário com base nos valores informados
  function setPosition(arg = {left: 0, top: 0}){
    _datepicker.style.left = `${arg.left}px`;
    _datepicker.style.top = `${arg.top}px`;
  }

  // Mostra o calendário
  function show(){
    document.getElementById('datepickerJS').style.display = 'block';
    _datepicker.style.display = 'block';
    _showing = true;
  }

  // Esconde o calendário
  function hide(){
    _datepicker.style.display = 'none';
    _showing = false
  }

  // Alterna Esconder / Exibir o calendário
  function toggle(){
    _showing ? hide() : show();
  }

  // Escuta o clique nos dias do calendário
  function listenClickdatepickerDay(){

    const days = document.querySelectorAll('[datepicker-day]');

    days.forEach((element) => {
      element.addEventListener('click', (e) => {
        _datepickers.forEach((element) => {
          if(element.getAttribute('datepicker-id') === _datepickerId)
            element.value = e.target.getAttribute('datepicker-date');
        });

      })
    })
  }

  // Escuta o clique nos meses do calendário
  function listenClickdatepickerMonth(){
    
    // Captura todos os elementos com o atributo datepicker-month 
    const months = document.querySelectorAll('[datepicker-month]');
    
    months.forEach((element) => {

      element.addEventListener('click', (e) => {
        
        const m = document.getElementById('month')
        m.innerHTML = e.target.innerHTML;

        const attr = e.target.attributes
        
        for (const key in attr) {
          if(attr[key]['name'] == 'datepicker-month-id')
          m.setAttribute('datepicker-month-id', attr[key]['value']);
        }

        showDays();
        updatedatepicker();

      })
    })

  }

  function listenClickdatepickerYears(){

    const years = document.querySelectorAll('[datepicker-year]');

    years.forEach((element) => {

      element.addEventListener('click', (e) => {
        
        const y = document.getElementById('year')
        y.innerHTML = e.target.innerHTML;

        const attr = e.target.attributes
        
        for (const key in attr) {
          if(attr[key]['name'] == 'datepicker-year-id')
          y.setAttribute('datepicker-year-id', attr[key]['value']);
        }

        showMonths();
        updatedatepicker();

      })

    })

  }

  // Escuta o click nos inputs
  function listenClickDatepickers(){

    _datepickers.forEach((element, index) => {
      
      element.setAttribute('datepicker-id', `dpd${index}`);

      element.addEventListener('click', (e) => { 

        const x = e.target.offsetLeft - e.target.scrollLeft;
        const y = e.target.offsetTop - e.target.scrollTop + e.target.offsetHeight + 5;

        const currentId = element.getAttribute('datepicker-id');

        currentId === _datepickerId ? toggle() : show();

        _datepickerId = currentId;

        setPosition({left: x, top: y});

      })
    })
  }
  
  function showDays(){
    document.getElementById('datepicker-days').style.display = 'flex';
    document.getElementById('datepicker-months').style.display = 'none';
    document.getElementById('datepicker-years').style.display = 'none';
  }

  function showMonths(){
    document.getElementById('datepicker-days').style.display = 'none';
    document.getElementById('datepicker-months').style.display = 'flex';
    document.getElementById('datepicker-years').style.display = 'none';
  }

  function showYears(){
    document.getElementById('datepicker-days').style.display = 'none';
    document.getElementById('datepicker-months').style.display = 'none';
    document.getElementById('datepicker-years').style.display = 'flex';
  }

  listenClickDatepickers();
  listenClickdatepickerDay();
  listenClickdatepickerMonth();
  listenClickdatepickerYears();

  return {
    createdatepicker,
    updatedatepicker,
    nextMonth,
    previousMonth,
    setLocale,
    setPosition,
    show,
    hide,
    toggle,
    showMonths,
    showYears
  }

}
