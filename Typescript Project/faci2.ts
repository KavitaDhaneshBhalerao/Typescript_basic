var n1=0,n2=1,next,i;
var num=21;
for(i=1;i<=num;i++)
{
  console.log(n1);
  next=n1+n2;
  n1=n2;
  n2=next; 
}