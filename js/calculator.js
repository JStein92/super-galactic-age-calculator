const moment = require('moment');
export class Calculator{

  convertYearsToSeconds(years){
    return 31557600 * years;
  }

  findDifferenceBetweenDates(date1,date2) {
    const moment1 = moment([date1]);
    const moment2 = moment([date2]);

    const diffInYears =  moment2.diff(moment1, 'years')
    const secondsInAYear = 31557600;
    return diffInYears * secondsInAYear;
  }
}
