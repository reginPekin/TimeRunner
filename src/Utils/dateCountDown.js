export const dateCountDown = (date) => {
  const sec = Math.floor(date/1000)
  const min = Math.floor(sec/60)
  const hour = Math.floor(min/60)

  return(
    hour + ":" + (min - hour * 60) + ":" + (sec - min * 60)
  )
}