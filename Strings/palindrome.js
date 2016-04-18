/* THIS IS AN EXAMPLE OF USE OF STRING. 
IT CHECKS WETHER NUMBER ENTERED IN A PALINDROM OR NOT,
AND DISPLAYS MESSAGE ACCORDINGLY. */

function enterPalindrome()
{
	var x = prompt('Enter any string');
	var x = x.toLowerCase();

	for(var i = 0; i <= x.length; i++)

		if(x.charAt(i) == x.charAt(x.length - 1) && x.charAt(i + 1) == x.charAt(x.length - 2) )
		{
			alert('Yes It Is Palindrome.');
			break;
		}
		else
		{
			alert('No Its Not A Palindrome.');
			break;
		}
	
}
