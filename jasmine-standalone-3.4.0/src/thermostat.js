function Thermostat() {
    this.temperature = 20;
    this.minTemp = 10
}

Thermostat.prototype.getCurrentTemperature = function(){
    return this.temperature;
};

Thermostat.prototype.tempUp = function(){
    this.temperature +=  1;
};

Thermostat.prototype.tempDown = function(){
    this.temperature -= 1;
    if (this.temperature < this.minTemp) {
        this.temperature = this.minTemp
    }
};