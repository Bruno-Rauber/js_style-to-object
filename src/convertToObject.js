'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = sourceString
    .split('\n')
    .map((line) => line.trim())
    .filter((item) => item !== '' && item !== ';');

  const indexToPoints = result.map((item) => item.indexOf(':'));

  const resultObj = {};

  for (let i = 0; i < result.length; i++) {
    const key = result[i].slice(0, indexToPoints[i]);
    let value = result[i].slice(indexToPoints[i] + 1);

    if (value[value.length - 1] === ';') {
      value = value.slice(0, -1).trim();
    }

    resultObj[key.trim()] = value.trim();
  }

  return resultObj;
}

convertToObject(`
  background-color:      #fff;
-webkit-border-radius: 5px;
  border-radius     : 5px;
  border: 1px solid #e8e8e8;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  clear   : both       ;
  cursor: pointer;
  float: left;
  font-family: inherit;
      font-size: 14px;
  font-weight: 400;
  height: 42px;
  line-height:    40px;
  outline: 0;
  padding-left    : 18px;
  padding-right: 30px;
  ;

  ;
  position: relative;


  text-align: left !important;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;


  white-space: nowrap;
  width: auto;
`);

module.exports = convertToObject;
