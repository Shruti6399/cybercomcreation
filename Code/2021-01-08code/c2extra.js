var team1 = 'john';
var s1 = 89;
var s2 = 120;
var s3 = 103;
var avg1 = (s1 + s2 + s3)/3;
console.log(avg1);

var team2 = 'mike';
var ss1 = 116;
var ss2 = 94;
var ss3 = 123;
var avg2 = (ss1 + ss2 + ss3)/3;
console.log(avg2);

var team2 = 'Mary';
var sss1 = 97;
var sss2 = 134;
var sss3 = 105;
var avg3 = (sss1 + sss2 + sss3)/3;
console.log(avg3);

if(avg1>avg2){
    if(avg1>avg3){
        document.write('john team wins');
    }
    else if(avg3>avg1) {
        document.write('mary team wins');
    }
    else {
        document.write('its a draw');
    }
}
else {
  if(avg2>avg3){
        document.write('mike team wins');
    }
    else if(avg3>avg2){
        document.write('mary team wins');
    }
    else {
        document.write('its a draw');
    }
        
}