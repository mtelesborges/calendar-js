export const template = `
<head>
  <link rel="stylesheet" href="../css/style.css">
</head>
<section id="datepickerJS" style="display:none">
  <div style="display: flex; align-items: center;">
    <div id="datepicker">
      <div class="title">
        <button class="btn-direction" id="previous">
          <img src="../svg/previous.svg" alt="<">
        </button>
        <div>
          <button id="btn-month">
            <div id="month"></div>
          </button>
          <button id="btn-year">
            <div id="year"></div>
          </button>
        </div>
        <button class="btn-direction" id="next">
          <img src="../svg/next.svg" alt=">">
        </button>
      </div>
      <hr>
      <div style="display:flex; align-items: center; flex-direction: column;">
        <div id="datepicker-days">
          <table>
            <thead>
              <tr class="week">
                <th scope="col" class="week-day" id="weekDay1"></th>
                <th scope="col" class="week-day" id="weekDay2"></th>
                <th scope="col" class="week-day" id="weekDay3"></th>
                <th scope="col" class="week-day" id="weekDay4"></th>
                <th scope="col" class="week-day" id="weekDay5"></th>
                <th scope="col" class="week-day" id="weekDay6"></th>
                <th scope="col" class="week-day" id="weekDay7"></th>
              </tr>
            </thead>
            <tbody>
              <tr class="week s1">
                <td class="day" id="day1" datepicker-day></td>
                <td class="day" id="day2" datepicker-day></td>
                <td class="day" id="day3" datepicker-day></td>
                <td class="day" id="day4" datepicker-day></td>
                <td class="day" id="day5" datepicker-day></td>
                <td class="day" id="day6" datepicker-day></td>
                <td class="day" id="day7" datepicker-day></td>
              </tr>
              <tr class="week s2">
                <td class="day" id="day8"  datepicker-day></td>
                <td class="day" id="day9"  datepicker-day></td>
                <td class="day" id="day10" datepicker-day></td>
                <td class="day" id="day11" datepicker-day></td>
                <td class="day" id="day12" datepicker-day></td>
                <td class="day" id="day13" datepicker-day></td>
                <td class="day" id="day14" datepicker-day></td>
              </tr>
              <tr class="week s3">
                <td class="day" id="day15" datepicker-day></td>
                <td class="day" id="day16" datepicker-day></td>
                <td class="day" id="day17" datepicker-day></td>
                <td class="day" id="day18" datepicker-day></td>
                <td class="day" id="day19" datepicker-day></td>
                <td class="day" id="day20" datepicker-day></td>
                <td class="day" id="day21" datepicker-day></td>
              </tr>
              <tr class="week s4">
                <td class="day" id="day22" datepicker-day></td>
                <td class="day" id="day23" datepicker-day></td>
                <td class="day" id="day24" datepicker-day></td>
                <td class="day" id="day25" datepicker-day></td>
                <td class="day" id="day26" datepicker-day></td>
                <td class="day" id="day27" datepicker-day></td>
                <td class="day" id="day28" datepicker-day></td>
              </tr>
              <tr class="week s5">
                <td class="day" id="day29" datepicker-day></td>
                <td class="day" id="day30" datepicker-day></td>
                <td class="day" id="day31" datepicker-day></td>
                <td class="day" id="day32" datepicker-day></td>
                <td class="day" id="day33" datepicker-day></td>
                <td class="day" id="day34" datepicker-day></td>
                <td class="day" id="day35" datepicker-day></td>
              </tr>
              <tr class="week s6">
                <td class="day" id="day36" datepicker-day></td>
                <td class="day" id="day37" datepicker-day></td>
                <td class="day" id="day38" datepicker-day></td>
                <td class="day" id="day39" datepicker-day></td>
                <td class="day" id="day40" datepicker-day></td>
                <td class="day" id="day41" datepicker-day></td>
                <td class="day" id="day42" datepicker-day></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="datepicker-months">
          <table>
            <tbody>
              <tr>
                <td><span class="month" id="month1" datepicker-month></span></td>
                <td><span class="month" id="month2" datepicker-month></span></td>
                <td><span class="month" id="month3" datepicker-month></span></td>
              </tr>
              <tr>
                <td><span class="month" id="month4" datepicker-month></span></td>
                <td><span class="month" id="month5" datepicker-month></span></td>
                <td><span class="month" id="month6" datepicker-month></span></td>
              </tr>
              <tr>
                <td><span class="month" id="month7" datepicker-month></span></td>
                <td><span class="month" id="month8" datepicker-month></span></td>
                <td><span class="month" id="month9" datepicker-month></span></td>
              </tr>
              <tr>
                <td><span class="month" id="month10" datepicker-month></span></td>
                <td><span class="month" id="month11" datepicker-month></span></td>
                <td><span class="month" id="month12" datepicker-month></span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="datepicker-years">
          <table>
            <tbody>
              <tr>
                <td><span class="year" id="year1" datepicker-year></span></td>
                <td><span class="year" id="year2" datepicker-year></span></td>
                <td><span class="year" id="year3" datepicker-year></span></td>
              </tr>
              <tr>
                <td><span class="year" id="year4" datepicker-year></span></td>
                <td><span class="year" id="year5" datepicker-year></span></td>
                <td><span class="year" id="year6" datepicker-year></span></td>
              </tr>
              <tr>
                <td><span class="year" id="year7" datepicker-year></span></td>
                <td><span class="year" id="year8" datepicker-year></span></td>
                <td><span class="year" id="year9" datepicker-year></span></td>
              </tr>
              <tr>
                <td><span class="year" id="year10" datepicker-year></span></td>
                <td><span class="year" id="year11" datepicker-year></span></td>
                <td><span class="year" id="year12" datepicker-year></span></td>
              </tr>
        </div>
      </div>
    </div>
  </div>
  <script src="./js/index.js" type="module"></script>
</section>
`;