import multer from 'multer';
import { extname, resolve } from 'path';
import crypto from 'crypto';
import { promisify } from 'util';

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'uploads'),
    filename: (req, file, cb) => {
      return cb(
        null,
        crypto.randomBytes(16).toString('hex') + extname(file.originalname)
      );
    },
  }),
};
