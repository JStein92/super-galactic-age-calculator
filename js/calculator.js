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
    const yearDividend = mercuryRevolutionDays/365;
    return Math.round(diffInYears / yearDividend);
  }

  findAgeInVenusYears(startDate) {
    const startMoment = moment([startDate]);
    const diffInYears = moment().diff(startMoment,'years');
    const venusRevolutionDays = 224.7;
    const yearDividend = venusRevolutionDays/365;
    return Math.round(diffInYears / yearDividend);
  }

  findAgeInMarsYears(startDate) {
    const startMoment = moment([startDate]);
    const diffInYears = moment().diff(startMoment,'years');
    const marsRevolutionDays = 686.2;
    const yearDividend = marsRevolutionDays/365;
    return Math.round(diffInYears / yearDividend);
  }

  findAgeInJupiterYears(startDate) {
    const startMoment = moment([startDate]);
    const diffInYears = moment().diff(startMoment,'years');
    const jupiterRevolutionDays = 4329.63;
    const yearDividend = jupiterRevolutionDays/365;
    return Math.round(diffInYears / yearDividend);
  }
}
