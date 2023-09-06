/** Require external modules */
const ezobjects = require(`ezobjects-mysql`);

/** Require local modules */
const answer = require(`./answer`);

/** Create class config */
const configMultipleChoiceAnswer = {
  className: `MultipleChoiceAnswer`,
  tableName: `multiple_choice_answers`,
  extends: answer.Answser,
  extendsConfig: answer.configAnswer,
  properties: [
    { name: `choices`, type: `Array`, arrayOf: { type: `varchar`, length: 64 } }
  ]
};

/** Create class */
const MultipleChoiceAnswer = ezobjects.createClass(configMultipleChoiceAnswer);

/** Export config and class */
module.exports.configMultipleChoiceAnswer = configMultipleChoiceAnswer;
module.exports.MultipleChoiceAnswer = MultipleChoiceAnswer;
