const multer = require("multer");
const SharpMulter  =  require("sharp-multer");

const storage =  
 SharpMulter ({
              destination:(req, file, callback) =>callback(null, "images"),
              imageOptions:{
               fileFormat: "jpg",
               quality: 80,
               resize: { width: 500, height: 500 },
                 }
           });
const upload  =  multer({ storage });
module.exports = upload