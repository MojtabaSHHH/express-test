import express from 'express';
const router = express.Router();
import textRouter from './text/text.routes';

router.use("/text", textRouter);

export default router;
