const moment = require('moment');
export class Calculator{

  convertYearsToSeconds(years){
    return 31557600 * years;
  }

  findDifferenceBetweenDates(date1,date2) {
    const moment1 = moment([date1]);
    const moment2 = moment([date2]);

    const diffInDays =  moment2.diff(moment1, 'days')
    const secondsInADay = 86400;
    return diffInDays * secondsInADay;
  }

  findAgeInMercuryYears(startDate) {
    const startMoment = moment([startDate]);
    const diffInYears = moment().diff(startMoment,'years');
    const mercuryRevolutionDays = 87.97;
    const yearDividend = 365/mercuryRevolutionDays;
    return Math.floor(diffInYears / yearDividend);
  }
}
