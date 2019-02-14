const msForCountdown = process.argv[2] * 1000
const initialValue = 100;
let number = initialValue;
const msPerCount = msForCountdown / initialValue;

function countingDown(){
	let faktor = (number + (initialValue / 2)) / initialValue;
    let msPerCurrentTimeout = msPerCount * faktor;
    if (number <= 100 && number >= 10) {
        console.log(number)
        setTimeout(countingDown, msPerCurrentTimeout); 
   } else if (number <= 9 && number >= 0){
        console.log('\x1b[31m%s\x1b[0m', number);
        setTimeout(countingDown, msPerCurrentTimeout); 
   }
   number = number - 1;
}
countingDown();