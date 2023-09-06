/** Require external modules */
const ezobjects = require(`ezobjects-mysql`);

/** Create class config */
const configConstant = {
  className: `Constant`,
  tableName: `Constants`,
  properties: [
    { name: `maximumNumberDecimals`, type: `double` },
    { name: `maximumNumberDecimals2`, type: `double` },
    { name: `maximumValue`, type: `double` },
    { name: `maximumValue2`, type: `double` },
    { name: `minimumNumberDecimals`, type: `double` },
    { name: `minimumNumberDecimals2`, type: `double` },
    { name: `minimumValue`, type: `double` },
    { name: `minimumValue2`, type: `double` },
    { name: `useSecondRange`, type: `boolean` },
    { name: `value`, type: `varchar`, length: 64, store: false }
  ]
};

/** Create class */
const Constant = ezobjects.createClass(configConstant);

/** Export config and class */
module.exports.configConstant = configConstant;
module.exports.Constant = Constant;
