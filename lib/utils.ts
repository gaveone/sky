import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

import { v4 as uuidv4 } from 'uuid';

type FileDetails = {
  id: string,
  path: string,
  name: string,
  type: string,
  size: number,
};

export function toFileAsBase64(file: File): Promise<FileDetails> {
  return new Promise<FileDetails>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const uuid = uuidv4();
      const buffer: FileDetails = {
        path: reader.result as string,
        name: file.name,
        type: file.type,
        size: file.size,
        id: uuid
      };
      resolve(buffer);
    };

    reader.onerror = (error) => reject(error);
  });
}



function StudentNumberGenerator() {
  return Math.floor(Math.random() * 9999999999)
}
