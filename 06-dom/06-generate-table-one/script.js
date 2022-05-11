/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    const target = document.querySelector("#target");
    const table = document.createElement("table");
    for(i=1;i<=10;i++){
        const row = document.createElement("tr");
        let td = document.createElement("td");
            td.style.border="solid 2px blue";
        row.appendChild(td);
        table.appendChild(row);
    }
    target.appendChild(table);
    // your code here

})();
