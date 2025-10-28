import multer from 'multer';
// Configure multer for memory storage (files will be stored in memory as Buffer)
// In production, you might want to use disk storage or stream directly to cloud storage
const storage = multer.memoryStorage();
// Configure multer with file size limits and file filter
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 50 * 1024 * 1024, // 50MB max file size (will be validated against document type limits)
        files: 1 // Only allow 1 file per upload
    },
    fileFilter: (req, file, cb) => {
        // Basic file type validation - more specific validation happens in the service
        const allowedTypes = [
            'application/pdf',
            'image/jpeg',
            'image/jpg',
            'image/png',
            'image/gif',
            'image/webp',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'text/plain',
            'text/csv',
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        ];
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        }
        else {
            cb(new Error(`Unsupported file type: ${file.mimetype}`));
        }
    }
});
export default upload;
