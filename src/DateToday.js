class DateToday {

  constructor() {
    this.date = new Date();
  }

dateFormatter() {
  var date = this.date.getDate();
  var month = this.date.getMonth() + 1;
  var year = this.date.getFullYear();
  return (date + "/" + month + "/" + year);
}
  
}