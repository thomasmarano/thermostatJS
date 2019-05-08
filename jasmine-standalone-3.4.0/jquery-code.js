$( document ).ready(function() {
    var thermostat = new Thermostat();
    $( "#temperature" ).text(thermostat.getCurrentTemperature());

    $("#temperature-up").click(function(){
        thermostat.tempUp();
        $( "#temperature" ).text(thermostat.getCurrentTemperature());
    })

    $("#temperature-down").click(function(){
        thermostat.tempDown();
        $('#temperature').text(thermostat.getCurrentTemperature());
    })

    $('#temperature-reset').click(function(){
        thermostat.resetTemp();
        $('#temperature').text(thermostat.getCurrentTemperature())
    })

    $('#power-on').click(function(){
        thermostat.turnPowerSavingOn()
        $('#power-status').text('ON')
        thermostat.getCurrentTemperature()
    })

    $('#power-off').click(function(){
        thermostat.turnPowerSavingOff()
        $('#document').text('OFF')
        thermostat.getCurrentTemperature()
    })

});