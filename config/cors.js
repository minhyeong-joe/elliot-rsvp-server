const getCorsOptions = () => ({
    origin: process.env.ALLOWED_HOST || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
});

export default getCorsOptions;