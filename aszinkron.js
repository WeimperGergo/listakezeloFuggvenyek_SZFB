export function getAdat(vegpont, callback) { // Callback fgv-ként adjuk át ennek a fetchnek az Initet jelen esetben
    fetch(vegpont, {
        method: "GET",
    });
    fetch(vegpont)
        .then((response) => response.json())
        .then((data) => callback(data))
        .catch((error) => console.log(error)
    );
}

/*
    fetch.then(param (vegpont)).then(valaszbol kiolvassa json formatumot).catch(hibat kapunk);
*/


export function postAdat(vegpont, adat) { 
    fetch(vegpont, {
        method: "POST",
        body: JSON.stringify(adat) // adat objektumunkat átalakítja JSON szöveggé, ez fog átmenni a hálózaton
    });
    fetch(vegpont)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error)
    );
}

export function deleteAdat(vegpont, id) { 
    fetch(vegpont+"/"+id, { // ID alapján törlünk
        method: "DELETE",
    });
    fetch(vegpont)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error)
    );
}

export function putAdat(vegpont, adat, id) { 
    fetch(vegpont+"/"+id, { // ID alapján törlünk
        method: "PUT",
        body: JSON.stringify(adat)
    });
    fetch(vegpont)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error)
    );
}