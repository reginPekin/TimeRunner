export const myWidth = (startTime, finishTime) => {
  let finish = new Date(finishTime).getTime();
  let start = new Date(startTime).getTime();
  let fullTime = finish - start;
  let currentTime = new Date().getTime();
  let distance = finish - currentTime;

  if (start < currentTime) {return ((100/(fullTime/distance)).toString() + "%")};
  
  
}
