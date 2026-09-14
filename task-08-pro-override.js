function canGenerateSummary(plan, summariesUsed) { 
  if (plan === "PRO") { 
    return true; 
  } 
 
  if (summariesUsed < 5) {
        return true; 
  } 
 
  return false; 
} 
 
console.log(canGenerateSummary("FREE", 2));  
console.log(canGenerateSummary("FREE", 5));  
console.log(canGenerateSummary("PRO", 20)); 