'use strict';
$('.toggle-button').click(function(){ //you can give id or class name here for $('button')
    $(this).text(function(i, old){
        return old === 'Show Details' ? 'Hide Details' : 'Show Details';
    });
});
