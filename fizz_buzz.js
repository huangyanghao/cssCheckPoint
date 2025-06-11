let givenNumber=0;
function getNumber(){
    givenNumber=document.getElementById("number").value;
    for(let i=1;i<=givenNumber;i++){
    if(i%3===0&&i%5===0)
        console.log("FizzBuzz");
    else if(i%3===0)
        console.log("Fizz");
    else if(i%5===0)
        console.log("Buzz");
    else
        console.log(i);
    }
}
