
jQuery(document).ready(function() {

    /*
        Background slideshow
    */
    $.backstretch([
      "assets/img/backgrounds/1.jpg"
    , "assets/img/backgrounds/2.jpg"
    , "assets/img/backgrounds/3.jpg"
    ], {duration: 3000, fade: 750});

    /*
        Tooltips
    */
    $('.links a.home').tooltip();
    $('.links a.blog').tooltip();

    /*
        Form validation
    */
    $('.register form').submit(function(){
        $(this).find("label[for='fname']").html('First Name');
        $(this).find("label[for='lname']").html('Last Name');
        $(this).find("label[for='e_mail']").html('Email');
        $(this).find("label[for='dob']").html('DOB');
        $(this).find("label[for='ssn']").html('SSN');
        $(this).find("label[for='phone']").html('Phone Number');
        $(this).find("label[for='pword']").html('Password');
        $(this).find("label[for='pword']").html('Confirm Password');
        ////
        var fname = $(this).find('input#fname').val();
        var lname = $(this).find('input#lname').val();
        var e_mail = $(this).find('input#e_mail').val();
        var dob = $(this).find('input#dob').val();
        var ssn = $(this).find('input#ssn').val();
        var phone = $(this).find('input#phone').val();
        var pword = $(this).find('input#pword').val();
        var cpword = $(this).find('input#cpword').val();
        var cc = $(this).find('input#cc').val();
        
        if(fname == '') {
            $(this).find("label[for='fname']").append("<span style='display:none' class='red'> - Please enter your first name.</span>");
            $(this).find("label[for='fname'] span").fadeIn('medium');
            return false;
        }
        if(lname == '') {
            $(this).find("label[for='lname']").append("<span style='display:none' class='red'> - Please enter your last name.</span>");
            $(this).find("label[for='lname'] span").fadeIn('medium');
            return false;
        }
        if(e_mail == '') {
            $(this).find("label[for='e_mail']").append("<span style='display:none' class='red'> - Please enter a valid email.</span>");
            $(this).find("label[for='e_mail'] span").fadeIn('medium');
            return false;
        }
        if(dob == '') {
            $(this).find("label[for='dob']").append("<span style='display:none' class='red'> - Please enter a valid date.</span>");
            $(this).find("label[for='dob'] span").fadeIn('medium');
            return false;
        }
        if(ssn == '') {
            $(this).find("label[for='ssn']").append("<span style='display:none' class='red'> - Please enter a valid SSN.</span>");
            $(this).find("label[for='ssn'] span").fadeIn('medium');
            return false;
        }
        if(phone == '') {
            $(this).find("label[for='phone']").append("<span style='display:none' class='red'> - Please enter a valid phone number.</span>");
            $(this).find("label[for='phone'] span").fadeIn('medium');
            return false;
        }
        if(pword == '') {
            $(this).find("label[for='pword']").append("<span style='display:none' class='red'> - Please enter at least 2 uppe, lower, and special case characters.</span>");
            $(this).find("label[for='pword'] span").fadeIn('medium');
            return false;
        }
        if(cpword == '') {
            $(this).find("label[for='cpword']").append("<span style='display:none' class='red'> - Please enter a password that matches.</span>");
            $(this).find("label[for='cpword'] span").fadeIn('medium');
            return false;
        }
        if(cc == '') {
            $(this).find("label[for='cc']").append("<span style='display:none' class='red'> - Please enter a valid password.</span>");
            $(this).find("label[for='cc'] span").fadeIn('medium');
            return false;
        }
    });


});


