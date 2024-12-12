const countValue=document.getElementById("counter");
const increment=()=>{ //function using arrow
    //get the value from UI
    let value=parseInt(countValue.innerText);//parseInt converts the string text to int value
    //Update the value
    value=value+1;
    //set the value onto UI
    countValue.innerText=value;
};
const decrement=()=>{ 
    //get the value from UI
    let value=parseInt(countValue.innerText);
    //Update the value
    value=value-1;
    //set the value onto UI
    countValue.innerText=value;
}