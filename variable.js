/** Require external modules */
const ezobjects = require(`ezobjects-mysql`);

/** Create class config */
const configVariable = {
  className: `Variable`,
  tableName: `Variables`,
  properties: [
    { name: `assumedConstant`, type: `false` },
    { name: `symbol`, type: `varchar`, length: 1 },
    { name: `symbols`, type: `Array`, arrayOf: { type: `varchar`, length: 2 } }
  ]
};

/** Create class */
const Variable = ezobjects.createClass(configVariable);

/** Export config and class */
module.exports.configVariable = configVariable;
module.exports.Variable = Variable;
