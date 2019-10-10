let MyDate=function (day,month,year) {
    this.day=day;
    this.month=month;
    this.year=year;

    this.getDay = function () {
        return this.day;
    }
    this.getMonth = function () {
        return this.month;
    }
    this.getYear = function () {
        return this.year;
    }
    this.setDay = function (day) {
        this.day=day;
        return this.day
    }
    this.setMonth = function (month) {
        this.month=month;
        return this.month
    }
    this.setYear = function (year) {
        this.year= year;
        return this.year
    }
    this.toString = function (day, month, year) {
         date.setDay(10);
        date.setMonth(10);
        date.setYear(2019);
        alert(day + "/" + month + "/" + year);
    }
};
var date=new MyDate(9,9,999);
let day=date.getDay();
let month=date.getMonth();
let year=date.getYear();
alert(day + "/" + month + "/" + year);
date.toString(10,10,1212)