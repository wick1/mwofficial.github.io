
//=========================================================================================
//  11.   Contact Form Validation
//=========================================================================================

if($contact.length){
    $contact.validate({  //#contact-form contact form id
      rules: {
        name: {
          required: true    // Field name here
        },
        email: {
          required: true, // Field name here
          email: true
        },
        subject: {
          required: true
        },
        message: {
          required: true
        }
      },
      
      messages: {
                name: "Please enter your First Name", //Write here your error message that you want to show in contact form
                email: "Please enter valid Email", //Write here your error message that you want to show in contact form
                subject: "Please enter your Subject", //Write here your error message that you want to show in contact form
                message: "Please write your Message" //Write here your error message that you want to show in contact form
            },

            // submitHandler: function (form) {
            //     $('#send').attr({'disabled' : 'true', 'value' : 'Sending...' });
            //     $.ajax({
            //         type: "POST",
            //         url: "email.php",
            //         data: $(form).serialize(),
            //         success: function () {
            //             $('#send').removeAttr('disabled').attr('value', 'Send');
            //             $( "#success").slideDown( "slow" );
            //             setTimeout(function() {
            //             $( "#success").slideUp( "slow" );
            //             }, 5000);
            //             form.reset();
            //         },
            //         error: function() {
            //             $('#send').removeAttr('disabled').attr('value', 'Send');
            //             $( "#error").slideDown( "slow" );
            //             setTimeout(function() {
            //             $( "#error").slideUp( "slow" );
            //             }, 5000);
            //         }
            //     });
            //     return false; // required to block normal submit since you used ajax
            // }

            submit.on('click', function(e) {
            e.preventDefault();
            if(validate()) {
              $.ajax({
                type: "POST",
                url: "mail.php",
                data: form.serialize(),
                dataType: "json"
              }).done(function(data) {
                if(data.success) {
                  $("#success").slideDown( "slow" );
                  setTimeout(function() {
                  $( "#success").slideUp( "slow" );
                  }, 5000);
                  form.reset();
                } else {
                  info.html('Could not send mail! Sorry!').css('color', 'red').slideDown();
                }
              });
            }
          });


    });
  };