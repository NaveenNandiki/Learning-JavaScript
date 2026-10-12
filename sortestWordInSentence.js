console.log("This program finds the length of the shortest word in a sentence.");
let string=prompt("Enter a sentence: ");
let min=100;
let strarr=string.split(" ");
for(let i=0;i<strarr.length;i++){
    if(strarr[i].length<min){
        min=strarr[i].length;
    }
}
console.log("The length of the shortest word in the sentence is: " + min);