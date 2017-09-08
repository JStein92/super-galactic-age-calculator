import {Calculator} from './../js/calculator.js';
const moment = require('moment');

$(document).ready(function(){

  $('#form').submit(function(e){
e.preventDefault();
    let calculator = new Calculator();

    let dateOfBirth = $('#date-of-birth').val();

    const sex = $('#sex').val();
    const lifestyle = $('#lifestyle').val();
    const smoke = $('#smoke').val();
    const location = $('#location').val();

    const mercuryAge = calculator.findAgeInMercuryYears(dateOfBirth);
    const mercuryYearsLeft = calculator.determineYearsLeft(mercuryAge, sex, lifestyle, smoke, location, 4.14);
    $('#mercuryAge').text("Your age: " + mercuryAge);
    $('#mercuryYearsLeft').text("Years left: " + mercuryYearsLeft);

    const earthAge = calculator.getEarthAge(dateOfBirth);
    const earthYearsLeft = calculator.determineYearsLeft(earthAge, sex, lifestyle, smoke, location, 1);
    $('#earthAge').text("Your age: " + earthAge);
    $('#earthYearsLeft').text("Years left: " + earthYearsLeft);

    const venusAge = calculator.findAgeInVenusYears(dateOfBirth);
    const venusYearsLeft = calculator.determineYearsLeft(venusAge, sex, lifestyle, smoke, location, 1.62);
    $('#venusAge').text("Your age: " + venusAge);
    $('#venusYearsLeft').text("Years left: " + venusYearsLeft);

    const marsAge = calculator.findAgeInMarsYears(dateOfBirth);
    const marsYearsLeft = calculator.determineYearsLeft(marsAge, sex, lifestyle, smoke, location,0.53);
    $('#marsAge').text("Your age: " + marsAge);
    $('#marsYearsLeft').text("Years left: " + marsYearsLeft);

    const jupiterAge = calculator.findAgeInJupiterYears(dateOfBirth);
    const jupiterYearsLeft = calculator.determineYearsLeft(jupiterAge, sex, lifestyle, smoke, location, 0.084);
    $('#jupiterAge').text("Your age: " + jupiterAge);
    $('#jupiterYearsLeft').text("Years left: " + jupiterYearsLeft);

    alert(dateOfBirth);

    $('#age-in-seconds').text(calculator.getEarthAgeInSeconds(dateOfBirth));

    alert(calculator.getEarthAgeInSeconds(dateOfBirth));
    $('#result').show();
  });
});
