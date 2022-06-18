window.addEventListener('offline', function(event){
    //reload the window
    window.location.reload();
    if(navigator.onLine == false){
        window.location.reload();
    }
});