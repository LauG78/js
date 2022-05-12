/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener("click",()=>{
        let passoneval = document.getElementById("pass-one").value;
        let passtwoval = document.getElementById("pass-two").value;
        let passone = document.getElementById("pass-one");
        let passtwo = document.getElementById("pass-two");
        if(passoneval !== passtwoval){
            passone.style.borderColor = "red";
            passtwo.style.borderColor = "red";
        }
    })
    // your code here

})();
