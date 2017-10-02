function simpleinterest(){
    var p, t, r;
    
     p=$("#p").val();
     t=$("#t").val();
     r=$("#r").val();
    // t = document.getElementById("t").value;
    // r = document.getElementById("r").value;
    var output=calcSI(p,t,r)
    $("#simp").val(output);
}
    function calcSI(p,t,r)
    {
        if ((p == "" || p <0)||(t == "" || t <0 )||(r == "" || t <0 ))
        {
        alert("invalid entry");
        throw ERROR('The given argument is not a positive');
    }
   
    else{
        var simpleinterest = (p*t*r/100);
        return simpleinterest;
    }
   // document.getElementById("simp").value = simpleinterest;
    // $("#simp").html(simpleinterest);
  
}

   

