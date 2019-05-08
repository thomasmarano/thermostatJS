'use  strict'

describe('Thermostat', function() {

    var thermostat;

    beforeEach(function(){
        thermostat = new Thermostat();
    });

    describe('temperature', function(){

        it('starts at 20 degrees', function(){
            expect(thermostat.getCurrentTemperature()).toEqual(20);
        });

        it('adjusts upward by 1', function(){
            thermostat.increaseTemperature();
            expect(thermostat.getCurrentTemperature()).toEqual(21)
        });

    });

})