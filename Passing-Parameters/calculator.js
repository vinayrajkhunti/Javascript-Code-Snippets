/* THIS IS EXAMPLE OF SIMPLE CALCULATOR USING "passing parameter" FEATURE OF JAVASCRIPT.
I HAVE USED "SWITHC-CASE" FUNCTIONALITY HERE.*/


function calc(b)
{
	var x = document.getElementById('t1').value;
	 x = parseInt(x);
	var y = document.getElementById('t2').value;
	 y = parseInt(y);

	switch(b)
	{
		case "+" :
		document.getElementById('t3').value =  x + y;
		break;

		case "-" :
		document.getElementById('t3').value = x - y;
		break;

		case "*" :
		document.getElementById('t3').value = x * y;
		break;

		case "+" :
		
		document.getElementById('t3').value = x / y;
		break;

		default:
			alert('hello');

    }
}


