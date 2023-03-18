function countdown() {
    time = parseInt(localStorage.time); //All variables in localstorage are strings
    //Resets timer if cannot parse the localStorage.time variable or if the time is greater than 30 mins
    if(isNaN(time) || time > (30*60)) {
        alert("An error occured: time left variable is corrupted, resetting timer");
        localStorage.time = 30*60; //30 mins in seconds
        countdown();
        return null;    
    }
    //Decrementing time and recalling the function in 1 second
    time--;
    localStorage.time = time;
    setTimeout('countdown()', 1000);
}
