import { render } from './render.js'
import { ptBr } from './locale/locale.js'

let date  = new Date();
let rd    = render(date);

//rd.setLocale(ptBr);
rd.createCalendar();

document
  .getElementById('next')
  .addEventListener('click', () => rd.nextMonth());

document
  .getElementById('previous')
  .addEventListener('click', () => rd.previousMonth());

document
  .getElementById('months')
  .addEventListener('change', () => rd.updateCalendar());

  document
  .getElementById('year')
  .addEventListener('change', () => rd.updateCalendar());