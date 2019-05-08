function Thermostat() {
    this.temperature = 20;
    this.MIN_TEMP = 10
}

Thermostat.prototype.getCurrentTemperature = function(){
    return this.temperature;
};

Thermostat.prototype.tempUp = function(){
    this.temperature +=  1;
};

Thermostat.prototype.tempDown = function(){
    if (this.isMinTemp()) {
        return
    }
    this.temperature -= 1;
};

Thermostat.prototype.isMinTemp = function() {
    return (this.temperature === this.MIN_TEMP);
}