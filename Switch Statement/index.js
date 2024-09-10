// if example code
function check(){
    let ch = document.getElementById("a").value;
    switch( ch )
    {
     case 'A':
     case 'a':
        document.getElementById("change").innerHTML=(` The alphabet ${ch} is a vowel`);
        break; 
     case 'E':
     case 'e':
        document.getElementById("change").innerHTML=(` The alphabet ${ch} is a vowel`);
        break;
     case 'I':
     case 'i':
        document.getElementById("change").innerHTML=(` The alphabet ${ch} is a vowel`);
        break; 
     case 'O':
     case 'o':
        document.getElementById("change").innerHTML=(` The alphabet ${ch} is a vowel`);
        break; 
     default:
        document.getElementById("change").innerHTML=(` The alphabet ${ch} is a consonant`);
        break; 
    }
}
