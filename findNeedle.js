function findNeedle(haystack) 
{
  //Bucle for con condicion de si haystack[i] == needle
  //si hay needle que escriba "found the needle at position i"

  
  for(let i = 0; i < haystack.length; i++)
    {
      if(haystack[i] == "needle")
        { 
          return "found the needle at position" +" "+ i
        }
    }
}
