let wspNumPrenda = "511";
let wspNumOutfits = "512";

/*** ENVIAR MENSAJE DE WHATSAPP ***/
export function whatsappMessage(tipo, item) {
    let msg, wspNumber, whatsappLink = "";

    if(tipo === "prenda"){
        wspNumber = wspNumPrenda;
        msg = `Holaaa Disquete Galaxico. Me encanta el/la *${item.name}* (cod: ${item.id}), quiero comprarlo/a Yaa! :)`;
    } else if (tipo === "outfit"){
        wspNumber = wspNumOutfits;
        msg = `Holaaa Disquete Galaxico. Me encanta el *${item.name}* (cod: ${item.id}), quiero comprarlo/a Yaa! :)`;
    }

    whatsappLink = `https://wa.me/${wspNumber}?text=${msg}`;
    return whatsappLink;
}