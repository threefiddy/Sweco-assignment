/*Udkommentér herfra og ned til der står hertil i kommentar. Er for at have nogle data i Localstorage når man starter.*/
var persons={"persons":[
{"ID":"1", "firstName":"Thomas", "lastName":"Robbinson", "age":"50", "gender":"male", "competences":["Matematisk klog", "fysisk stærk"]},
{"ID":"2","firstName":"John", "lastName":"Smith", "age":"45", "gender":"male", "competences":["fysisk stærk", "nysgerrig"]},
{"ID":"3","firstName":"Barack", "lastName":"Obama", "age":"39", "gender":"male", "competences":["Selvsikker", "Uafhængig af andre", "nysgerrig"]},
{"ID":"4","firstName":"Hillary", "lastName":"Clinton", "age":"48", "gender":"female","competences":["god til mennesker", "omsorgsfuld"]}
]}

localStorage.setItem('persons', JSON.stringify(persons));
/*hertil. Ellers vil localstorage hele tiden blive overskrevet, når man creater en ny person.*/




var jsonList = JSON.parse(localStorage.getItem('persons'));
for(i=0; i < jsonList.persons.length; i++)
{
	$('.container').append("<ul class='mainUl'>"+jsonList.persons[i].firstName+"<div class='listSpacing'></div>"+jsonList.persons[i].lastName + "<div class='listSpacing competences'>"+ jsonList.persons[i].competences[0] +"<br>"+ (jsonList.persons[i].competences[1]==undefined?"":jsonList.persons[i].competences[1])+"<br>"+ (jsonList.persons[i].competences[2]==undefined?"":jsonList.persons[i].competences[2]) +"</div><button type='button' class='btn btn-default showAllBtn' data-link='details.html?personId="+jsonList.persons[i].ID+"'>Vis detaljer</button> </ul>");

}
$(".showAllBtn").click(function(){
	sessionStorage.setItem('personId',$(this).data("link").substring(22));
	window.location.href = 'details.html';
})

$('.createBtn').click(function(){
	window.location.href = 'create.html';
})

$('.sortBtn').click(function(){
	var inputText = $('#sortInput').val();
	var clearBool = false;
	for(var i = 0; i < jsonList.persons.length; i++){
		if (jsonList.persons[i].competences.indexOf(inputText) != -1 && clearBool == false)
		{
			$('.container').html("");			
			$('.container').html("<a class='btnClass' href='javascript:window.location.href=window.location.href'>Tilbage</a><div class='sortInfo'>Viser X personer med kompetencen <b> "+ inputText +"</b>. Total antal personer i databasen: "+ jsonList.persons.length +"</div><ul class='mainUl'>"+jsonList.persons[i].firstName+"<div class='listSpacing'></div>"+jsonList.persons[i].lastName + "<div class='listSpacing competences'>"+ jsonList.persons[i].competences[0] +"<br>"+ (jsonList.persons[i].competences[1]==undefined?"":jsonList.persons[i].competences[1])+"<br>"+ (jsonList.persons[i].competences[2]==undefined?"":jsonList.persons[i].competences[2]) +"</div> </ul>");
			clearBool = true;
		}
		else if (jsonList.persons[i].competences.indexOf(inputText) != -1 && clearBool == true){
			$('.container').append("<ul class='mainUl'>"+jsonList.persons[i].firstName+"<div class='listSpacing'></div>"+jsonList.persons[i].lastName + "<div class='listSpacing competences'>"+ jsonList.persons[i].competences[0] +"<br>"+ (jsonList.persons[i].competences[1]==undefined?"":jsonList.persons[i].competences[1])+"<br>"+ (jsonList.persons[i].competences[2]==undefined?"":jsonList.persons[i].competences[2]) +"</div> </ul>");
		}
			
	}
})