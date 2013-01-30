$(document).ready(function () {
  var form = $("#contact-page-form");

  // Only do rest of stuff if on the right page
  if (form) {

    // Add submit functionality
    form.attr('action', "http://brandon-errbit.herokuapp.com/message/new");
    form.attr('method', "POST");

    // Validate the form

    jQuery.validator.addMethod("pattern", function(value, element, param) {
        return this.optional(element) || param.test(value);
    }, "Invalid format.");

    form.validate({
      errorClass: "control-group error jquery-error",
      validClass: "control-group jquery-validated",// success",
      errorElement: "span",
      highlight: function(element, errorClass, validClass) {
        if (element.type === 'radio') {
          this.findByName(element.name ).closest(".control-group").removeClass(validClass).addClass(errorClass);
        } else {
          $(element).closest(".control-group").removeClass(validClass).addClass(errorClass);
        }
      },
      unhighlight: function(element, errorClass, validClass) {
        if (element.type === 'radio') {
          this.findByName(element.name ).closest(".control-group").removeClass(errorClass).addClass(validClass);
        } else {
          $(element).closest(".control-group").removeClass(errorClass).addClass(validClass);
        }
      },
      rules: {
        "message[name]" : {required : true, minlength:3},
        "message[email]" : { required : true, minlength:3, pattern: /([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})/i },
        "message[subject]" : {required : true, minlength:5},
        "message[body]" : {required : true, minlength:5},
        "message[originating_website]" : {required : true},
        "message[redirect_location]" : {required : true},
        "human_verification" : {required : true}
      },
      errorPlacement: function(error, element) {
        // $(element).parent("div").append(error);
        return true;
      }
    });

    // // This breaks when you use Jquery validate. It sticks the button in disabled.
    // // Disable the submit button on form submit
    // form.submit(function(){
    //   $("#contact-page-submit-button").attr('disabled', 'disabled');
    // });

  } // End if form

});
