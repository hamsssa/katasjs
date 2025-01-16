function noSpace(x)
{
  let string2 = "";
    for(let i = 0; i < x.length; i++)
    {
        if(x[i] != " ")
        {
          string2 += x[i];
        }

    }
    return string2;
}
