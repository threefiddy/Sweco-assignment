var jsonList = JSON.parse(localStorage.getItem('persons'));
var detailsId = JSON.parse(sessionStorage.getItem('personId'));

for(i=0; i < jsonList.persons.length; i++)
{
	if (jsonList.persons[i].ID == detailsId) {
		$('.containerDetails').append("<ul>"+jsonList.persons[i].ID+"<div class='listSpacing'></div>"+jsonList.persons[i].firstName+"<div class='listSpacing'></div>"+jsonList.persons[i].lastName + "<div class='listSpacing'></div>"+jsonList.persons[i].age +" <div class='listSpacing'></div>"+jsonList.persons[i].gender +"</ul>");
		break;
	};
}

$('.backBtn').click(function(){
	window.location.href = 'index.html';
})