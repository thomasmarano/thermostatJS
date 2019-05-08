function Thermostat() {
    this.temperature = 20;
    this.MIN_TEMP = 10;
    this.MAX_TEMP = 32;
    this.PS_MAX_TEMP = 25;
    this.powerSaving = true;
}

Thermostat.prototype.getCurrentTemperature = function(){
    return this.temperature;
};

Thermostat.prototype.tempUp = function(){
    if (this.isMaxTemp()){
        return;
    }
    this.temperature +=  1;
};

Thermostat.prototype.tempDown = function(){
    if (this.isMinTemp()) {
        return;
    }
    this.temperature -= 1;
};

Thermostat.prototype.isMinTemp = function() {
    return this.temperature === this.MIN_TEMP;
}

Thermostat.prototype.isMaxTemp = function() {
    if (this.isPowerSavingOn()) {
        return this.temperature === this.PS_MAX_TEMP;
    }
    return this.temperature === this.MAX_TEMP;
;}

Thermostat.prototype.resetTemp = function() {
    this.temperature = 20;
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

