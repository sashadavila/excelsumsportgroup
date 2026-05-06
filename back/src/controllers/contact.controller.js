export const sendContact = (req, res) => {
    const { name, email, message } = req.body;

    console.log("Nuevo contacto:", { name, email, message });

    res.json({
        message: "Formulario recibido correctamente",
    });
};