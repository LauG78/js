/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
const crtdate = new Date();
let btn = document.getElementById("run").addEventListener("click",age);
function age(){
    const year = crtdate.getFullYear();
    const month = crtdate.getMonth();
    const day = crtdate.getDay();
    const dob_year = document.getElementById("dob-year").value;
    const dob_month = document.getElementById("dob-month").value;
    const dob_day = document.getElementById("dob-day").value;
    const dob = new Date(dob_year,dob_month,dob_day);
    console.log(dob_year);
    console.log(dob.getFullYear());
    if(month>=dob_month) {
        if(day>=dob_day) {
            age_years=year-dob_year;
            }
        }
    else {
            age_years=year-dob_year-1;
    }
    console.log(age_years);
    alert("You are "+age_years);
}
})();
