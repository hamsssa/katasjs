function rot13(message) 
{
    let array = message.split("");
    let newArr = [];
    
    for (let i = 0; i < array.length; i++) 
    { 
        let char = array[i];
        let code = char.charCodeAt(0);
        
        // Aplicar ROT13 solo a letras A-Z y a-z
        if (/^[A-Za-z]$/.test(char)) 
        { 
            if ((code >= 65 && code <= 90)) 
            { 
                code = ((code - 65 + 13) % 26) + 65;
            } 
          else 
            { /
                code = ((code - 97 + 13) % 26) + 97;
            }
            newArr.push(String.fromCharCode(code));
        } else 
        {
            newArr.push(char);
        }
    }
    
    return newArr.join(""); 
}
