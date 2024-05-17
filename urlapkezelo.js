/* 
Az űrlapról összegyűjtjük az adatokat
a submit gombra kattintva betesszük a listába
*/

import { postAdat } from "./aszinkron.js";


export function adatokListaba(lista) {    
    const nevELEM = $("#nev");
    const korELEM = $("#kor");
    const nemElem = $("input[name='nem']:checked");

    let adat = {
        nev: "",
        kor: 0,
        nem: true
    };

    const submitELEM = $("#submit");

    submitELEM.on("click", function(event){
        event.preventDefault(); /* Leszedi az alapértelmezett hozzárendelt eseményt */
        
        const nemELEM = $("input[name='nem']:checked");

        adat = {
            kor: korELEM.val(),
            nev: nevELEM.val(),
            nem: nemELEM.val()
        };
        /*
        adatOBJ.nem = (nemELEM.checked() === "true" ? true : false);
        adatOBJ.nev = nevELEM.val();
        adatOBJ.kor = Number(korELEM.val());   
        */
        const validELEM = $(".valid-feedback");
        
        /*
        if( 
            validELEM.eq(0).css("display") === "block" &&
            validELEM.eq(1).css("display") === "block"
        ){
            postAdat("http://localhost:3000/emberekLISTA", adat);
            //lista.push(adatOBJ);
            //init(lista);
        }
        
        else console.log("Hibás adatok!")
        */
        postAdat("http://localhost:3000/emberekLISTA", adat);
    })

}


