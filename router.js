import xssRouter2 from "./features/xxs2.js";
import commandInjectionRouter from "./features/commandInjection.js";
import sqlInjectionRouter from "./features/sqlInjection.js";
import express from "express";
const router = express.Router();

router.use("/xss2", xssRouter2);
router.use("/commandInjection", commandInjectionRouter);
router.use("/sqlInjection", sqlInjectionRouter);

export default router;
