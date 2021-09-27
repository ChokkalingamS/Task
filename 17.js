let s=(n)=>
{
  if(typeof(n)=="string")
{
  return n.length;
}
else
{
  return -1;
}
}
console.log(s("GUVI"));
console.log(s(""));
console.log(s());
console.log(s(9));