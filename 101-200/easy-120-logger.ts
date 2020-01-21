import uuidv1 from "uuid/v1";
import winston from "winston";
const logger = winston.createLogger({
	transports: [new winston.transports.Console()],
});

setInterval(() => {
	logger.info(uuidv1());
}, 100);
