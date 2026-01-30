function buka() {
  document.querySelector('.cover').style.display = 'none';
  document.getElementById('isi').style.display = 'block';
  document.getElementById('audio').play();
}

// Nama tamu dari URL
const params = new URLSearchParams(window.location.search);
const nama = params.get("to");
if (nama) {
  document.getElementById("namaTamu").innerText = nama;
}
function toggleMusic() {
  const audio = document.getElementById('audio');
  const btn = document.getElementById('musicBtn');

  if (audio.paused) {
    audio.play();
    btn.innerHTML = "🔊";
  } else {
    audio.pause();
    btn.innerHTML = "🔇";
  }
}
