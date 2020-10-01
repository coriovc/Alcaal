$( document ).ready( function () {
    var $successMsg = $(".contact-Thakns");
      $( "#contact_form" ).validate( {
        rules: {
          name: "required",
          email: {required: true, email: true},
          phone: {required: true, minlength: 10},          
          message: "required"
          },
        messages: {
          name: "Please enter your name",
          email:{required: "Please enter an email",
                email:"The email format is not valid EJ: example@mail.com"},
          phone: {required: "Please enter a phone number.",
                  minlength: "Enter the area code without the 15: EJ: 1145652798."},          
          message: "Please write a message."
          },
        errorElement: "span",
        submitHandler: function(form) {          
          $successMsg.addClass('show');
          $(form).ajaxSubmit();  
        },
        errorPlacement: function ( error, element ) {
          // Add the `invalid-feedback` class to the error element
          error.addClass( "invalid-feedback" );
          error.insertAfter( element );
        },
        highlight: function ( element, errorClass, validClass ) {
          $( element ).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function (element, errorClass, validClass) {
          $( element ).addClass("is-valid").removeClass("is-invalid");
        }
        
      } );
    } );

