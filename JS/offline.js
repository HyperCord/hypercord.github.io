window.addEventListener('offline', function(event){
    alert("You are currently offline, please check your internet connection");
    if(navigator.onLine == false){
        window.location.reload();
    }
});