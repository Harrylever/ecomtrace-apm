import * as dotenv from 'dotenv';

dotenv.config();

const config = {
	port: process.env.PORT || 3002,
	nodeEnv: process.env.NODE_ENV || 'development',
	logLevel: process.env.LOG_LEVEL || 'info',
	apmWebsiteUrl: process.env.APP_WEBSITE_URL,
	apmWebsiteApiUrl: process.env.APM_WEBSITE_API_URL,
};

export default config;
