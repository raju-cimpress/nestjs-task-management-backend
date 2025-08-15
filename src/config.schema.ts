import * as Joi from '@hapi/joi';
import { TaskStatus } from './tasks/task-status.enum';

export const configValidationSchema = Joi.object({
  STAGE: Joi.string().required(),
  DEFAULT_TASK_STATUS: Joi.string().default(TaskStatus.OPEN).required(),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().default(5432).required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_DATABASE: Joi.string().required(),
  JWT_SECRECT: Joi.string().required(),
});
