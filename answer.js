/** Require external modules */
const ezobjects = require(`ezobjects-mysql`);

/** Create class config */
const configAnswer = {
  className: `Answer`,
  tableName: `answers`,
  properties: [
    { name: `settings`, type: `object` },
    { name: `type`, type: `tinyint` },
    { name: `value`, type: `varchar`, length: 64, store: false }
  ]
};

/** Create class */
const Answer = ezobjects.createClass(configAnswer);

/** Export config and class */
module.exports.configAnswer = configAnswer;
module.exports.Answer = Answer;
