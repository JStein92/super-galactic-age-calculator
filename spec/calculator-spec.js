import {Calculator} from './../js/calculator.js';

describe('Calculator', function(){

  let calculator;

  beforeEach(function(){
   calculator = new Calculator();
  });

  it('should convert years to seconds', function(){
    const secondsResult = calculator.convertYearsToSeconds(25);
    expect(secondsResult).toEqual(788940000);
  });

  it ('should determine the difference in seconds between two dates', function(){

    const secondsDiff = calculator.findDifferenceBetweenDates("1992-04-30", "2017-08-08");

    expect(secondsDiff).toEqual(788940000);
  });

});
