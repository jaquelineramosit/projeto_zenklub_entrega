import rateLimit from 'express-rate-limit';

const ONE_HOUR = 60 * 60 * 1000;

export default rateLimit({
    max: 10,
    windowMs: ONE_HOUR,
    message: 'Too many requests from this IP, please wait one hour to try again',
});