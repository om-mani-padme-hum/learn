/** Require external modules */
const ezobjects = require(`ezobjects-mysql`);
const katex = require(`katex`);

/** Create class config */
const configProblem = {
  className: `Problem`,
  tableName: `problems`,
  properties: [
    { name: `answers`, type: `Array`, arrayOf: { type: `Answer` } },
    { name: `constants`, type: `Array`, arrayOf: { type: `Constant` } },
    { name: `description`, type: `varchar`, length: 64 },
    { name: `difficulty`, type: `tinyint` },
    { name: `errors`, type: `Array`, arrayOf: { type: `text` }, store: false },
    { name: `evaluate`, type: `function` },
    { name: `html`, type: `varchar`, length: 4096 },
    { name: `latex`, type: `varchar`, length: 2048 },
    { name: `path`, type: `Array`, arrayOf: { type: `varchar`, length: 64 } },
    { name: `variables`, type: `Array`, arrayOf: { type: `Variable` } },
  ]
};

/** Create class */
const Problem = ezobjects.createClass(configProblem);

Problem.prototype.generateExampleProblem = function () {     
  for ( const constant of this.constants() ) {
    const value1 = Math.random() * (constant.maximumValue() - constant.minimumValue()) + constant.minimumValue();
     
    let value2 = null;
     
    if ( constant.useSecondRange() )
      value2 = Math.random() * (constant.maximumValue2() - constant.minimumValue2()) + constant.minimumValue2();
     
    let finalValue = value1;
     
    if ( value2 && Math.random() < 0.5 )
      finalValue = value2;
     
    const numberDecimals = Math.floor(Math.random() * (constant.maximumNumberDecimals() - constant.minimumNumberDecimals()) + constant.minimumNumberDecimals());
     
    constant.value(Math.round(finalValue * Math.pow(10, numberDecimals)) / Math.pow(10, numberDecimals));
  }
    
  const variablesIndex = Math.floor(Math.random() * this.variables().length);
    
  for ( const variable of this.variables() )
    variable.symbol(variable.symbols()[variablesIndex]);
  
  let latex = this.latex();
  
  for ( let i = 0; i < this.constants().length; i++ ) {
    const constant = this.constants()[i];
    
    latex = latex.replaceAll(`$C{${i}}`, constant.value());
  }
  
  const symbolNumber = this.variables().length > 0 ? Math.floor(Math.random() * this.variables()[0].symbols().length) : 0;

  for ( let i = 0; i < this.variables().length; i++ ) {
    const variable = this.variables()[i];
      
    latex = latex.replaceAll(`$V{${i}}`, variable.symbols()[symbolNumber]);
  }
  
  console.log(latex);

  this.html(katex.renderToString(latex));
};

/** Export config and class */
module.exports.configProblem = configProblem;
module.exports.Problem = Problem;
