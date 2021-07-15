import Joi from 'joi';

const getUserSchema = {
	params: Joi.object({
		id: Joi.number().positive().required(),
	}),
};

export default {
	getUserSchema
};