   
    var onOfflineStatus = true; //true=online, false = offline

    function validateForm(){
        
        var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        var e_mail = document.getElementById("e_mail").value;
        var dob = document.getElementById("dob").value;
        var pword = document.getElementById("pword").value;
        var cpword = document.getElementById("cpword").value;
        var ssn = document.getElementById("ssn").value;
        var phone = document.getElementById("phone").value;
        var cc = document.getElementById("cc").value;
        var errors = [];
        var i = -1;

        var ck_fname = /^[A-Za-z]{3,20}$/;
        var ck_lname = /^[A-Za-z]{3,20}$/;
        var ck_e_mail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
        var ck_dob = /^\d{1,2}([\\ \-]?)\d{1,2}([\\ \-]?)\d{4}$/;
        var ck_pword = /^(?=.*[A-Z].*[A-Z].*[A-Z])(?=.*[!@#$&*].*[!@#$&*])(?=.*[a-z].*[a-z]).{6,}$/;
        //var ck_cpword = /^[A-Za-z]{3,20}$/;
        var ck_ssn = /^\d{3}[\-]\d{2}[\-]\d{4}$/;
        var ck_phone = /^[\(]\d{3}[\)]\d{3}[\-]\d{4}$/;
        var ck_cc = /^\d{4}([\ \-]?)\d{4}\1\d{4}\1\d{4}$/;
                
        if (!ck_fname.test(fname)) { errors[++i] = "Invalid first name. Must be 3 or more letters."; }
        if (!ck_lname.test(lname)) { errors[++i] = "Invalid last name. Must be 3 or more letters."; }
        if (!ck_e_mail.test(e_mail)) { errors[++i] = "Invalid email format."; }
        if (!ck_dob.test(dob)) { errors[++i] = "Invalid DOB format. Must be MM-DD-YYYY."; }
        if (!ck_pword.test(pword)) { errors[++i] = "Invalid password. Must have at least 3 uppercase, 2 lowercase, and 2 special characters.";}
        if (cpword != pword) { errors[++i] = "Passwords do not match!";}
        if (!ck_ssn.test(ssn)) {errors[++i] = "Invalid SSN format. Must be XXX - XX - XXXX.";}
        if (!ck_phone.test(phone)) { errors[++i] = "Invalid phone number format. Must be (123) 456-7890.";}
        if (!ck_cc.test(cc)) {errors[++i] = "Invalid credit card number. Must be in format 1234-5678-9012-3456."; }
        
        if (i >= 0) {
            reportErrors(errors);
        }
        else{//if no errors then save form
            submitForm();            
        }
    }
    
    function reportErrors(errors){
        var msg = "Please Enter Valide Data...\n";
        for (var i = 0; i<errors.length; i++) {
            var numError = i + 1;
            msg += "\n" + numError + ". " + errors[i];
        }
        
        alert(msg);
    }
    
    function pwordStrengthChecker(){
        
        var normal = /^(?=.*[A-Z].*[A-Z].*[A-Z])(?=.*[!@#$&*].*[!@#$&*])(?=.*[a-z].*[a-z]).{6,}$/;
        var medium = /^(?=.*[A-Z].*[A-Z].*[A-Z])(?=.*[!@#$&*].*[!@#$&*].*[!@#$&*])(?=.*[a-z].*[a-z]).{6,}$/;
        var mediumstrong = /^(?=.*[A-Z].*[A-Z].*[A-Z])(?=.*[!@#$&*].*[!@#$&*].*[!@#$&*].*[!@#$&*])(?=.*[a-z].*[a-z]).{6,}$/;
        var strong = /^(?=.*[A-Z].*[A-Z].*[A-Z])(?=.*[!@#$&*].*[!@#$&*].*[!@#$&*].*[!@#$&*].*[!@#$&*])(?=.*[a-z].*[a-z]).{6,}$/;
        var pword = document.getElementById("pword").value;
        var newP = document.getElementById("p");

        if (strong.test(pword)) {
            newP.value = 100;
            document.getElementById("pwordcheck").innerHTML = "Strong! (Valid Password)"
        } else if (mediumstrong.test(pword)) {
            newP.value = 75;
            document.getElementById("pwordcheck").innerHTML = "Medium Strong! (Valid Password)"
        } else if (medium.test(pword)) {
            newP.value = 50;
            document.getElementById("pwordcheck").innerHTML = "Medium! (Valid Password)"          
        }else if (normal.test(pword)) {
            newP.value = 25;
            document.getElementById("pwordcheck").innerHTML = "Normal! (Valid Password)"
        } else {
            newP.value=10;
            document.getElementById("pwordcheck").innerHTML = "(Keep going!)"
            }
    }
    
    function submitForm(){
        var register = document.getElementById("register");
        register.addEventListener("click", saveForm, false);
    }
    
   
    function saveForm(){
        var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        var e_mail = document.getElementById("e_mail").value;
        var pword = document.getElementById("pword").value;
        var ssn = document.getElementById("ssn").value;
        var phone = document.getElementById("phone").value;
        var cc = document.getElementById("cc").value;
        
        if(onOfflineStatus == true){
            sessionStorage.setItem(fname, lname, e_mail, pword, ssn, phone, cc);
        }
        else {
            if (Modernizr.localstorage) {            
                localStorage.setItem("fname", document.getElementById("fname").value);
                localStorage.setItem("lname", document.getElementById("lname").value);
                localStorage.setItem("e_mail", document.getElementById("e_mail").value);
                localStorage.setItem("pword", document.getElementById("pword").value);
                localStorage.setItem("ssn", document.getElementById("ssn").value);
                localStorage.setItem("phone", document.getElementById("phone").value);
                localStorage.setItem("cc", document.getElementById("cc").value);
            }
            else{
                alert("This browser does not support local storage! Sorry your data cannot be saved at this time.")
            }
        }
        
        confirmRegistration(fname, lname, e_mail);
    }
    
    function confirmRegistration(fname, lname, e_mail){
        //var verifybox = document.getElementById("verifybox");
          //      verifybox.innerHTML = "Hi " +fname+ " "+lname+", your account was just created!<br>"
            //                  +"Names of people registered: <br>";
                              
        //Clear form after registering
        var fname = document.getElementById("fname").value="";
        var lname = document.getElementById("lname").value="";
        var email = document.getElementById("e_mail").value="";
        var pword = document.getElementById("pword").value="";
        var cpword = document.getElementById("cpword").value="";
        var ssn = document.getElementById("ssn").value="";
        var phone = document.getElementById("phone").value="";
        var cc = document.getElementById("cc").value="";
        
        for (var x=0; x<sessionStorage.length; x++){
            var data = sessionStorage.key(x);
            var val = sessionStorage.getItem(data);
            //verifybox.innerHTML += "User "+x+": "+data+" "+val+"<br>";
        }
    }
    
    function updateToOnline(){onOfflineStatus = true;}
    function updateToOffline(){onOfflineStatus = false;}
    
    window.addEventListener("load",doFirst,false);
    window.addEventListener("online", updateToOnline);
    window.addEventListener("offline", updateToOffline);
