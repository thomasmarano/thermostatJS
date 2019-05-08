function Thermostat() {
    this.temperature = 20;
    this.MIN_TEMP = 10;
    this.powerSaving = true;
}

Thermostat.prototype.getCurrentTemperature = function(){
    return this.temperature;
};

Thermostat.prototype.tempUp = function(){
    this.temperature +=  1;
};

Thermostat.prototype.tempDown = function(){
    if (this.isMinTemp()) {
        return;
    }
    this.temperature -= 1;
};

Thermostat.prototype.isMinTemp = function() {
    return (this.temperature === this.MIN_TEMP);
}

Thermostat.prototype.isPowerSavingOn = function(){
    return this.powerSaving
};

Thermostat.prototype.turnPowerSavingOff = function(){
  this.powerSaving = false
};

Thermostat.prototype.turnPowerSavingOn = function(){
    this.powerSaving = true
}

