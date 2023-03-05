//Get the string from the user entered data on the page
//Controller function
function getValue(){

    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);
    displayString(revString);

}


//Reverse the string
//Logic function
function reverseString(userString){

    let revString = [];

    //Reverse a string using a for loop
    for (let index = userString.length - 1; index >=0 ; index--) {

        revString += userString[index];
        
    }

    return revString;


}


//Display the reversed string to the user
//View function
function displayString(revString){

    //write the message to the page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;
    //turn on the alert box
    document.getElementById("alert").classList.remove("invisible");
}

