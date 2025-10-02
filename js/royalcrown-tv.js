document.addEventListener('DOMContentLoaded', () => {
  setUpNavCollapse();
  setUpMeetingWidgets();
});

function setUpNavCollapse() {
  const nav = document.querySelector('header nav');
  const navLinks = nav ? nav.querySelectorAll('a') : [];

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (nav && nav.classList.contains('show')) {
        nav.classList.remove('show');
      }
    });
  });
}

const TIME_ZONE = 'Africa/Johannesburg';
const MEETING_DAYS = [2, 3]; // Tuesday, Wednesday
const MEETING_HOUR = 20;
const MEETING_MINUTE = 15;
const QUIET_START_MIN = MEETING_HOUR * 60 + 13; // 20:13
const QUIET_END_MIN = 22 * 60; // 22:00

function setUpMeetingWidgets() {
  const countdownContainer = document.getElementById('countdownContainer');
  const countdownTime = document.getElementById('countdownTime');
  const musicToggle = document.getElementById('musicToggle');
  const musicStatus = document.getElementById('musicStatus');
  const quietNotice = document.getElementById('quietNotice');
  const audio = document.getElementById('waitingAudio');

  if (!countdownContainer || !countdownTime || !musicToggle || !audio) {
    return;
  }

  const updateUi = () => {
    const now = getNowInSAST();
    const isMeetingDay = MEETING_DAYS.includes(now.getDay());
    const nextMeeting = getNextMeeting(now);

    if (isMeetingDay && nextMeeting) {
      countdownContainer.hidden = false;
      updateCountdownDisplay(nextMeeting, now, countdownTime);
    } else {
      countdownContainer.hidden = true;
    }

    updateMusicControls(now, audio, musicToggle, musicStatus, quietNotice);
  };

  updateUi();
  setInterval(updateUi, 1000);

  musicToggle.addEventListener('click', () => {
    if (musicToggle.disabled) {
      return;
    }

    if (audio.paused) {
      audio.play()
        .then(() => {
          musicToggle.textContent = 'Pause music';
          musicStatus.textContent = 'Enjoy the worship while you wait.';
        })
        .catch(() => {
          musicStatus.textContent = 'Tap play to enable audio in your browser.';
        });
    } else {
      audio.pause();
      audio.currentTime = 0;
      musicToggle.textContent = 'Play music while you wait';
      musicStatus.textContent = 'Music paused.';
    }
  });

  audio.addEventListener('ended', () => {
    musicToggle.textContent = 'Play music while you wait';
    musicStatus.textContent = 'Music paused.';
  });
}

function getNowInSAST() {
  const now = new Date();
  const localeString = now.toLocaleString('en-US', { timeZone: TIME_ZONE });
  return new Date(localeString);
}

function getNextMeeting(now) {
  for (let i = 0; i < 8; i += 1) {
    const candidate = new Date(now);
    candidate.setDate(now.getDate() + i);
    candidate.setHours(MEETING_HOUR, MEETING_MINUTE, 0, 0);

    const candidateDay = candidate.getDay();
    if (!MEETING_DAYS.includes(candidateDay)) {
      continue;
    }

    if (candidate > now) {
      return candidate;
    }
  }

  return null;
}

function updateCountdownDisplay(target, now, outputEl) {
  const diffMs = target - now;
  const clamped = Math.max(diffMs, 0);
  const totalSeconds = Math.floor(clamped / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  outputEl.textContent = [hours, minutes, seconds]
    .map((unit) => unit.toString().padStart(2, '0'))
    .join(':');
}

function updateMusicControls(now, audio, button, statusEl, noticeEl) {
  const isQuiet = isQuietPeriod(now);

  if (isQuiet) {
    if (!audio.paused) {
      audio.pause();
      audio.currentTime = 0;
    }
    button.disabled = true;
    button.textContent = 'Play music while you wait';
    statusEl.textContent = 'Music is paused during the live meeting window.';
    if (noticeEl) {
      noticeEl.hidden = false;
    }
    return;
  }

  if (noticeEl) {
    noticeEl.hidden = true;
  }

  button.disabled = false;

  if (audio.paused) {
    button.textContent = 'Play music while you wait';
    statusEl.textContent = 'Tap play to enjoy worship while you wait.';
  } else {
    button.textContent = 'Pause music';
    statusEl.textContent = 'Enjoy the worship while you wait.';
  }
}

function isQuietPeriod(now) {
  const day = now.getDay();
  if (!MEETING_DAYS.includes(day)) {
    return false;
  }

  const minutes = now.getHours() * 60 + now.getMinutes();
  return minutes >= QUIET_START_MIN && minutes < QUIET_END_MIN;
}
