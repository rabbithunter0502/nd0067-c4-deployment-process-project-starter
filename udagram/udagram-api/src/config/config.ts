import * as dotenv from "dotenv";
dotenv.config();

// ENV variables
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  username: `${process.env.POSTGRES_USERNAME}`,
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: process.env.AWS_BUCKET,
  aws_access_key_id:process.env.AWS_ACCESS_KEY_ID,
  aws_secret_access_key:process.env.AWS_SECRET_ACCESS_KEY,
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
