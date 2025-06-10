const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const progress = document.getElementById('progress');

// 播放/暂停功能
playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = '暂停';
    } else {
        audio.pause();
        playPauseButton.textContent = '播放';
    }
});

// 更新进度条
audio.addEventListener('timeupdate', () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = percent + '%';
});

// 这里“上一首”和“下一首”暂时没有实际功能，可按需扩展
document.getElementById('prev').addEventListener('click', () => {
    console.log('上一首');
});

document.getElementById('next').addEventListener('click', () => {
    console.log('下一首');
});