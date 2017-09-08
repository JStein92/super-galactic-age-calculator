const moment = require('moment');
export class Calculator{

  getEarthAge(startDate){
    const startMoment = moment([startDate]);
    const diffInYears = moment().diff(startMoment,'years');

    return diffInYears;
  }

  getCurrentMoment(){
    const now = moment();
    return now;
  }

  getEarthAgeInSeconds(startDate){
    let startMoment = moment([startDate]);
    let diffInSeconds = moment().diff(startMoment, 'seconds');

    return diffInSeconds;
  }

  convertDaysToSeconds(days) {
    return 86400 * days;
  }

  findDifferenceBetweenDates(date1,date2) {
    const moment1 = moment([date1]);
    const moment2 = moment([date2]);

    let diffInDays =  moment2.diff(moment1, 'days');
    const secondsInADay = 86400;
    return diffInDays * secondsInADay;
  }

  findAgeInMercuryYears(startDate) {
    const diffInYears = this.getEarthAge(startDate);
    const mercuryRevolutionDays = 87.97;
    const yearDividend = mercuryRevolutionDays/365;
    return Math.round(diffInYears / yearDividend);
  }

  findAgeInVenusYears(startDate) {
    const diffInYears = this.getEarthAge(startDate);
    const venusRevolutionDays = 224.7;
    const yearDividend = venusRevolutionDays/365;
    return Math.round(diffInYears / yearDividend);
  }

  findAgeInMarsYears(startDate) {
    const diffInYears = this.getEarthAge(startDate);
    const marsRevolutionDays = 686.2;
    const yearDividend = marsRevolutionDays/365;
    return Math.round(diffInYears / yearDividend);
  }

  findAgeInJupiterYears(startDate) {
    const diffInYears = this.getEarthAge(startDate);
    const jupiterRevolutionDays = 4329.63;
    const yearDividend = jupiterRevolutionDays/365;
    return Math.round(diffInYears / yearDividend);
  }

  determineYearsLeft(age, sex, lifeStyle, smokeCigarettes, continent, planetYearMultiplier) {
    let lifeExpectancy = 71.5 * planetYearMultiplier; //world avg from wikipedia

    if (sex === "male") {
      lifeExpectancy *= 0.95;
    } else {
      lifeExpectancy *= 1.05;
    }

    if (lifeStyle === "inactive") {
      lifeExpectancy *= 0.85;
    } else if (lifeStyle === "moderate") {
      //do nothing
    } else if (lifeStyle === "active") {
      lifeExpectancy *= 1.15;
    }

    if (smokeCigarettes === "true") {
      lifeExpectancy *= 0.9;
    } else {
      lifeExpectancy *= 1.02;
    }

    if (continent === "North America") {
      lifeExpectancy *= 1.05;
    } else if (continent === "Europe") {
        lifeExpectancy *= 1.04;
    } else if (continent === "Oceania") {
        lifeExpectancy *= 1.03;
    } else if (continent === "Latin America") {
        lifeExpectancy *= 1.02;
    } else if (continent === "Asia") {
        lifeExpectancy *= 1.01;
    } else if (continent === "Africa") {
        lifeExpectancy *= 0.88;
    }

    return Math.round(lifeExpectancy - age);
  }
}
