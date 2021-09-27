
function power(n)
{
    let s="";
    for(let i=0;i<=n;i++)
    {
      let y=2**i ;
      s=s+y+" ";
    }
    let m= s.trim("").split(" ").map(Number)
    // let m= s.trim(" ")
    return m;
}
console.log(power(0));
console.log(power(1));
console.log(power(2));