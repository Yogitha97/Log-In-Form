$(document).ready(function(){
    display(1);
    $(".btn").click(function(){
        $("#frm").toggle();
    });
});
function display(btnvalue)
{
    ptr=btnvalue;
    $("tbody").children().remove();
$.ajax({
url: "https://reqres.in/api/users?page="+btnvalue,
data: {},
beforeSend: function(){}
}).done(function(response) {
var trArr = new Array();
$.each(response.data, function(i, item){
   trArr.push('<tr><td>' + item.first_name ," " +item.last_name+ '</td><td>' + item.email + '</td><td><img id="img" src="' 
   + item.avatar + '" width="100px" /></td><td> <a href="#" class="edit"><i style="color:goldenrod"class="material-icons">&#xE254;</i> <a class="delete"><i style="color:red" class="material-icons">&#xE872;</i></a></a>' + '</td></tr>'  );
   
});
$('table#alt-table tbody').append(trArr.join('\n'));
});
}



/*
name1= document.getElementById('firstname').value;
email1= document.getElementById('email').value;
lname1 =  document.getElementById('lastname').value;
$(document).ready(function(){
$("#submit").click(function(){
$.ajax({
url: "https://reqres.in/api/users",
type: "POST",
data :
{
        first_name:name1,
        last_name:lname1,
        email : email1,
},
success: function(response){
    console.log(response);
    
}
});
});
});
*/