function addZombie() {
  var div = document.createElement('div');
  div.setAttribute('id', 'zombie');

  div.addEventListener('click', function (e) {
    div.parentNode.removeChild(div);
  });

  document.body.appendChild(div);
}
addZombie();
