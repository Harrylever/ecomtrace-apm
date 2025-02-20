import express from 'express';
import axios from 'axios';
import logger from '../config/logger';
import config from '../config/env';

const router = express.Router();

interface ErrorTracingDto {
	message?: string;
	settings?: { label?: string; default?: string }[];
}

router.post('/target_url', async (req, res) => {
	const { message, settings } = req.body as ErrorTracingDto;
	const repeater_type = settings?.filter(
		(setting) => setting.label === 'forward-type'
	)?.[0].default;

	if (!repeater_type) {
		res.status(400).json({
			error: 'forward-type setting is required',
		});
		return;
	}

	const webhookUrl = `${config.apmWebsiteApiUrl}/receive-repeater?forward_type=${repeater_type}`;

	try {
		const response = await axios.post(
			webhookUrl,
			{
				message,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		res.status(200).json({ status: 'success', webhookResponse: response.data });
	} catch (error) {
		logger.error('Failed to send webhook:', (error as Error).message);
		res.status(500).json({ error: 'Failed to send webhook' });
	}
});

export default router;
