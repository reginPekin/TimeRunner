export const dateCountDown = (start, finish, current) => {
  const date = finish - current
  const sec = Math.floor(date/1000)
  const min = Math.floor(sec/60)
  const hour = Math.floor(min/60)
  let day = Math.floor(hour/24)
  let hourScreen = hour - day * 24
  let minScreen = min - hour * 60
  let secScreen = sec - min * 60

  if (minScreen < 10) minScreen = "0" + minScreen.toString();
  if (secScreen < 10) secScreen = "0" + secScreen.toString();
  if (hourScreen < 10) hourScreen = "0" + hourScreen.toString();
  if (day < 2 && day > 0) day = day.toString() + " day";
    else day = day.toString() + " days";
  
  
  if (start > (new Date().getTime())) return "waiting for start";
  else if (hour < 0) return ("00:00:00");
  else return (day + "\n" + hourScreen + ":" + minScreen + ":" + secScreen)
}