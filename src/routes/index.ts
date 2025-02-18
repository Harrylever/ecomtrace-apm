import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
	res.send('Hello World!');
});

router.get('/integration.json', (req, res) => {
	const baseUrl = `${req.protocol}://${req.get('host')}`;

	res.status(200).json({
		data: {
			date: {
				created_at: '2025-02-18',
				updated_at: '2025-02-18',
			},
			descriptions: {
				app_name: 'EcomTrace APM',
				app_description:
					'Performance Monitoring (Speed), Real-time error tracing, Session replay, & Custom metrics (Most active store, active users)',
				app_logo: 'https://i.ibb.co/nqPvcDbk/Ecom-Trace.png',
				app_url: baseUrl,
				background_color: '#fff',
			},
			is_active: true,
			integration_type: 'output',
			integration_category: 'E-commerce & Retail',
			author: 'Onesi Ukanah',
			website: baseUrl,
			settings: [
				{
					label: 'forward-type',
					type: 'dropdown',
					options: ['error-tracing', 'speed-insights', 'session-replay'],
					default: 'error-tracing',
					required: true,
				},
			],
			tick_target: `${baseUrl}/target_url`,
		},
	});
});

export default router;
