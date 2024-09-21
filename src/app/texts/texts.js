const title = "VALTY";
const email = ""; // Información no proporcionada
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy muy interesado en tus productos de " + title + " y me gustaría recibir más información sobre ellos. Espero poder hablar pronto contigo para aclarar algunas dudas. ¡Gracias!"
);
const numeroWhatsApp = ""; // Información no proporcionada

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "VALTY se dedica a la elaboración de artesanía de alta calidad, incluyendo porcelanato, vitral, foamy, pintura en yeso y resina, bisutería, y pintura al óleo en cuadros en bajo y alto relieve.",
        description2: "En VALTY, nos enfocamos en ofrecer productos únicos que destacan por su calidad y detalle, brindando a nuestros clientes opciones excepcionales para decorar y personalizar su entorno."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Decoarte",
            p2: "" // Información no proporcionada
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "", // Información no proporcionada
        instagram: "", // Información no proporcionada
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
