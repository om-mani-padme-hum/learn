const express = require(`express`)
const katex = require(`katex`)
const strapped = require(`strapped`)

const learn = require(`./index`);

const app = express()

app.get(`/`, (req, res) => {
  const test = new learn.Problem();
  
  const answer = new learn.Answer();
  
  const constant1 = new learn.Constant();
  const constant2 = new learn.Constant();
  
  constant1.maximumValue(9);
  constant2.maximumValue(9);
  
  const variable1 = new learn.Variable();
  const variable2 = new learn.Variable();
  const variable3 = new learn.Variable();

  variable1.symbols([`a`, `i`, `x`]);
  variable2.symbols([`b`, `j`, `y`]);
  variable3.symbols([`c`, `k`, `z`]);

  answer.type(learn.answerTypes.NUMBER);
  
  test.answers([answer]);
  test.constants([constant1, constant2]);
  test.description(`Adding Two Integers`);
  test.difficulty(0);
  test.latex(`$C{0}$V{0}^2 + $C{1}$V{1} + $V{2}`);
  test.path([`science`, `mathematics`, `arithmetic`, `addTwoIntegers`]);
  test.variables([variable1, variable2, variable3]);

  test.generateExampleProblem();
  
  const p = new strapped.Page();
  
  p.html();
  p.head();
  p.link().rel(`stylesheet`).href(`https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css`).attr(`integrity`, `sha384-vKruj+a13U8yHIkAyGgK1J3ArTLzrFGBbBc0tDp4ad/EyewESeXE/Iv67Aj8gKZ0`).attr(`crossorigin`, `anonymous`);

  p.body().text(test.html());
  
  res.send(p.render())
})

app.listen(3000, () => {
  console.log(`Test app listening on port 3000`)
})
