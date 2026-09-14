function checkSummaryLimit(summariesUsed){
if (summariesUsed < 5) {
 return("You can generate a summary");
} else{
  return("Upgrade to continue");
  } 
}
const summariesUsed = 3;
const message = checkSummaryLimit(summariesUsed);
console.log(message);
