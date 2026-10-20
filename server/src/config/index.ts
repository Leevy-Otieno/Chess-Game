import { config } from 'dotenv';
import path from 'path';

const envMode = process.env.NODE_ENV || 'development';

// )
config({ path: path.resolve(process.cwd(), `.env.${envMode}.local`) });


config({ path: path.resolve(process.cwd(), '.env') });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';


export const {
  NODE_ENV = envMode,
  PORT = '5000', // Safely defaults to 5000 if undefined
  DB_HOST,
  DB_PORT,
  DB_DATABASE,
  SECRET_KEY = 'fallback_secret_key_for_chess_game',
  LOG_FORMAT,
  ORIGIN = 'http://localhost:3000',
  MONGODB_URI
} = process.env;
