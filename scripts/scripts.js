document.addEventListener('DOMContentLoaded', function(){

var addButton = document.querySelector("button");


})

var x = 0;
var array = Array();
var array2 = Array();
var array3 = Array();
var node = document.createElement("p"); 


function add_element_to_array()
{
 array[x] = document.getElementById("text1").value;
 array2[x] = document.getElementById("text2").value;
 array3[x] = document.getElementById("text3").value;
 alert("Task: " + array[x] + " added.");
 x++;
 document.getElementById("text1").value = "";

}

function display_array(){

	var item = document.querySelector("#text1").value;
	var description = document.querySelector("#text1").value;
	var category = document.querySelector("#text1").value;
	var node = document.createElement("div");   

   var e = "<hr/>"; 
   var f = "";
   var g = ""; 
   var info = document.getElementById("Result");

    
   for (var y=0; y<array.length; y++)
   {

   	e = "<span>Task:</span> "+array[y] + item +"<br/>";
     f = "<span>Description: </span>" +array2[y] + description+ "<br/>";
     g = "<span>Category: </span>"+array3[y] + category +"<br/>";

   
     var newLine = node.innerHTML = e + f + g +"<br/><hr><br/>";
     info.appendChild(node)
    
   }

}

	
	