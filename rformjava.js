

//var myform= document.getElementById("form1");


function validate()
{
    //You can use the variable myform to get info or you can type it all out, it is same
   if (document.forms[0].fname.value== ""){
       alert("First Name must have a value");
       return false;
    }

   //Elements[1] is the same as calling last name by its name. Which is lname
   if (document.forms[0].elements[1].value== ""){
        alert("Last Name must have a value");
        return false;
    }
    
   if (document.forms[0].phone.value== ""){
        alert("Phone number must have a value");
        return false;
    }   

    if (document.forms[0].address.value== ""){
        alert("Address must have a value");
        return false;
    }   

    if (document.forms[0].postalcode.value== ""){
        alert("Postal code must have a value");
        return false;
    }
    
    if (document.forms[0].city.value== ""){
        alert("City must have a value");
        return false;
    }   

    return confirm("Continue submitting?");
}