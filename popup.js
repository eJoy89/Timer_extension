let timeClear;
let second = 0;
let minute = 0;
let hour = 0;

function startTimer() {
  timeClear = setInterval(function() {
    second++;
    document.getElementById('t_sec').innerHTML = second < 10 ? '0' + second : second;

    if (second === 60) {
        second = 0;
        minute++;


        if (minute === 60) {
            minute = 0;
            hour++;
            document.getElementById('t_hour').innerHTML = hour < 10 ? '0' + hour : hour;
        }

        document.getElementById('t_min').innerHTML = minute < 10 ? '0' + minute : minute;
    }

  }, 1000);
}

function stopTimer() {
    clearInterval(timeClear);
    timeClear = null;
  }

document.getElementById('start_btn').addEventListener('click', function() {
  if (!timeClear) {
    startTimer();
    this.innerHTML = 'Stop'
  } else {
    stopTimer();
    this.innerHTML = 'Start';
  }

  document.getElementById('testing').textContent = '으아아아아악!!!!'
});

