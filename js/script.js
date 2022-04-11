// Calcolare prezzo biglietto 0.21 x i km

// Creare form con dati utente
const formBtn = document.getElementById("form-btn");
console.log(formBtn);
formBtn.addEventListener("click",
    function() {
        // Chiedo all'utente nome e cognome
        const userName = document.getElementById("user-name").value;
        console.log(userName);
        
        // Chiedo all'utente i km
        const userKm = document.getElementById("user-km").value;
        console.log(userKm);

        const ticketPrice = 0.21 * userKm
        console.log(ticketPrice);

        // Calcolo sconto del 20%
        const discountUnder = (ticketPrice * 20) / 100;

        // Calcolo sconto del 40%
        const discountOver = (ticketPrice * 40) / 100;
        
        // Chiedo all'utente l'età
        const userAge = document.getElementById("user-age").value;
        console.log(userAge);

        // Se l'utente ha meno di 18 anni sconto del 20%
        // Se l'utente ha più di 65 anni sconto del 40%
        let offerText = "Nessuna offerta"

        if (userAge === "minorenne") {
            resultPrice = ticketPrice - discountUnder;
            offerText = "Offerta minorenne";
        } else if (userAge === "over") {
            resultPrice = ticketPrice - discountOver;
            offerText = "Offerta over 65;"
        }

        console.log(resultPrice);

        // Trasformare il prezzo finale con solo due decimali 
        const priceFormatted = offerText .toFixed(2);
        console.log(priceFormatted);

        // Stampo nella pagina le risposte dell'utente
        const userResponse = document.querySelector(".container-result h2");
        console.log(userResponse);
        userResponse.innerHTML += `Nome passeggero ${userName}`;

        const offerCol = document.querySelector(".offerta tbody tr :nth-child(1) span");
        console.log(offerCol);
        offerCol.innerHTML = offerText;

        const priceResponse = document.querySelector(".container-result p")
        console.log(priceResponse);
        priceResponse.innerHTML = `Costo biglietto ${priceFormatted}`;

        // Far vedere le risposte
        const resultContainer = document.querySelector(".container-result");
        console.log(resultContainer);
        resultContainer.classList.remove("disp-none")
    }    
);








const formClearBtn = document.getElementById("form-clear-btn");
console.log(formClearBtn);
formClearBtn.addEventListener("click",
    function() {

        const resultContainer = document.querySelector(".container-result");
        resultContainer.classList.add("disp-none");
    }
);