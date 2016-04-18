/*THIS EXAMPLE DEMONSTRATES THE USE OF ALL OF THE ARRAY PROPERTIES.
IT ALSO CHECKS THE LENGTH OF THE ARRAY */

var x;
function main()
{
	 x = ["a", "b", "c", "d", "e", "f", "g"];
	console.log(x);
	console.log(x.length);
}
//REVERSE
function doReverse()
{
	var m = x.reverse();
	console.log(m);
	console.log(x.length);
}
//SORT
function doSort()
{
	var c = x.sort();
	console.log(c);
}
//PUSH
function doPush()
{
	var y = prompt('Enter value you wish to push');
	x.push(y);
	console.log(x);
	console.log(x.length);
} 
//SHIFT
function doShift()
{
	var b = x.shift();
	console.log(x);
	console.log(x.length);
}
//UNSHIFT
function doUnShift()
{
	var g = prompt('Enter a value you wish to add!');
	x.unshift(g);
	console.log(x);
	console.log(x.length);
}
//SPLICE
function doSplice()
{
	var m = prompt('Enter a Value you wish to add!');
	x.splice(2, 0, m);
	console.log(x);
	console.log(x.length);
	console.log(x[4]);
}
//SLICE
function doSlice()
{
	var g = x.slice(1,4);
	console.log(g);
}
