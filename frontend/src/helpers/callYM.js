/* eslint-disable no-undef */
export default function callYM(goalName) {
  var PM_YM_COUNTER = 91622962;
  console.log("Triggered - ", goalName);
  var ee = setInterval(function () {
    if (typeof window.ym != "undefined") {
      ym(PM_YM_COUNTER, "reachGoal", goalName);
      clearInterval(ee);
    } else {
      console.log("Метрика не инициализирована");
    }
  }, 500);
}
