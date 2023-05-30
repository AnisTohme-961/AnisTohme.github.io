$(document).ready(function() {
    $('#welcome').click(function() {
    var alertContainer = $('<div class="alert-container"></div>');
    var alertBox = $('<div class="alert-box">Welcome To My Official Website</div>');
    alertContainer.append(alertBox);
    $('body').prepend(alertContainer);
    
    alertContainer.animate({
        top: '0'
    }, 500);
    
    setTimeout(function() {
        alertContainer.animate({
        top: '-100px'
        }, 500, function() {
        alertContainer.remove();
        });
    }, 3000);
    });
});