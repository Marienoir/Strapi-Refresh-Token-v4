'use strict';

const { yup, validateYupSchema } = require('@strapi/utils');

const callbackBodySchema = yup.object().shape({
  identifier: yup.string().required(),
  password: yup.string().required(),
});

module.exports = {
  validateCallbackBody: validateYupSchema(callbackBodySchema)
};