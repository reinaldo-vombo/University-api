import path from "path";

/**
 * Extracts a clean relative path from an uploaded multer file.
 * Assumes multer already saved the file using diskStorage.
 */
export const saveUploadedFiles = (file?: Express.Multer.File): string | null => {
  if (!file) return null;

  // Example: remove "public/" from the start of the path
  const relativePath = path.relative("storage", file.path);
  return relativePath.replace(/\\/g, "/"); // for Windows compatibility
};