function SendMail(){
    var input = document.getElementById("input").value;
    window.location.href = "mailto:yonman2@gmail.com ?subject=Mail to Braha&body="+input;
  }

function addEmoji(emoji) {
let inputEle = document.getElementById('input');
input.value += emoji;
}

function toggleEmojiDrawer() {
  let drawer = document.getElementById('drawer');
  
  if (drawer.classList.contains('hidden')) {
    drawer.classList.remove('hidden');
  } else {
    drawer.classList.add('hidden');
  }
}
 