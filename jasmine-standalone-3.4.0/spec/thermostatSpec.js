'use  strict';

describe('Thermostat', function() {

    var thermostat;

    beforeEach(function(){
        thermostat = new Thermostat();
    });

    describe('temperature', function(){

        it('starts at 20 degrees', function(){
            expect(thermostat.getCurrentTemperature()).toEqual(20);
        });

        it('adjusts upward by 1 with up', function(){
            thermostat.tempUp();
            expect(thermostat.getCurrentTemperature()).toEqual(21)
        });

        it('adjusts downward by 1 with down', function(){
           thermostat.tempDown();
           expect(thermostat.getCurrentTemperature()).toEqual(19)
        });

        it('checks whether temperature is at min temp', function(){
            for (i = 0; i < 10; i++){
                thermostat.tempDown()
            }
            expect(thermostat.isMinTemp()).toBeTruthy()
        });

        it('checks whether temperature is not at min temp', function(){
            expect(thermostat.isMinTemp()).toBeFalsy()
        })

        it('cannot go below 10 degrees', function(){
           for (i = 0; i < 11; i++){
               thermostat.tempDown()
           }
           expect(thermostat.getCurrentTemperature()).toEqual(10)
        });


    });

})