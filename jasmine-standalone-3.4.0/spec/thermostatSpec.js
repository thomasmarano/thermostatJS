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
           expect(thermostat.getCurrentTemperature()).toEqual(19);
        });

        it('checks whether temperature is at min temp', function(){
            for (i = 0; i < 10; i++){
                thermostat.tempDown()
            }
            expect(thermostat.isMinTemp()).toBeTruthy();
        });

        it('checks whether temperature is not at min temp', function(){
            expect(thermostat.isMinTemp()).toBeFalsy();
        })

        it('cannot go below 10 degrees', function(){
           for (i = 0; i < 11; i++){
               thermostat.tempDown();
           }
           expect(thermostat.getCurrentTemperature()).toEqual(10)
        });

        it('checks whether temperature is at max temp', function(){
            expect(thermostat.isMaxTemp()).toBeFalsy();
        })

        it('cannot go above 32 degrees if power saving off', function(){
           thermostat.turnPowerSavingOff();
            for (i = 0; i < 13; i++) {
               thermostat.tempUp();
           }
           expect(thermostat.getCurrentTemperature()).toEqual(32)
        });

        it('cannot go above 25 degrees if power saving on', function(){
           for (i = 0; i < 7; i++) {
               thermostat.tempUp();
           }
           expect(thermostat.getCurrentTemperature()).toEqual(25)
        });
    });

    describe('power saving mode', function(){
        it('checks it starts on', function(){
           expect(thermostat.isPowerSavingOn()).toBe(true)
        });

        it('can be turned off', function(){
            thermostat.turnPowerSavingOff();
            expect(thermostat.isPowerSavingOn()).not.toBe(true);
        })

        it('can be turned on', function(){
            thermostat.turnPowerSavingOff();
            thermostat.turnPowerSavingOn();
            expect(thermostat.isPowerSavingOn()).toBe(true)
        })

    });

})