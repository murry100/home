
console.log(chrome.storage)



document.getElementById('loginBtn').addEventListener('click', function () {
  if (document.getElementById('account').value && document.getElementById('password').value) {
    alert(localStorage)
    document.getElementById('loginPanel').style.display = 'none';
    document.getElementById('menuPanel').style.display = 'flex';
  } else {
    fetch('https://aws.amazon.com').then(res => res.text()).then(text => {
      alert(text)
    }).catch(e => {
      alert(e)
    })
  }
});

document.getElementById('awsBtn').addEventListener('click', function () {
  chrome.tabs.create({ url: 'https://aws.amazon.com' });
});