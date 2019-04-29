export const dateCountDown = (date) => {
  const sec = Math.floor(date/1000)
  const min = Math.floor(sec/60)
  const hour = Math.floor(min/60)
  let minScreen = min - hour * 60
  let secScreen = sec - min * 60

  if (minScreen < 10) minScreen = "0" + minScreen.toString();
  if (secScreen < 10) secScreen = "0" + secScreen.toString();

  if (hour < 0) return ("00:00:00")
  else return (hour + ":" + minScreen + ":" + secScreen)

 
}