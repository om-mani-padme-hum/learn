module.exports = require(`./constants`);

const answer = require(`./answer`);
const constant = require(`./constant`);
const multipleChoiceAnswer = require(`./multiple-choice-answer`);
const problem = require(`./problem`);
const variable = require(`./variable`);

module.exports.configAnswer = answer.configAnswer;
module.exports.configConstant = constant.configConstant;
module.exports.configMultipleChoiceAnswer = answer.configMultipleChoiceAnswer;
module.exports.configProblem = problem.configProblem;
module.exports.configVariable = variable.configVariable;

module.exports.Answer = answer.Answer;
module.exports.Constant = constant.Constant;
module.exports.MultipleChoiceAnswer = answer.MultipleChoiceAnswer;
module.exports.Problem = problem.Problem;
module.exports.Variable = variable.Variable;
