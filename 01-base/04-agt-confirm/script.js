/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

})();
let getAge=0;
let getGender=0;
let getTown=0;
//variables must de declared first//
interogation() 
function interogation(){
getAge=prompt("What is your age?");
getGender=prompt("What is your gender?");
getTown=prompt("In which town do you live?");
if (confirm("Is your age " + getAge + ", your gender " + getGender + ", your town " + getTown + "?")==true)
/*if function must be inside the function to run again and again*/
        {
    alert("Thank you!");
        }
    else{
        interogation();
    }
}
