/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let imgelem = document.getElementById("source")
    let imgsrc =imgelem.getAttribute("data-image");//get the value of the attribute//
    const newatribute=document.createElement("img");
    newatribute.src=imgsrc;
    document.querySelector("#target").appendChild(newatribute);//appending the child to target//
    imgelem.remove();
    
     // your code here

})();
