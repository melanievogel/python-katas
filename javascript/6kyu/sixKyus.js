function toCamelCase(str) {
  var result = '';

  if (str == '') {
    return '';
  }

  result = str.replace(/[_|-][A-Z]/gmi, function (a, b) {
    var letter = '';
    if (a.includes('_')) {
      letter = a.split('_')[1].toUpperCase()
    }
    if (a.includes('-')) {
      letter = a.split('-')[1].toUpperCase()
    }

    return letter;

  });

  return result;

}

module.exports = {
  toCamelCase,
}