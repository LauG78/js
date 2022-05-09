/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    const x=document.getElementById("op-one").value; 
    const y=document.getElementById("op-two").value;
    let res=0;
    // to get the value of an input: document.getElementById("element-id").value

    var performOperation = function(operation) {  
        switch (operation){
            case"addition":
                res=x+y;
                alert("result is: "+res);
                break;
            case"substraction":
                res=x-y;
                alert("result is: "+res);
                break;
            case"multiplication":
                res=x*y;
                alert("result is: "+res);
                break;
            case"division":
                res=x/y
                alert("result is: "+res);
                break;
            default:
                alert("unknown");
        }
        // perform the operation
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
