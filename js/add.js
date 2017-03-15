(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function() {
    Materialize.updateTextFields();

    //swal("Reminder", "Seperate ingredients and direction by putting each on new line!", "success");
});

$("#finish-add").click(function () {
    console.log("WOOOO");
    swal({   title: "Are you sure?",   
             text: "The recipe will be added to your cookbook",   
             type: "warning",   
             showCancelButton: true,   
             confirmButtonColor: "#DD6B55",   
             confirmButtonText: "Yes, add it!",   
             cancelButtonText: "No, I'm not done!",   
             closeOnConfirm: false,   
             closeOnCancel: false }, 
             function(isConfirm){   
                if (isConfirm) {     
                    swal({title: "Nice!",
                          text: "Your recipe has been saved!",
                          type: "success"}, 
                          function() {
                            window.location.replace("index.html");
                          });   
                } else {     
                    swal("Cancelled", "You can keep editing :)", "error");   
                } 
            });
});

// ALERTS

$("#add-recipe-link").click(function() {
    swal({   title: "Are you sure?",   
             text: "You will not be able to recover the drafted Recipe!",   
             type: "warning",   
             showCancelButton: true,   
             confirmButtonColor: "#DD6B55",   
             confirmButtonText: "Yes, go back to home!",   
             closeOnConfirm: false }, 
             function() {      
                window.location.replace("index.html"); 
             });
});