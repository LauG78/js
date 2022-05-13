/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", ()=>{
        let hero = document.getElementById("hero-id").value;
        let tpl_hero = document.getElementById("tpl-hero");
        let target = document.getElementById("target");
        let clone = tpl_hero.content.cloneNode(true);
        fetch(`http://localhost:3000/heroes/${hero}`).then(res=>res.json()).then(data=>{
            let name = clone.querySelector(".name");
            let alter_ego = clone.querySelector(".alter-ego");
            let powers = clone.querySelector(".powers");
            name.innerText = data.name;
            alter_ego.innerText = data.alterEgo;
            powers.innerText = data.abilities;
            target.appendChild(clone);
        }).catch(err=>alert("That one's dead!"))
        })
    
    // your code here
})();
