document.addEventListener('DOMContentLoaded', () => {
  setUpNavCollapse();
  setUpMeetingWidgets();
  setUpCopyButtons();
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
const MEETING_PREP_LEAD_MINUTES = 5; // Show inline meeting 5 minutes before start
const INLINE_OPEN_MIN = Math.max(MEETING_HOUR * 60 + MEETING_MINUTE - MEETING_PREP_LEAD_MINUTES, 0);
const QUIET_START_MIN = MEETING_HOUR * 60 + 13; // 20:13
const QUIET_END_MIN = 22 * 60; // 22:00

let inlineMeetingLoaded = false;

function setUpMeetingWidgets() {
  const countdownContainer = document.getElementById('countdownContainer');
  const countdownTime = document.getElementById('countdownTime');
  const musicToggle = document.getElementById('musicToggle');
  const musicStatus = document.getElementById('musicStatus');
  const quietNotice = document.getElementById('quietNotice');
  const audio = document.getElementById('waitingAudio');
  const inlineContainer = document.getElementById('inlineZoomContainer');
  const inlineFrame = document.getElementById('inlineZoomFrame');
  const inlineStatus = document.getElementById('inlineZoomStatus');
  let defaultInlineStatus = '';

  if (inlineStatus) {
    defaultInlineStatus = inlineStatus.dataset.defaultMessage
      || inlineStatus.textContent
      || `The meeting will open here at ${formatMinutesLabel(INLINE_OPEN_MIN)} (SAST) on meeting nights.`;
    inlineStatus.dataset.defaultMessage = defaultInlineStatus;
    inlineStatus.textContent = defaultInlineStatus;
  }

  if (!countdownContainer || !countdownTime || !musicToggle || !audio) {
    return;
  }

  const updateUi = () => {
    const now = getNowInSAST();
    const nextMeeting = getNextMeeting(now);
    const inlineVisible = shouldDisplayInlineMeeting(now);
    const minutesUntilMeeting = nextMeeting ? Math.floor((nextMeeting - now) / 60000) : null;
    const nextMeetingIsToday = Boolean(nextMeeting) && nextMeeting.getDay() === now.getDay();
    const shouldShowCountdown = nextMeetingIsToday
      && minutesUntilMeeting !== null
      && minutesUntilMeeting > MEETING_PREP_LEAD_MINUTES
      && !inlineVisible;

    if (inlineStatus) {
      if (inlineVisible) {
        inlineStatus.textContent = 'Meeting ready - click Join Meeting in the panel below.';
      } else {
        inlineStatus.textContent = defaultInlineStatus;
      }
    }

    if (inlineContainer) {
      if (inlineVisible) {
        showInlineMeeting(inlineContainer, inlineFrame);
      } else {
        inlineContainer.hidden = true;
      }
    }

    if (shouldShowCountdown) {
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

function setUpCopyButtons() {
  const buttons = document.querySelectorAll('.tv-copy-button');

  if (!buttons.length) {
    return;
  }

  const feedbackEl = document.getElementById('copyFeedback');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      handleCopyButtonClick(button, feedbackEl);
    });
  });
}

function handleCopyButtonClick(button, feedbackEl) {
  const targetId = button.dataset.copyTarget;
  if (!targetId) {
    return;
  }

  const target = document.getElementById(targetId);
  if (!target) {
    return;
  }

  const text = target.textContent.trim();
  if (!text) {
    return;
  }

  const label = button.dataset.copyLabel || 'Details';
  const originalText = button.textContent;

  button.disabled = true;

  copyTextToClipboard(text)
    .then(() => {
      button.textContent = 'Copied!';
      if (feedbackEl) {
        feedbackEl.textContent = `${label} copied to clipboard.`;
      }

      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        if (feedbackEl) {
          feedbackEl.textContent = '';
        }
      }, 2000);
    })
    .catch(() => {
      if (feedbackEl) {
        feedbackEl.textContent = `Copy failed. Please copy the ${label.toLowerCase()} manually.`;
      }
      button.disabled = false;
      button.textContent = originalText;
    });
}

// Copy helper with fallback for legacy clipboard APIs.
function copyTextToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text);
  }

  return new Promise((resolve, reject) => {
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.setAttribute('readonly', '');
      textArea.style.position = 'absolute';
      textArea.style.left = '-9999px';
      document.body.appendChild(textArea);
      textArea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      if (successful) {
        resolve();
      } else {
        reject(new Error('Copy command was unsuccessful.'));
      }
    } catch (error) {
      reject(error);
    }
  });
}

function shouldDisplayInlineMeeting(now) {
  const day = now.getDay();
  if (!MEETING_DAYS.includes(day)) {
    return false;
  }

  const minutes = now.getHours() * 60 + now.getMinutes();
  return minutes >= INLINE_OPEN_MIN && minutes < QUIET_END_MIN;
}

function showInlineMeeting(container, frame) {
  if (container.hidden) {
    container.hidden = false;
  }

  if (!inlineMeetingLoaded && container.dataset.zoomSrc && frame) {
    frame.src = container.dataset.zoomSrc;
    inlineMeetingLoaded = true;
  }
}

function formatMinutesLabel(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60) % 24;
  const minutes = totalMinutes % 60;
  return [hours, minutes]
    .map((unit) => unit.toString().padStart(2, '0'))
    .join(':');
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
