var input = document.getElementById("input");
var result = document.getElementById("result");
var resultType = document.getElementById("resultType");
var resultTypeValue;

input.addEventListener("keyup", myresult);
resultType.addEventListener("change", myresult);

resultTypeValue = resultType.value;

function myresult(){

	resultTypeValue = resultType.value;
	
	if (resultTypeValue === "euro"){
	result.value = Number(input.value) * 0.4;}
	else if(resultTypeValue === "dollar"){
		result.value = Number(input.value) * 0.5;}
	else if(resultTypeValue === "yen"){
		result.value = Number(input.value) * 50;}
}