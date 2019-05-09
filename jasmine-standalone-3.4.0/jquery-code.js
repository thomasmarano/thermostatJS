$( document ).ready(function() {
    var thermostat = new Thermostat();
    updateTemperature()
    // $.get('http://api.openweathermap.org/data/2.5/weather?id=1689973&units=metric&appid=cbbb1d97dfc74a68e65094280e01dfc0', function(data) {
    //     $('#current-temperature').text(data.main.temp)
    //     console.log(data)
    // })

    $('#london').click(function(){
        $.get('http://api.openweathermap.org/data/2.5/weather?id=2643743&units=metric&appid=cbbb1d97dfc74a68e65094280e01dfc0', function(data){
            $('#current-temperature').text(data.main.temp)
            $('#city-name').text(data.name)
        })
    })


    $('#san-francisco').click(function(){
        $.get('http://api.openweathermap.org/data/2.5/weather?id=1689973&units=metric&appid=cbbb1d97dfc74a68e65094280e01dfc0', function(data){
            $('#current-temperature').text(data.main.temp)
            $('#city-name').text(data.name)
        })
    })

    $('#nyc').click(function(){
        $.get('http://api.openweathermap.org/data/2.5/weather?id=5128638&units=metric&appid=cbbb1d97dfc74a68e65094280e01dfc0', function(data){
            $('#current-temperature').text(data.main.temp)
            $('#city-name').text(data.name)
        })
    })



    $("#temperature-up").click(function(){
        thermostat.tempUp();
        updateTemperature()
    })

    $("#temperature-down").click(function(){
        thermostat.tempDown();
        updateTemperature()
    })

    $('#temperature-reset').click(function(){
        thermostat.resetTemp();
        updateTemperature()
    })

    $('#power-on').click(function(){
        thermostat.turnPowerSavingOn()
        $('#power-status').text('ON')
        updateTemperature()
    })

    $('#power-off').click(function(){
        thermostat.turnPowerSavingOff()
        $('#power-status').text('OFF')
        updateTemperature()
    })

    function updateTemperature(){
        $("#temperature").text(thermostat.getCurrentTemperature());
        $("#temperature").attr('class', thermostat.getEnergyUsage())
    }

});