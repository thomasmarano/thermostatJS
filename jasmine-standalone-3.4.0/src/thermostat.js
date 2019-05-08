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
    this.temperature -= 1;
    if (this.temperature < this.MIN_TEMP) {
        this.temperature = this.MIN_TEMP
    }
};

Thermostat.prototype.isMinTemp = function() {
    return (this.temperature === this.MIN_TEMP);
}