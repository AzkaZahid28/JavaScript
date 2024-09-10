function per(){
    let Name = document.getElementById("nm").value;
    let Obt_marks = document.getElementById("om").value;
    let Total_marks = document.getElementById("tm").value;
    let res = Obt_marks / Total_marks * 100;
    if (res >= 90){
        document.getElementById("change").innerHTML=(` Dear ${Name} Your grade is A` );
    }
    else if(res >= 80){
        document.getElementById("change").innerHTML=(` Dear ${Name} Your grade is B` );
    }
    else if(res >= 70){
        document.getElementById("change").innerHTML=(` Dear ${Name} Your grade is C` );
    }
    else if(res >= 60){
        document.getElementById("change").innerHTML=(` Dear ${Name} Your grade is D` );
    }
    else if(res >= 50){
        document.getElementById("change").innerHTML=(` Dear ${Name} Your grade is E` );
    }
    else{
        document.getElementById("change").innerHTML=(` Dear ${Name} Your grade is F` );
    } 
    
}