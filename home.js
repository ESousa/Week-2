function submitForm() {
  	var email = document.getElementById('email');
		var err_email = document.getElementById('err_email');


		var firstName = document.getElementById('firstName');
		var err_fname = document.getElementById('err_fname');


		var lastName = document.getElementById('lastName');
		var err_lname = document.getElementById('err_lname');


		var hasErrors = false;


		if ( !email.value.length || email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 ) {
			err_email.innerHTML = "<em>Please Fill out your email</em>";
			email.className = "bad";
			hasErrors = true;
		} else {
			err_email.innerHTML = "";
			email.className = "good";
		}


		if ( !firstName.value.length  ) {
			err_fname.innerHTML = "<em>*</em>";
			firstName.className = "bad";
			hasErrors = true;
		} else {
			err_fname.innerHTML = "";
			firstName.className = "good";
		}


		if ( !lastName.value.length  ) {
			err_lname.innerHTML = "<em>*</em>";
			lastName.className = "bad";
			hasErrors = true;
		} else {
			err_lname.innerHTML = "";
			lastName.className = "good";
		}


		if ( hasErrors ) {
			alert("Email is no good");
		} else {
			alert("Email is good");
		}




	}




