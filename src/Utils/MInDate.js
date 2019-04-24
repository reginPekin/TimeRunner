export const MinDate = () => {
    let minDate = ""
    let month = ""
    let day = ""

    if(new Date().getMonth() < 9) month = "0" + (new Date().getMonth()+1).toString()
    else month = (new Date().getMonth()+1).toString();

    if(new Date().getDate() < 10) day = "0" + (new Date().getDate()).toString()
    else day = (new Date().getDate()).toString();

    minDate = ((new Date().getFullYear()).toString() + "-" + month + "-" + day);

    return minDate;
  
}