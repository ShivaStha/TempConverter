
    // Function to convert Celsius to Fahrenheit
    function celsiusToFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    // Function to convert Fahrenheit to Celsius
    function fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    // Function to convert Celsius to Kelvin
    function celsiusToKelvin(celsius) {
        return celsius + 273.15;
    }

    // Function to convert Kelvin to Celsius
    function kelvinToCelsius(kelvin) {
        return kelvin - 273.15;
    }

    // Function to convert Fahrenheit to Kelvin
    function fahrenheitToKelvin(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9 + 273.15;
    }

    // Function to convert Kelvin to Fahrenheit
    function kelvinToFahrenheit(kelvin) {
        return (kelvin - 273.15) * 9 / 5 + 32;
    }

    function calculate() {

        var from, to;
        let vl = 0;

        vl = document.getElementById("tmp").value;
        from = document.getElementById("from").value;
        to = document.getElementById("to").value;
        //console.log(from+" ok  "+to);
        if (from == "c" && to == "k") {

            vl = celsiusToKelvin(parseInt(vl));
            console.log("value is " + vl);
        } else if (from == 'k' && to == 'c') {
            vl = kelvinToCelsius(parseInt(vl));
            console.log("value is " + vl);
        } else if (from == 'c' && to == 'f') {
            vl = celsiusToFahrenheit(parseInt(vl));
            console.log("value is " + vl);
        } else if (from == 'f' && to == 'c') {
            vl = fahrenheitToCelsius(parseInt(vl));
            document.getElementById("rr").innerText = vl;
        } else if (from == 'f' && to == 'k') {
            vl = fahrenheitToKelvin(parseInt(vl));
        } else if (from = "k" && to == "f") {

            vl = kelvinToFahrenheit(parseInt(vl));
        } else {
            console.log('same unit ');
        }


        document.getElementById("rr").innerText = vl;
    }