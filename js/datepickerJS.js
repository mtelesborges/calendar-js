import { render } from './render.js'
import { ptBr as locale} from './locale/locale.js'
import { template } from './template.js'

window.onload = () => {

  document.body.insertAdjacentHTML('beforeend', template);

  let rd    = render();

  rd.setLocale(locale)
  rd.createdatepicker();

  document
    .getElementById('next')
    .addEventListener('click', () => rd.nextMonth());

  document
    .getElementById('previous')
    .addEventListener('click', () => rd.previousMonth());

  document
    .getElementById('year')
    .addEventListener('change', () => rd.updatedatepicker());

  document
    .getElementById('btn-month')
    .addEventListener('click', () => rd.showMonths());

  document
    .getElementById('btn-year')
    .addEventListener('click', () => rd.showYears());

}
