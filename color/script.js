
document.getElementById("btnSendTxt").addEventListener('click', function (){
    //var x = document.getElementById("fldInpTxt");
    alert("field: ");
});



//var x = document.getElementById("fldInpTxt");
//alert(x);

function lookUpProfile(name, prop){
    // Only change code below this line
    for (var x = 0; x < contacts.length; x++) {
        if (contacts[x].firstName === name) {
            if (contacts[x].hasOwnProperty(prop)) {
                return contacts[x][prop];
            } else {
                return "No such property";
            }
        }
    }
    return "No such contact";
    // Only change code above this line
    }