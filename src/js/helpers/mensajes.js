let wspNumPrenda = "51952084971";
let wspNumOutfits = "51944235148";

/*** ENVIAR MENSAJE DE WHATSAPP ***/
export function whatsappMessage(tipo, item) {
    let msg, wspNumber, whatsappLink = "";

    if(tipo === "prenda"){
        wspNumber = wspNumPrenda;
        msg = `Holaaa Disquete Galaxico. Me encanta el/la *${item.nombre}* (cod: ${item.id}), quiero comprarlo/a Yaa! :)`;
    } else if (tipo === "outfit"){
        wspNumber = wspNumOutfits;
        msg = `Holaaa Disquete Galaxico. Me encanta el *${item.nombre}* (cod: ${item.id}), quiero comprarlo/a Yaa! :)`;
    }

    whatsappLink = `https://wa.me/${wspNumber}?text=${msg}`;
    return whatsappLink;
}