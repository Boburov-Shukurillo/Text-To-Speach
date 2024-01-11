 const text = document.querySelector("#text");
        const play = document.querySelector("#play");


        play.addEventListener("click", (e) => {
            const speak_word = new SpeechSynthesisUtterance(text.value);
            speak_word.pitch = 1.1
            window.speechSynthesis.speak(speak_word);
          
        });