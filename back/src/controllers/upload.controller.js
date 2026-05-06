export const uploadVideo = (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No se envió archivo" });
        }

        res.json({
            message: "Video recibido correctamente",
            file: req.file.filename,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error subiendo video" });
    }
};