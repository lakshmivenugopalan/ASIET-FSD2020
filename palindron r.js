function palindrome(){

var y=x;
var rev=0;
var rem=0;
while(x>0)
{
    rem=x%10;
    rev=rev*10+rem;
    x=parseInt(x/10);
}
var z="";
if(rev==y)
{
    z= "palindrome";
}else
{
   z= "not palindrome";
}
return z;

}
palindrome(1001);