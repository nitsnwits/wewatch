$(document).ready(function(){

   jQuery.validator.addMethod("isValidSSN", function(value, element) {
      return this.optional(element) || /^\d{3}[\-]\d{2}[\-]\d{4}$/.test(value);  
   }, "Please enter a valid SSN");
   
   jQuery.validator.addMethod("isValidPhoneNum", function(value, element) {
      return this.optional(element) || /^[\(]\d{3}[\)]\s*\d{3}\s*[\-]\s*\d{4}$/.test(value);  
   }, "Please enter a valid phone number.");
   
   jQuery.validator.addMethod("isValidCard", function(value, element) {
      return this.optional(element) || /^\d{4}([\ \-]?)\d{4}\1\d{4}\1\d{4}$/.test(value);  
   }, "Please enter a valid credit card number");
   
   jQuery.validator.addMethod("isValidPword", function(value, element) {
      return /^(?=.*[A-Z].*[A-Z].*[A-Z])(?=.*[!@#$&*].*[!@#$&*])(?=.*[a-z].*[a-z]).{6,}$/.test(value);  
   }, "Password must be at least 3 uppercase, 2 lowercase, and 2 special characters.");
  

   $('#registration-form').validate({
	    rules: {
	       fname: {
	       required: true,
               minlength: 3,
	       required: true
	      },
              
              lname: {
	       required: true,
               minlength: 3,
	       required: true
	      },
              
               e_mail: {
	          email: true,
                  required: true
	      },
              
               dob: {
                  required: true,
                  date: true
	      },
                            
              ssn: {
	        required: true,
                isValidSSN: true
	      },
              
              phone: {
	        required: true,
                isValidPhoneNum: true
	      },
              
              cc: {
	        required: false,
                isValidCard: true
	      },
              
              pword: {
				required: true,
				minlength: 6,
                                isValidPword: true
              },
              cpword: {
               equalTo: "#pword"
            },


			highlight: function(element) {
				$(element).closest('.control-group').removeClass('success').addClass('error');
			},
			success: function(element) {
				element
				.text('OK!').addClass('valid')
				.closest('.control-group').removeClass('error').addClass('success');
			}
            }
	  });

}); // end document.ready