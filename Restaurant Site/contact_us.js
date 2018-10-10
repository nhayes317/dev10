function validateForm ( ){
		valid = true;
		if ( document.contact.name.value != "" && document.contact.email.value != "" && document.contact.phone.value != "" && document.contact.reason.value != "" && document.contact.info.value != "" && document.contact.answer.value != "")
		{
			alert ( "Information is valid!" );
			valid = true;
		}
		
		else {
			alert ("Please fill in all information!");
			valid=false;
		}
		

		return valid;
}