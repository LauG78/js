/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
const btn=document.getElementById("run").addEventListener("click",chg_bg_color)
function chg_bg_color() {
const c_values = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let color="#";
for (i=0;i<6;i++){
color += c_values[Math.floor(Math.random()*c_values.length)]
document.body.style.backgroundColor=color;}
/*Math.random=>generate a number between 0-1,
the value is multiplied with the number of c_values indexes,
Math.floor rounds the number down to get an integer,
color += adds the value of the resulted index from c_value array in the formula*/
}

})();
