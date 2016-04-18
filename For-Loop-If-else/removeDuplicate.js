



/*THIS EXAMPLE DEMONSTRATE USE OF NESTED FOR LOOP AND IF-ELSE.
IT WILL COMPARE THE ARRAY VALUES, AND IF THERE IS ANY DUPLICATION, 
IT WILL REMOVE IT AND CONSOLES THE ARRAY WITHOUT DUPLICATE VALUES.*/



var i;
var j;


function compareNames()
{
	
	var name = ["sam", "smith", "tanmay", "sam", "utkarsh", "vinay", "tanmay"];
	var x = name.sort();

	for(i = 0; i <= name.length - 1; i++)
	{
		for(j = i + 1; j <= name.length - 1; j++)
		{
			if(name[i]==name[j])
			{
				for(k = j; k < x.length - 1; k++)
				{
					x[k] = x[k + 1];
				}
					x.pop();
				 
			}
		}
	}
console.log(x);
}
