'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line !== '' && line.indexOf(':') !== -1 && line !== ';');

  const style = {};

  lines.forEach((line) => {
    const i = line.indexOf(':');

    if (i === -1) {
      return;
    }

    const key = line.slice(0, i).trim();
    const value = line
      .slice(i + 1)
      .replace(/;$/, '')
      .trim();

    style[key] = value;
  });

  return style;
}

convertToObject();

module.exports = convertToObject;
