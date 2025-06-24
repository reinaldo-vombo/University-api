import multer from "multer";
import path from "path";
import fs from "fs";
import { validateMIMEType } from 'validate-image-type';

export const uploadFiles = (
   sub_folder_name: string,
   file_size_limit: number = 2000000,
   allowed_file_types: string[] = ["image/png", "image/jpg", "image/jpeg"]
 ) => {
   const UPLOAD_FOLDER = path.join("storage", sub_folder_name);
 
   // Function to create folder if it doesn't exist
   const createFolderIfNotExist = (folderPath: string) => {
     if (!fs.existsSync(folderPath)) {
       fs.mkdirSync(folderPath, { recursive: true });
     }
   };
 
   // Multer upload destination and file name
   const storage = multer.diskStorage({
     destination: (req, file, cb) => {
       const folderPath = path.join(process.cwd(), UPLOAD_FOLDER);
       createFolderIfNotExist(folderPath); // Create folder if it doesn't exist
       cb(null, folderPath);
     },
     filename: (req, file, cb) => {
       const fileExt = path.extname(file.originalname);
       const fileName =
         file.originalname.replace(fileExt, "").toLowerCase().split(" ").join("-") +
         Date.now() +
         fileExt;
       cb(null, fileName);
     },
   });
 
   // Return multer middleware with the upload configuration
   return multer({
     storage,
     limits: { fileSize: file_size_limit },
     fileFilter(req, file, cb) {
       if (allowed_file_types.includes(file.mimetype)) {
         cb(null, true);
       } else {
         cb(new Error("The file format is not allowed!"));
       }
     },
   });
 };
 
 // Middleware to validate image after file upload
 export const validateImageAfterUpload = async (req: any, res: any, next: any) => {
   try {
     const validationResult = await validateMIMEType(req.file.path, {
       originalFilename: req.file.originalname,
       allowMimeTypes: ["image/jpeg", "image/png", "image/jpg"],
     });
 
     console.log('validationResult', validationResult);
     if (!validationResult.ok) {
       return res.status(400).send('Invalid image type');
     }
     // Proceed with the next middleware or logic
     next();
   } catch (error) {
     console.error('Image validation failed', error);
     return res.status(500).send('Error validating image type');
   }
 };