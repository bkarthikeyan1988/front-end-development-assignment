function checkBrackets(str) {
  var opens = str.match(/\(/g) || [],
    closes = str.match(/\)/g) || [];
  return opens.length === closes.length;
}

Array.prototype.forEach.call(document.getElementsByTagName('li'), function(li) {
  li.classList.add(checkBrackets(li.textContent) ? 'valid' : 'invalid');
});