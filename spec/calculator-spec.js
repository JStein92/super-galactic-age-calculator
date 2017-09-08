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

});
