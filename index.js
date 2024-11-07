
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
        let vl = document.getElementById("tmp").value;
        //console.log("logging....."+isNaN(parseInt(vl)));
        if(!isNaN(parseInt(vl))){
            
            from = document.getElementById("from").value;
            to = document.getElementById("to").value;
            //console.log(from+" ok  "+to);
            if (from == "c" && to == "k") {
    
                vl = celsiusToKelvin(parseInt(vl));
                document.getElementById("ff").innerText = document.getElementById("tmp").value+" Celsius is ";
                document.getElementById("rr").innerText = vl+" Kelvin";
                //console.log("value is " + vl);
            } else if (from == 'k' && to == 'c') {
                vl = kelvinToCelsius(parseInt(vl));
                document.getElementById("ff").innerText = document.getElementById("tmp").value+" Kelvin is ";
                document.getElementById("rr").innerText = vl+" Celsius";
                //console.log("value is " + vl);
            } else if (from == 'c' && to == 'f') {
                vl = celsiusToFahrenheit(parseInt(vl));
                document.getElementById("ff").innerText = document.getElementById("tmp").value+" Celsius is ";
                document.getElementById("rr").innerText = vl+" Fahrenheit";
                //console.log("value is " + vl);
            } else if (from == 'f' && to == 'c') {
                vl = fahrenheitToCelsius(parseInt(vl));
                document.getElementById("ff").innerText = document.getElementById("tmp").value+" Fahrenheit is ";
                document.getElementById("rr").innerText = vl+" Celsius";
            } else if (from == 'f' && to == 'k') {
                vl = fahrenheitToKelvin(parseInt(vl));
                document.getElementById("ff").innerText = document.getElementById("tmp").value+" Fahrenheit is ";
                document.getElementById("rr").innerText = vl+" Kelvin";
            } else if (from == 'k' && to == 'f') {
                vl = kelvinToFahrenheit(parseInt(vl));
                document.getElementById("ff").innerText = document.getElementById("tmp").value+" Kelvin is ";
                document.getElementById("rr").innerText = vl+" Fahrenheit";
            } else {
                alert("your are choosing same unit.Please change it and try .")
                console.log('same unit '+from+" "+to);
            }
    
    
            //document.getElementById("ff").innerText = document.getElementById("tmp").value+" "+from+" is ";
            document.getElementById("wrn").innerText = "";
        }else{
            document.getElementById("wrn").innerText = "Please fill all fields!";
        }


        
    }