const Multer = require('multer');

const imageUpload = Multer({
    storage: Multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        if (["image/png", "image/jpg", "image/jpeg"].includes(file.mimetype)) cb(null, true);
        else cb(new Error("Image format not supported"))
    }
});

module.exports= imageUpload;