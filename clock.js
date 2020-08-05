        // Clock & DAte Functions
    function Clock () {
            var hr = document.getElementById('hr');
            var min = document.getElementById('min');
            var sec = document.getElementById('sec');
            var noon = document.getElementById('noon');
            var Day = document.getElementById('day');

            var date = new Date();

            var h = date.getHours();
            var m = date.getMinutes();
            var s = date.getSeconds();
            var day = date.getDate() +" - " + (date.getMonth()+1) + " - " + date.getFullYear();

            if (h > 12){
                h = h - 12;
                noon.innerHTML = "(PM)";
                Day.innerHTML =  day;
            }
             else {
                noon.innerHTML = "(AM)";
                Day.innerHTML = day;
            }
            
            if (m < 10 ){
                m = "0" + m;
            }
            else if (s < 10){
                s = "0" + s;
            }
            else if (h < 10){
                h = "0" + h;
            }
            else if (h === 0){
                h = 12;
            }

            hr.innerHTML = h;
            min.innerHTML = m;
            sec.innerHTML = s;
        }
        setInterval(Clock, 1000);

        // Stop Watch Functions
        var interval = null;
        var button = "Stop";
            var min = 0;
            var sec = 0;
            var Msec = 0;  
            var minutes = document.getElementById('minutes');
            var seconds = document.getElementById('seconds');
            var milliSec = document.getElementById('milliSec');

        function stopWatch () {
            Msec++;

            if (Msec == 59){
                Msec = 0;
                sec++;
                if (sec == 59){
                    sec = 0;
                    min++;
                }

            }
            if (Msec < 10){
                milliSec.innerHTML = "0" + Msec;             
            }
            else{
                milliSec.innerHTML = Msec;
            }
            if (sec < 10){
                seconds.innerHTML ="0" + sec;   
            }
            else{
                seconds.innerHTML = sec;
            }
            if (min < 10){
                minutes.innerHTML ="0" + min;   
            }
            else{
                minutes.innerHTML = min;
            }
        }
        

        function stBtn () {
            if (button === "Stop"){
                interval = setInterval(stopWatch, 18);
                document.getElementById('btn').innerHTML = "Stop";
                button = "Start";
            }
            else {
                clearInterval(interval);
                document.getElementById('btn').innerHTML = "Start";
                button = "Stop";
            }
        }
        function reset () {
            clearInterval(interval);
            min = 0;
            sec = 0; 
            Msec = 0;
            minutes.innerHTML = "00";
            seconds.innerHTML = "00";
            milliSec.innerHTML = "00";
        }

         