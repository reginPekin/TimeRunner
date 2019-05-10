export const myWidth = (startTime, finishTime, currentTime) => {
  let finish = new Date(finishTime).getTime();
  let start = new Date(startTime).getTime();
  let fullTime = finish - start;
  let distance = finish - currentTime;

  if (start < currentTime) {
    if (finish < currentTime) {return (0 + "%")}
    else {return ((100/(fullTime/distance)).toString() + "%")}
  };
  
  
}
