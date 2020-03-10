var x=1001;
var y=x;
var rev=0;
var rem=0;
while(x>0)
{
    rem=x%10;
    rev=rev*10+rem;
    x=x/10
}
if(rev==y)
{
    Console.log("palindrome");
}else
{
    console.log("not palindrome");
}
