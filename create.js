var persList = JSON.parse(localStorage.getItem("persons"));



$('#submitBtn').click(function(){
	var persId = persList.persons.length + 1;
	var fname = $("#fname").val();
	var lname = $("#lname").val();
	var age = $("#age").val();
	var gender = $("#gender").val();

	var persEntry={
		"ID": persId,
		"firstName": fname, 
		"lastName": lname, 
		"age": age, 
		"gender": gender,
		"competences":$('#competenceId').val()
	}
	if (fname == "" || lname == "")
		alert("Please fill out firstname and lastname");
	else
	{
		persList.persons.push(persEntry);	
		localStorage.setItem('persons', JSON.stringify(persList));
		window.location.href = 'index.html';
	}
})

