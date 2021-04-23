const phoneMask = (number) => {
  let result = number.split('');
  result = result.splice(3, result.length).join('');

  if (result.length >= 11) {
    result = result.replace(/^(\d\d)(\d{5})(\d{4}).*/, '($1) $2-$3');
  }

  return result;
};

export default phoneMask;
