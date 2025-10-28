/**
 * Storage utility for generating signed URLs for file upload/download
 * This is a mock implementation that generates placeholder signed URLs
 * In production, this would integrate with AWS S3, Google Cloud Storage, or Azure Blob Storage
 */

/**
 * Generate a signed URL for file upload
 * @param {string} fileName - The name of the file
 * @returns {Promise<string>} Signed URL for upload
 */
export const generateUploadSignedUrl = async (fileName: string): Promise<string> => {
    // Mock implementation - in production this would generate actual signed URLs
    const timestamp = Date.now();
    const encodedFileName = encodeURIComponent(fileName);
    return await Promise.resolve(
        `https://storage.example.com/upload/${timestamp}/${encodedFileName}?expires=${timestamp + 3600000}&signature=mock-signature`
    );
};

/**
 * Generate a signed URL for file download/viewing
 * @param {string} documentId - The document ID
 * @param {string} fileName - The name of the file
 * @returns {Promise<string>} Signed URL for download
 */
export const generateDownloadSignedUrl = async (documentId: string, fileName: string): Promise<string> => {
    // Mock implementation - in production this would generate actual signed URLs
    const timestamp = Date.now();
    const encodedFileName = encodeURIComponent(fileName);
    return await Promise.resolve(
        `https://storage.example.com/download/${documentId}/${encodedFileName}?expires=${timestamp + 3600000}&signature=mock-signature`
    );
};

/**
 * Check if file type is supported
 * @param {string} fileType - MIME type of the file
 * @param {string[]} acceptedFormats - Array of accepted MIME types
 * @returns {boolean} Whether the file type is supported
 */
export const isFileTypeSupported = (fileType: string, acceptedFormats: string[]): boolean => {
    return acceptedFormats.includes(fileType);
};

/**
 * Check if file size is within limits
 * @param {number} fileSize - Size of the file in bytes
 * @param {number} maxFileSize - Maximum allowed file size in bytes
 * @returns {boolean} Whether the file size is acceptable
 */
export const isFileSizeAcceptable = (fileSize: number, maxFileSize: number): boolean => {
    return fileSize <= maxFileSize;
};
