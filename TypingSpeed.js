        // Variables Holding Counter.
        var Msec = 0;
        var sec = 0;
        var min = 0;
        var hrs = 0;
        
        // Variables Holding Text
        var mainText = document.querySelector('#main').innerHTML;
        var textInput = document.querySelector('textarea');
        var border = document.querySelector('.border');

        var interval = null;
        var textarea = "Typing";
        // Spell Check Function
        function spellCheck () {
            var userInput = textInput.value;
            var textMatch = mainText.substring(0, userInput.length);
            
            if (userInput === mainText){
                clearInterval(interval)
                border.style.borderColor = "green";
            }
            else {
                if (userInput == textMatch){
                    border.style.borderColor = "Blue";
                }else{
                    border.style.borderColor = "orangeRed";
                }
            }  
        }
        
        //Stop Watch Functio
        function text () {
            Msec++;
            
            if(Msec == 59){
                Msec = 0;
                sec++;
                
                if (sec == 59){
                    sec = 0;
                    min++;

                    if  (min == 59){
                        n = 0;
                        hrs++;
                    }
                }
            }
            document.getElementById('time').innerHTML = hrs + ':' + min + ':' + sec + ':' + Msec;
        }
        // Start Button Function
        function start () {
            if (textarea === "Typing"){
                interval = setInterval(text, 15);
                textarea = "Empty";
            }
        }
       

        function startover () {
            Msec = 0;
            sec = 0;
            min = 0;
            hrs = 0;
            document.getElementById('textarea').value = "";
            document.getElementById('time').innerHTML = "0:0:0:0";

            if (textarea === "Empty"){
                clearInterval(interval);
                textarea = "Typing"
                border.style.borderColor = "rgb(46, 46, 46)";
            }
        }
        function Done () {

            if (textInput.value == mainText.innerHTML){
                clearInterval(interval);
            }
            
        }