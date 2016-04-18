/* THIS IS A SIMPLE IF-ELSE EXAMPLE.
HERE, WE PROMPT CUSTOMER TO ENTER THEIR AGE.
THE CODE WILL COMPARE THIS AGE AND IT WILL DISPLAY DISCOUNT TYPE ACCORDINGLY.
IF CUSTOMER'S AGE FALLS BETWEEN CERTAAING AGE GROUP, NO DISCOUNT WILL BE PROVIDED.*/

function discount()
{

 var age = prompt("please enter your age");
 var age = parseInt(age);
	if ( age >= 14 && age <= 65 && age != 50) 
		{
			alert("Regular Price");
		}
		else if (age == 50)
		{
			alert("Special Discount");
		}
		else if (age <= 14 && age >= 66)
		{
			alert("Not Allowed");
		}
		else
		{
			alert("Please Enter A Number");
		}
}
