// THIS IS A SIMPLE EXAMPLE OF USE OF ARRAY AND SOME OF ITS PROPERTIES, SUCH AS, "pop, & splice".

/* IN THIS EXAMPLE, WE PROMPT USER TO ENTER THE NAME OF THE DAY.
WHEN USER ENTERS THE DAY, THAT DAY WILL BE REMOVED FROM ARRAY, AND 
IT WILL DISPLAY REMAINING DAYS FROM THE WEEK.
IF USER ENTERS "sunday", IT WILL DISPLAY THAT "It's The last Day".*/

function days()
{
	var weeks = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
	var x = prompt('Enter A Day!');
		if(x == "monday")
		{
			var y = weeks.splice(0,1);
			weeks.pop();
			console.log(weeks);
		}
	
		else if(x == "tuesday")
		{
			var y = weeks.splice(0,2);
			weeks.pop();
			console.log(weeks);
		}
		else if(x == "wednesday")
		{
			var y = weeks.splice(0,3);
			weeks.pop();
			console.log(weeks);
		}
		else if(x == "thursday")
		{
			var y = weeks.splice(0,4);
			weeks.pop();
			console.log(weeks);
		}
		else if(x == "friday")
		{
			var y = weeks.splice(0,5);
			weeks.pop();
			console.log(weeks);
		}
		else if(x == "saturday")
		{
			var y = weeks.splice(0,6);
			console.log(weeks);
		}
		else
			if(x == "sunday")
		{
			
			console.log("It's The last Day");
		}
}
