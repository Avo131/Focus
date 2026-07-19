/* ============ Utils ============ */
const $ = (sel) => document.querySelector(sel);
const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
const fmtTime = (secs) => {
  secs = Math.max(0, Math.round(secs));
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
};

/* ============ i18n ============ */
const STRINGS = {
  fr: {
    appTitleTag: 'Focus. — Studio Pomodoro',
    presetPanelTitle: 'Type de Pomodoro',
    sessionsToday: "session(s) aujourd'hui",
    statsBtnTitle: 'Statistiques',
    bgBtnTitle: "Changer l'ambiance",
    settingsBtnTitle: 'Réglages',
    resetBtnTitle: 'Réinitialiser',
    skipBtnTitle: 'Passer au suivant',
    startBtnStart: 'Démarrer',
    startBtnPause: 'Pause',
    addTracksBtnTitle: 'Ajouter des morceaux',
    plModeUnique: 'Playlist unique',
    plModePerPhase: 'Playlist par phase',
    phaseFocus: 'Focus',
    phaseShort: 'Pause courte',
    phaseLong: 'Pause longue',
    readonlyNote: 'Cette playlist se lira automatiquement au démarrage de cette phase.',
    shuffleTitle: 'Aléatoire',
    prevTitle: 'Précédent',
    playPauseTitle: 'Lecture/Pause',
    nextTitle: 'Suivant',
    repeatTitle: 'Répéter',
    statsModalTitle: 'Statistiques',
    settingsModalTitle: 'Réglages',
    addTrackModalTitle: 'Ajouter des morceaux',
    bgModalTitle: 'Ambiance',
    fieldLanguage: 'Langue',
    fieldFocusDuration: 'Durée Focus (min)',
    fieldShortDuration: 'Pause courte (min)',
    fieldLongDuration: 'Pause longue (min)',
    fieldInterval: 'Pause longue toutes les (sessions)',
    fieldSound: 'Son de fin de session',
    resetDurationsBtn: 'Réinitialiser les durées par défaut',
    saveSettingsBtn: 'Enregistrer',
    dropzoneMain: 'Glisse tes morceaux ici',
    dropzoneSub: 'ou clique pour parcourir',
    bgModalHint: 'Choisis un fond différent pour chaque phase : dégradé, image ou vidéo animée.',
    presetAurora: 'Aurore',
    presetDusk: 'Crépuscule',
    presetForest: 'Forêt',
    presetOcean: 'Océan',
    presetRose: 'Rosé',
    presetMidnight: 'Minuit',
    uploadImageBtn: 'Importer une image',
    uploadVideoBtn: 'Importer une vidéo',
    removeCustomBgBtn: 'Retirer le fond personnalisé de cette phase',
    presetClassic: 'Classique',
    presetExtended: 'Étendu',
    presetDeep: 'Deep Work',
    presetSprint: 'Sprint',
    minSuffix: 'min',
    emptyPlaylistGeneric: "Aucun morceau pour l'instant.",
    emptyPlaylistForPhase: (phase) => `Aucun morceau pour ${phase.toLowerCase()} pour l'instant.`,
    audioNotRecognized: 'Aucun fichier audio reconnu (formats acceptés : mp3, wav, m4a, aac, flac, ogg, opus...).',
    imageTooLarge: 'Cette image est trop lourde (max ~15 Mo). Choisis une image plus légère.',
    videoTooLarge: 'Cette vidéo est trop lourde (max ~80 Mo). Choisis un fichier plus léger.',
    notificationBody: (phase) => `${phase} terminé !`,
    dayAbbrev: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
    statsSummary: (n, hoursStr) => `<strong>${n}</strong> session${n !== 1 ? 's' : ''} cette semaine · <strong>${hoursStr}</strong> de focus`,
    bgCurrentImage: 'Fond actuel : image importée',
    bgCurrentVideo: 'Fond actuel : vidéo importée',
    bgCurrentGradient: 'Fond actuel : dégradé',
    removeTrackTitle: 'Retirer',
    spotifyLinkLabel: 'Playlist Spotify (lien de partage)',
    spotifyLinkPlaceholder: 'https://open.spotify.com/playlist/...',
    spotifyLinkAddBtn: 'Ajouter',
    spotifyLinkInvalid: 'Lien de playlist Spotify non reconnu.',
    spotifyLinkRemoveBtn: 'Retirer cette playlist Spotify',
    spotifyLinkAdded: 'Playlist Spotify ajoutée — chargement du lecteur…',
    spotifyWidgetLoading: 'Chargement du lecteur Spotify…',
    spotifyWidgetLoadError: 'Le lecteur Spotify met du temps à répondre (bloqueur de script ?). Réessaie ou vérifie ta connexion.',
    pinterestLinkLabel: "Fond depuis un lien d'image (ex. Pinterest)",
    pinterestLinkPlaceholder: 'https://i.pinimg.com/...',
    pinterestLinkAddBtn: 'Ajouter',
    pinterestLinkHint: 'Sur Pinterest : clic droit sur l\'image de l\'épingle → "Copier l\'adresse de l\'image".',
    pinterestLinkInvalid: "Lien non reconnu (doit commencer par http:// ou https://).",
    pinterestLinkLoading: 'Chargement de l\'image…',
    pinterestLinkError: "Impossible de charger cette image. Vérifie le lien (utilise l'adresse de l'image, pas celle de la page).",
    pinterestLinkAdded: 'Fond mis à jour depuis le lien.',
    bgCurrentPinterest: 'Fond actuel : image depuis un lien',
  },
  en: {
    appTitleTag: 'Focus. — Pomodoro Studio',
    presetPanelTitle: 'Pomodoro Type',
    sessionsToday: 'session(s) today',
    statsBtnTitle: 'Statistics',
    bgBtnTitle: 'Change the ambiance',
    settingsBtnTitle: 'Settings',
    resetBtnTitle: 'Reset',
    skipBtnTitle: 'Skip to next',
    startBtnStart: 'Start',
    startBtnPause: 'Pause',
    addTracksBtnTitle: 'Add tracks',
    plModeUnique: 'Single playlist',
    plModePerPhase: 'Playlist per phase',
    phaseFocus: 'Focus',
    phaseShort: 'Short break',
    phaseLong: 'Long break',
    readonlyNote: 'This playlist will start automatically when this phase begins.',
    shuffleTitle: 'Shuffle',
    prevTitle: 'Previous',
    playPauseTitle: 'Play/Pause',
    nextTitle: 'Next',
    repeatTitle: 'Repeat',
    statsModalTitle: 'Statistics',
    settingsModalTitle: 'Settings',
    addTrackModalTitle: 'Add tracks',
    bgModalTitle: 'Ambiance',
    fieldLanguage: 'Language',
    fieldFocusDuration: 'Focus duration (min)',
    fieldShortDuration: 'Short break (min)',
    fieldLongDuration: 'Long break (min)',
    fieldInterval: 'Long break every (sessions)',
    fieldSound: 'End-of-session sound',
    resetDurationsBtn: 'Reset durations to default',
    saveSettingsBtn: 'Save',
    dropzoneMain: 'Drop your tracks here',
    dropzoneSub: 'or click to browse',
    bgModalHint: 'Choose a different background for each phase: gradient, image, or animated video.',
    presetAurora: 'Aurora',
    presetDusk: 'Dusk',
    presetForest: 'Forest',
    presetOcean: 'Ocean',
    presetRose: 'Rose',
    presetMidnight: 'Midnight',
    uploadImageBtn: 'Import an image',
    uploadVideoBtn: 'Import a video',
    removeCustomBgBtn: "Remove this phase's custom background",
    presetClassic: 'Classic',
    presetExtended: 'Extended',
    presetDeep: 'Deep Work',
    presetSprint: 'Sprint',
    minSuffix: 'min',
    emptyPlaylistGeneric: 'No tracks yet.',
    emptyPlaylistForPhase: (phase) => `No tracks for ${phase} yet.`,
    audioNotRecognized: 'No recognized audio file (accepted formats: mp3, wav, m4a, aac, flac, ogg, opus...).',
    imageTooLarge: 'This image is too large (max ~15 MB). Choose a lighter image.',
    videoTooLarge: 'This video is too large (max ~80 MB). Choose a lighter file.',
    notificationBody: (phase) => `${phase} finished!`,
    dayAbbrev: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    statsSummary: (n, hoursStr) => `<strong>${n}</strong> session${n !== 1 ? 's' : ''} this week · <strong>${hoursStr}</strong> of focus`,
    bgCurrentImage: 'Current background: imported image',
    bgCurrentVideo: 'Current background: imported video',
    bgCurrentGradient: 'Current background: gradient',
    removeTrackTitle: 'Remove',
    spotifyLinkLabel: 'Spotify playlist (share link)',
    spotifyLinkPlaceholder: 'https://open.spotify.com/playlist/...',
    spotifyLinkAddBtn: 'Add',
    spotifyLinkInvalid: 'Unrecognized Spotify playlist link.',
    spotifyLinkRemoveBtn: 'Remove this Spotify playlist',
    spotifyLinkAdded: 'Spotify playlist added — loading player…',
    spotifyWidgetLoading: 'Loading Spotify player…',
    spotifyWidgetLoadError: 'The Spotify player is taking a while to respond (blocked by an extension?). Try again or check your connection.',
    pinterestLinkLabel: 'Background from an image link (e.g. Pinterest)',
    pinterestLinkPlaceholder: 'https://i.pinimg.com/...',
    pinterestLinkAddBtn: 'Add',
    pinterestLinkHint: 'On Pinterest: right-click the pin\'s image → "Copy image address".',
    pinterestLinkInvalid: 'Unrecognized link (must start with http:// or https://).',
    pinterestLinkLoading: 'Loading image…',
    pinterestLinkError: "Couldn't load this image. Check the link (use the image's address, not the page's).",
    pinterestLinkAdded: 'Background updated from the link.',
    bgCurrentPinterest: 'Current background: image from a link',
  },
};

let lang = localStorage.getItem('pomodoro_lang') || 'fr';
function t(key, ...args) {
  const entry = (STRINGS[lang] && STRINGS[lang][key] !== undefined) ? STRINGS[lang][key] : STRINGS.fr[key];
  return typeof entry === 'function' ? entry(...args) : entry;
}

/* ============ IndexedDB (playlist + backgrounds storage) ============ */
const DB_NAME = 'pomodoro-playlist';
const DB_VERSION = 2;
const STORE = 'tracks';
const STORE_BG = 'backgrounds';
let dbPromise = new Promise((resolve, reject) => {
  const req = indexedDB.open(DB_NAME, DB_VERSION);
  req.onupgradeneeded = () => {
    const db = req.result;
    if (!db.objectStoreNames.contains(STORE)) {
      db.createObjectStore(STORE, { keyPath: 'id', autoIncrement: true });
    }
    if (!db.objectStoreNames.contains(STORE_BG)) {
      db.createObjectStore(STORE_BG, { keyPath: 'mode' });
    }
  };
  req.onsuccess = () => {
    const db = req.result;
    // another tab holding an older version would otherwise block future upgrades forever
    db.onversionchange = () => db.close();
    resolve(db);
  };
  req.onerror = () => reject(req.error);
  req.onblocked = () => console.warn('Mise à niveau IndexedDB bloquée par un autre onglet ouvert sur ce site — ferme-le puis recharge la page.');
});

async function dbAddTrack(name, blob, scope) {
  const db = await dbPromise;
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite');
    const req = tx.objectStore(STORE).add({ name, blob, scope });
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
async function dbGetAllTracks() {
  const db = await dbPromise;
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readonly');
    const req = tx.objectStore(STORE).getAll();
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
async function dbDeleteTrack(id) {
  const db = await dbPromise;
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite');
    const req = tx.objectStore(STORE).delete(id);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}
async function dbSetBackground(modeKey, kind, blob) {
  const db = await dbPromise;
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_BG, 'readwrite');
    tx.objectStore(STORE_BG).put({ mode: modeKey, kind, blob });
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}
async function dbDeleteBackground(modeKey) {
  const db = await dbPromise;
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_BG, 'readwrite');
    tx.objectStore(STORE_BG).delete(modeKey);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}
async function dbGetAllBackgrounds() {
  const db = await dbPromise;
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_BG, 'readonly');
    const req = tx.objectStore(STORE_BG).getAll();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => reject(req.error);
  });
}

/* ============ Timer state ============ */
const DEFAULT_SETTINGS = {
  focus: 25, short: 5, long: 15, interval: 4,
  sound: true
};
let settings = { ...DEFAULT_SETTINGS, ...JSON.parse(localStorage.getItem('pomodoro_settings') || '{}') };

/* ============ Pomodoro type presets ============ */
const POMODORO_PRESETS = [
  { id: 'classic',  labelKey: 'presetClassic',  desc: '25 / 5 / 15',  focus: 25, short: 5,  long: 15, interval: 4 },
  { id: 'extended', labelKey: 'presetExtended', desc: '50 / 10 / 20', focus: 50, short: 10, long: 20, interval: 3 },
  { id: 'deep',     labelKey: 'presetDeep',     desc: '90 / 15 / 30', focus: 90, short: 15, long: 30, interval: 2 },
  { id: 'sprint',   labelKey: 'presetSprint',   desc: '15 / 3 / 10',  focus: 15, short: 3,  long: 10, interval: 4 },
];

function renderPresets() {
  const list = $('#presetList');
  list.innerHTML = '';
  POMODORO_PRESETS.forEach(p => {
    const isActive = settings.focus === p.focus && settings.short === p.short &&
      settings.long === p.long && settings.interval === p.interval;
    const btn = document.createElement('button');
    btn.className = 'preset-btn' + (isActive ? ' active' : '');
    btn.innerHTML = `<span class="p-label">${t(p.labelKey)}</span><span class="p-desc">${p.desc} ${t('minSuffix')}</span>`;
    btn.addEventListener('click', () => selectPomodoroPreset(p));
    list.appendChild(btn);
  });
}

function selectPomodoroPreset(p) {
  settings.focus = p.focus;
  settings.short = p.short;
  settings.long = p.long;
  settings.interval = p.interval;
  localStorage.setItem('pomodoro_settings', JSON.stringify(settings));
  renderPresets();
  reset();
}

let mode = 'focus';
let remaining = settings.focus * 60;
let running = false;
let timerId = null;
const CYCLE_KEY = 'pomodoro_cycle_state';
let pomodorosCompleted = loadCycleCount(); // used for long-break interval, persisted per day

const RING_CIRC = 2 * Math.PI * 135;

const timeDisplay = $('#timeDisplay');
const modeLabel = $('#modeLabel');
const ringFg = $('#ringFg');
const startBtn = $('#startBtn');
const resetBtn = $('#resetBtn');
const skipBtn = $('#skipBtn');
const sessionCountEl = $('#sessionCount');

ringFg.style.strokeDasharray = RING_CIRC;

function modeDuration(m) {
  return settings[m] * 60;
}
function modeText(m) {
  return { focus: t('phaseFocus'), short: t('phaseShort'), long: t('phaseLong') }[m];
}

function updateDisplay() {
  timeDisplay.textContent = fmtTime(remaining);
  const total = modeDuration(mode);
  const progress = 1 - remaining / total;
  ringFg.style.strokeDashoffset = RING_CIRC * (1 - progress);
  document.title = running ? `${fmtTime(remaining)} · ${modeText(mode)}` : t('appTitleTag');
}

function setMode(newMode, opts = {}) {
  mode = newMode;
  remaining = modeDuration(mode);
  document.body.classList.remove('mode-focus', 'mode-short', 'mode-long');
  document.body.classList.add(`mode-${mode}`);
  modeLabel.textContent = modeText(mode);
  applyBackgroundForMode(mode);
  if (playlistMode === 'perphase') setLiveScope(mode);
  updateDisplay();
  if (opts.autoStart) start(); else stopTimerOnly();
}

function stopTimerOnly() {
  running = false;
  clearInterval(timerId);
  startBtn.textContent = t('startBtnStart');
  startBtn.classList.remove('is-running');
  pauseSpotifyForScope(liveScope);
}

function start() {
  if (running) return;
  running = true;
  startBtn.textContent = t('startBtnPause');
  startBtn.classList.add('is-running');
  timerId = setInterval(tick, 1000);
  updateDisplay();
  playSpotifyForLiveScope();
}

function pause() {
  stopTimerOnly();
  updateDisplay();
}

function toggleStart() {
  running ? pause() : start();
}

function reset() {
  stopTimerOnly();
  remaining = modeDuration(mode);
  updateDisplay();
}

function tick() {
  remaining -= 1;
  if (remaining <= 0) {
    remaining = 0;
    updateDisplay();
    onSessionComplete();
    return;
  }
  updateDisplay();
}

// Advances the long-break cadence counter and decides the next phase. Shared by a natural
// completion and a manual skip, so "every N sessions" stays consistent whichever way you got there.
function advanceFocusCycle() {
  pomodorosCompleted += 1;
  saveCycleCount(pomodorosCompleted);
  return (pomodorosCompleted % settings.interval === 0) ? 'long' : 'short';
}

function completeFocusSession() {
  const next = advanceFocusCycle();
  incrementSessionCount();
  return next;
}

function onSessionComplete() {
  stopTimerOnly();
  playChime();
  notify();
  const next = mode === 'focus' ? completeFocusSession() : 'focus';
  setMode(next, { autoStart: true });
}

// Passer manuellement à la phase suivante ne doit pas créditer une session non terminée dans les
// statistiques (pas de son/notification/comptage du jour), ni forcer le démarrage d'un minuteur à
// l'arrêt — mais le cycle qui déclenche la Pause longue toutes les N sessions continue d'avancer.
function skipPhase() {
  const wasRunning = running;
  const next = mode === 'focus' ? advanceFocusCycle() : 'focus';
  stopTimerOnly();
  setMode(next, { autoStart: wasRunning });
}

/* ---- session history (per day, kept for the stats view) ---- */
const HISTORY_KEY = 'pomodoro_history';
function dateKey(d) {
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}
function todayStr() {
  return dateKey(new Date());
}
function loadCycleCount() {
  const stored = JSON.parse(localStorage.getItem(CYCLE_KEY) || 'null');
  return (stored && stored.date === todayStr()) ? stored.count : 0;
}
function saveCycleCount(count) {
  localStorage.setItem(CYCLE_KEY, JSON.stringify({ date: todayStr(), count }));
}
function loadHistory() {
  return JSON.parse(localStorage.getItem(HISTORY_KEY) || '{}');
}
function saveHistory(history) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}
// Les minutes sont enregistrées au moment de la complétion avec la durée Focus du jour,
// pour que changer la durée/preset plus tard ne fausse pas rétroactivement les jours passés.
function dayEntry(history, key) {
  const raw = history[key];
  if (!raw) return { count: 0, minutes: 0 };
  if (typeof raw === 'number') return { count: raw, minutes: raw * settings.focus }; // ancien format
  return raw;
}
function loadSessionCount() {
  const count = dayEntry(loadHistory(), todayStr()).count;
  sessionCountEl.textContent = count;
  return count;
}
function incrementSessionCount() {
  const history = loadHistory();
  const today = todayStr();
  const entry = dayEntry(history, today);
  entry.count += 1;
  entry.minutes += settings.focus;
  history[today] = entry;
  saveHistory(history);
  sessionCountEl.textContent = entry.count;
}

/* ---- stats modal (last 7 days) ---- */
function fmtHours(h) {
  if (h <= 0) return '0h';
  const rounded = Math.round(h * 10) / 10;
  return (Number.isInteger(rounded) ? rounded : rounded.toFixed(1)) + 'h';
}

function renderStats() {
  const history = loadHistory();
  const dayLabels = t('dayAbbrev');
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const entry = dayEntry(history, dateKey(d));
    days.push({ label: dayLabels[d.getDay()], count: entry.count, hours: entry.minutes / 60, isToday: i === 0 });
  }
  const totalWeek = days.reduce((sum, d) => sum + d.count, 0);
  const totalHours = days.reduce((sum, d) => sum + d.hours, 0);

  $('#statsSummary').innerHTML = t('statsSummary', totalWeek, fmtHours(totalHours));

  // round the axis top up to a clean number of hours so the scale reads nicely
  const axisMax = Math.max(1, Math.ceil(Math.max(...days.map(d => d.hours))));
  $('#statsAxis').innerHTML = [axisMax, axisMax / 2, 0].map(h => `<span>${fmtHours(h)}</span>`).join('');

  $('#statsChart').innerHTML = days.map(d => `
    <div class="stats-col${d.isToday ? ' today' : ''}">
      <span class="stats-value">${d.count ? fmtHours(d.hours) : ''}</span>
      <div class="stats-track"><div class="stats-bar" style="height:${(d.hours / axisMax) * 100}%"></div></div>
      <span class="stats-label">${d.label}</span>
    </div>
  `).join('');
}

const statsModal = $('#statsModal');
$('#statsBtn').addEventListener('click', () => {
  renderStats();
  statsModal.classList.add('open');
});
$('#closeStats').addEventListener('click', () => statsModal.classList.remove('open'));
statsModal.addEventListener('click', (e) => { if (e.target === statsModal) statsModal.classList.remove('open'); });

/* ---- sound + notification ---- */
function playChime() {
  if (!settings.sound) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [880, 1108, 1318];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, ctx.currentTime + i * 0.18);
      gain.gain.linearRampToValueAtTime(0.15, ctx.currentTime + i * 0.18 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.18 + 0.5);
      osc.connect(gain).connect(ctx.destination);
      osc.start(ctx.currentTime + i * 0.18);
      osc.stop(ctx.currentTime + i * 0.18 + 0.55);
    });
  } catch (e) { /* audio unsupported */ }
}
function notify() {
  if (!('Notification' in window)) return;
  if (Notification.permission === 'granted') {
    new Notification('Focus.', { body: t('notificationBody', modeText(mode)) });
  }
}
if ('Notification' in window && Notification.permission === 'default') {
  document.addEventListener('click', () => Notification.requestPermission(), { once: true });
}

/* ---- wiring ---- */
startBtn.addEventListener('click', toggleStart);
resetBtn.addEventListener('click', reset);
skipBtn.addEventListener('click', () => skipPhase());

document.addEventListener('keydown', (e) => {
  if (e.code !== 'Space') return;
  if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
  if (document.querySelector('.modal-overlay.open')) return;
  e.preventDefault();
  toggleStart();
});

/* ============ Settings modal ============ */
const settingsModal = $('#settingsModal');
$('#settingsBtn').addEventListener('click', () => {
  $('#focusInput').value = settings.focus;
  $('#shortInput').value = settings.short;
  $('#longInput').value = settings.long;
  $('#intervalInput').value = settings.interval;
  $('#soundToggle').checked = settings.sound;
  settingsModal.classList.add('open');
});
$('#closeSettings').addEventListener('click', () => settingsModal.classList.remove('open'));
settingsModal.addEventListener('click', (e) => { if (e.target === settingsModal) settingsModal.classList.remove('open'); });
// Remet les champs de durée (Focus/Pause courte/Pause longue/intervalle) aux valeurs par défaut
// dans le formulaire, sans toucher à la langue ni au son, et sans encore rien enregistrer.
$('#resetDurations').addEventListener('click', () => {
  $('#focusInput').value = DEFAULT_SETTINGS.focus;
  $('#shortInput').value = DEFAULT_SETTINGS.short;
  $('#longInput').value = DEFAULT_SETTINGS.long;
  $('#intervalInput').value = DEFAULT_SETTINGS.interval;
});
$('#saveSettings').addEventListener('click', () => {
  settings.focus = clamp(parseInt($('#focusInput').value, 10) || DEFAULT_SETTINGS.focus, 1, 120);
  settings.short = clamp(parseInt($('#shortInput').value, 10) || DEFAULT_SETTINGS.short, 1, 60);
  settings.long = clamp(parseInt($('#longInput').value, 10) || DEFAULT_SETTINGS.long, 1, 90);
  settings.interval = clamp(parseInt($('#intervalInput').value, 10) || DEFAULT_SETTINGS.interval, 2, 8);
  settings.sound = $('#soundToggle').checked;
  localStorage.setItem('pomodoro_settings', JSON.stringify(settings));
  settingsModal.classList.remove('open');
  renderPresets();
  reset(); // apply new duration for current mode
});

/* ============ Background modal (per-phase: focus / short / long) ============ */
const bgModal = $('#bgModal');
const customBgImg = $('#customBg');
const bgVideoEl = $('#bgVideo');
const bgCurrentLabel = $('#bgCurrentLabel');
const BG_CONFIG_KEY = 'pomodoro_bg_config';
const BG_PRESETS = ['aurora', 'dusk', 'forest', 'ocean', 'rose', 'midnight'];

let bgConfig = JSON.parse(localStorage.getItem(BG_CONFIG_KEY) || 'null') || {
  focus: { type: 'preset', preset: 'aurora' },
  short: { type: 'preset', preset: 'ocean' },
  long: { type: 'preset', preset: 'midnight' },
};
let bgObjectUrls = {}; // modeKey -> object URL for custom image/video
let bgModalMode = 'focus'; // which phase tab is being edited in the modal

function saveBgConfig() {
  localStorage.setItem(BG_CONFIG_KEY, JSON.stringify(bgConfig));
}

function setPresetClass(preset) {
  document.body.classList.remove(...BG_PRESETS.map(p => `preset-${p}`));
  document.body.classList.add(`preset-${preset}`);
}

/* ---- Contraste texte auto : luminosité moyenne du fond image/vidéo personnalisé ---- */
const BRIGHTNESS_THRESHOLD = 150; // sur 0-255 : au-dessus, le fond est jugé trop clair pour du texte blanc
const bgSampleCanvas = document.createElement('canvas');
bgSampleCanvas.width = 20;
bgSampleCanvas.height = 20;
const bgSampleCtx = bgSampleCanvas.getContext('2d', { willReadFrequently: true });

function applyTextThemeForBrightness(source) {
  try {
    bgSampleCtx.drawImage(source, 0, 0, 20, 20);
    const { data } = bgSampleCtx.getImageData(0, 0, 20, 20);
    let total = 0;
    for (let i = 0; i < data.length; i += 4) {
      total += 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    }
    const brightness = total / (data.length / 4);
    document.body.classList.toggle('bg-is-light', brightness > BRIGHTNESS_THRESHOLD);
  } catch (e) { /* frame pas encore décodée : on garde le thème de texte actuel */ }
}

// Une vidéo change dans le temps : on ré-évalue à chaque frame affichée (timeupdate suffit, pas besoin de setInterval)
bgVideoEl.addEventListener('timeupdate', () => {
  if (document.body.classList.contains('has-custom-video')) applyTextThemeForBrightness(bgVideoEl);
});

function applyBackgroundForMode(m) {
  const cfg = bgConfig[m] || { type: 'preset', preset: 'aurora' };
  document.body.classList.remove('has-custom-bg', 'has-custom-video');

  if (cfg.type === 'image' && bgObjectUrls[m]) {
    document.body.classList.add('has-custom-bg');
    bgVideoEl.pause();
    const checkBrightnessOnceLoaded = () => applyTextThemeForBrightness(customBgImg);
    customBgImg.onload = checkBrightnessOnceLoaded;
    customBgImg.src = bgObjectUrls[m];
    if (customBgImg.complete && customBgImg.naturalWidth > 0) checkBrightnessOnceLoaded();
  } else if (cfg.type === 'imageUrl' && cfg.url) {
    document.body.classList.add('has-custom-bg');
    bgVideoEl.pause();
    // Cross-origin (e.g. Pinterest's CDN) and not served with CORS headers: the image itself
    // still displays fine, but reading its pixels for brightness detection will throw — caught
    // below same as an undecoded frame, so the current text theme is simply kept as a fallback.
    const checkBrightnessOnceLoaded = () => applyTextThemeForBrightness(customBgImg);
    customBgImg.onload = checkBrightnessOnceLoaded;
    customBgImg.src = cfg.url;
    if (customBgImg.complete && customBgImg.naturalWidth > 0) checkBrightnessOnceLoaded();
  } else if (cfg.type === 'video' && bgObjectUrls[m]) {
    if (bgVideoEl.src !== bgObjectUrls[m]) bgVideoEl.src = bgObjectUrls[m];
    document.body.classList.add('has-custom-video');
    bgVideoEl.play().catch(() => {});
  } else {
    setPresetClass(cfg.preset || 'aurora');
    bgVideoEl.pause();
    // Les dégradés prédéfinis sont toujours sombres : texte blanc par défaut
    document.body.classList.remove('bg-is-light');
  }
}

function describeBg(cfg) {
  if (cfg.type === 'image') return t('bgCurrentImage');
  if (cfg.type === 'imageUrl') return t('bgCurrentPinterest');
  if (cfg.type === 'video') return t('bgCurrentVideo');
  return t('bgCurrentGradient');
}

function renderBgModal() {
  document.querySelectorAll('.bg-phase-tab').forEach(el => el.classList.toggle('active', el.dataset.mode === bgModalMode));
  const cfg = bgConfig[bgModalMode] || { type: 'preset', preset: 'aurora' };
  document.querySelectorAll('.preset-swatch').forEach(s => s.classList.toggle('selected', cfg.type === 'preset' && s.dataset.preset === cfg.preset));
  bgCurrentLabel.textContent = describeBg(cfg);
}

async function loadBackgroundsFromDB() {
  const records = await dbGetAllBackgrounds();
  records.forEach(r => { bgObjectUrls[r.mode] = URL.createObjectURL(r.blob); });
}

$('#bgBtn').addEventListener('click', () => {
  bgModalMode = mode;
  renderBgModal();
  bgModal.classList.add('open');
});
$('#closeBg').addEventListener('click', () => bgModal.classList.remove('open'));
bgModal.addEventListener('click', (e) => { if (e.target === bgModal) bgModal.classList.remove('open'); });

document.querySelectorAll('.bg-phase-tab').forEach(tab => {
  tab.addEventListener('click', () => { bgModalMode = tab.dataset.mode; renderBgModal(); });
});

document.querySelectorAll('.preset-swatch').forEach(btn => {
  btn.addEventListener('click', () => {
    const preset = btn.dataset.preset;
    if (bgObjectUrls[bgModalMode]) { URL.revokeObjectURL(bgObjectUrls[bgModalMode]); delete bgObjectUrls[bgModalMode]; }
    bgConfig[bgModalMode] = { type: 'preset', preset };
    saveBgConfig();
    renderBgModal();
    if (bgModalMode === mode) applyBackgroundForMode(mode);
    dbDeleteBackground(bgModalMode).catch(err => console.error('Nettoyage IndexedDB échoué :', err));
  });
});

// Background from a direct image link (e.g. copied from a Pinterest pin) — loaded straight from
// its host, not stored locally: no fetch/CORS involved, just an <img> pointed at the URL, same as
// displaying any image cross-origin. Probes the link first so a bad URL never leaves a broken slot.
$('#pinterestLinkAddBtn').addEventListener('click', () => {
  const url = $('#pinterestLinkInput').value.trim();
  if (!/^https?:\/\//i.test(url)) { showTransientMessage(t('pinterestLinkInvalid')); return; }
  showTransientMessage(t('pinterestLinkLoading'));
  const probe = new Image();
  probe.onload = () => {
    if (bgObjectUrls[bgModalMode]) { URL.revokeObjectURL(bgObjectUrls[bgModalMode]); delete bgObjectUrls[bgModalMode]; }
    bgConfig[bgModalMode] = { type: 'imageUrl', url };
    saveBgConfig();
    $('#pinterestLinkInput').value = '';
    renderBgModal();
    if (bgModalMode === mode) applyBackgroundForMode(mode);
    dbDeleteBackground(bgModalMode).catch(err => console.error('Nettoyage IndexedDB échoué :', err));
    showTransientMessage(t('pinterestLinkAdded'));
  };
  probe.onerror = () => showTransientMessage(t('pinterestLinkError'));
  probe.src = url;
});

function handleBgUpload(file, kind, maxBytes, tooLargeMsg) {
  if (!file) return;
  if (file.size > maxBytes) { alert(tooLargeMsg); return; }

  if (bgObjectUrls[bgModalMode]) URL.revokeObjectURL(bgObjectUrls[bgModalMode]);
  bgObjectUrls[bgModalMode] = URL.createObjectURL(file);
  bgConfig[bgModalMode] = { type: kind };
  saveBgConfig();
  renderBgModal();
  if (bgModalMode === mode) applyBackgroundForMode(mode);

  dbSetBackground(bgModalMode, kind, file).catch(err => {
    console.error('Impossible de sauvegarder ce fond pour la prochaine visite :', err);
  });
}

$('#bgFileInput').addEventListener('change', (e) => {
  handleBgUpload(e.target.files[0], 'image', 15 * 1024 * 1024, t('imageTooLarge'));
  e.target.value = '';
});
$('#bgVideoInput').addEventListener('change', (e) => {
  handleBgUpload(e.target.files[0], 'video', 80 * 1024 * 1024, t('videoTooLarge'));
  e.target.value = '';
});

$('#removeCustomBg').addEventListener('click', () => {
  if (bgObjectUrls[bgModalMode]) { URL.revokeObjectURL(bgObjectUrls[bgModalMode]); delete bgObjectUrls[bgModalMode]; }
  bgConfig[bgModalMode] = { type: 'preset', preset: 'aurora' };
  saveBgConfig();
  renderBgModal();
  if (bgModalMode === mode) applyBackgroundForMode(mode);
  dbDeleteBackground(bgModalMode).catch(err => console.error('Nettoyage IndexedDB échoué :', err));
});

/* ============ Playlist ============ */
const audioPlayer = $('#audioPlayer');
const trackList = $('#trackList');
const nowPlaying = $('#nowPlaying');
const npTitle = $('#npTitle');
const npCurrent = $('#npCurrent');
const npDuration = $('#npDuration');
const seekBar = $('#seekBar');
const playPauseBtn = $('#playPauseBtn');
const shuffleBtn = $('#shuffleBtn');
const repeatBtn = $('#repeatBtn');
const dropzone = $('#dropzone');
const fileInput = $('#fileInput');

// Tracks are grouped by "scope": 'shared' (mode unique) or 'focus'/'short'/'long' (mode par phase)
let tracksByScope = { shared: [], focus: [], short: [], long: [] };
let liveScope = 'shared'; // the library that's actually playable — always mirrors the timer's running phase
let viewScope = 'shared'; // the library currently displayed/edited in the panel — browsable via the phase tabs
let currentIndex = -1; // index within liveTracks()
let isShuffle = false;
let repeatMode = 'off'; // off | all | one
let playlistMode = localStorage.getItem('pomodoro_playlist_mode') || 'unique'; // unique | perphase

function liveTracks() { return tracksByScope[liveScope]; }
function viewTracks() { return tracksByScope[viewScope]; }

audioPlayer.volume = 0.7;

function cleanName(filename) {
  return filename.replace(/\.[^/.]+$/, '');
}

async function loadTracksFromDB() {
  const stored = await dbGetAllTracks();
  Object.keys(tracksByScope).forEach(k => { tracksByScope[k] = []; });
  stored.forEach(rec => {
    if (!rec.blob) return; // leftover record from the old OAuth-based Spotify import, no longer supported
    const scope = tracksByScope[rec.scope] ? rec.scope : 'shared';
    tracksByScope[scope].push({ id: rec.id, name: cleanName(rec.name), url: URL.createObjectURL(rec.blob), duration: null });
  });
  renderTrackList();
}

function updatePlaylistScopeLabel() {
  const label = $('#playlistScopeLabel');
  if (playlistMode === 'perphase') {
    label.hidden = false;
    label.textContent = '🎧 ' + modeText(viewScope);
  } else {
    label.hidden = true;
  }
}

function renderPlaylistPhaseTabs() {
  document.querySelectorAll('#playlistPhaseTabs .pl-phase-tab').forEach(el => el.classList.toggle('active', el.dataset.mode === viewScope));
}

function refreshPlaylistUI() {
  renderTrackList();
  renderPlaylistPhaseTabs();
  updatePlaylistScopeLabel();
  $('#playlistReadonlyNote').hidden = !(playlistMode === 'perphase' && viewScope !== liveScope);
  renderSpotifyWidget();
}

// Browsing a tab never touches playback — you can curate any phase's list without disturbing what's playing.
function setViewScope(scope) {
  if (scope === viewScope) return;
  viewScope = scope;
  refreshPlaylistUI();
}

// The live library always mirrors the timer; playback resets on change. The displayed panel
// always follows along too, so it's never possible to be looking at the wrong phase's playlist.
// If music was actually playing when the phase changes, it picks back up automatically on the new
// phase's playlist — if it was paused (or never started), the switch stays silent.
function setLiveScope(scope) {
  if (scope !== liveScope) {
    const wasPlaying = isCurrentlyPlaying();
    stopPlayback();
    pauseSpotifyForScope(liveScope); // leaving this phase — stop its Spotify playlist too
    liveScope = scope;
    viewScope = scope;
    refreshPlaylistUI();
    if (wasPlaying && liveTracks().length > 0) {
      playTrack(isShuffle ? Math.floor(Math.random() * liveTracks().length) : 0);
    }
    if (running) playSpotifyForLiveScope(); // timer kept running through the phase change
    return;
  }
  refreshPlaylistUI();
}

function applyPlaylistMode() {
  document.querySelectorAll('.pmode-btn').forEach(b => b.classList.toggle('active', b.dataset.plmode === playlistMode));
  $('#playlistPhaseTabs').hidden = playlistMode !== 'perphase';
  setLiveScope(playlistMode === 'perphase' ? mode : 'shared');
}

function renderTrackList() {
  trackList.innerHTML = '';
  const list = viewTracks();
  const isLive = viewScope === liveScope;
  trackList.classList.toggle('readonly', !isLive);

  if (list.length === 0) {
    const emptyText = playlistMode === 'perphase' ? t('emptyPlaylistForPhase', modeText(viewScope)) : t('emptyPlaylistGeneric');
    trackList.innerHTML = `<li class="playlist-empty-hint">${emptyText}</li>`;
    return;
  }
  list.forEach((track, i) => {
    const li = document.createElement('li');
    const isPlayingRow = isLive && i === currentIndex;
    li.className = 'track-item' + (isPlayingRow ? ' playing' : '');
    li.innerHTML = `
      <span class="t-index">${isPlayingRow ? '♪' : i + 1}</span>
      <span class="t-name">${track.name}</span>
      <span class="t-dur">${track.duration ? fmtTime(track.duration) : ''}</span>
      <button class="t-remove" title="${t('removeTrackTitle')}">✕</button>
    `;
    if (isLive) {
      li.addEventListener('click', (e) => {
        if (e.target.classList.contains('t-remove')) return;
        playTrack(i);
      });
    }
    li.querySelector('.t-remove').addEventListener('click', (e) => {
      e.stopPropagation();
      removeTrack(i);
    });
    trackList.appendChild(li);
  });
}

const AUDIO_EXT_RE = /\.(mp3|wav|ogg|oga|m4a|aac|flac|weba|wma|opus|aiff?)$/i;
function isAudioFile(f) {
  return (f.type && f.type.startsWith('audio/')) || AUDIO_EXT_RE.test(f.name);
}

function addFiles(fileListLike) {
  const all = Array.from(fileListLike);
  const files = all.filter(isAudioFile);
  if (all.length > 0 && files.length === 0) {
    alert(t('audioNotRecognized'));
    return;
  }
  const scope = viewScope;
  const bucket = tracksByScope[scope];
  files.forEach(file => {
    const track = { id: null, name: cleanName(file.name), url: URL.createObjectURL(file), duration: null };
    bucket.push(track);
    dbAddTrack(file.name, file, scope)
      .then(id => {
        // removed before its DB write resolved — the record now exists, so clean it up too
        if (track.pendingRemoval) { dbDeleteTrack(id).catch(() => {}); return; }
        track.id = id;
      })
      .catch(err => console.error('Impossible de sauvegarder ce morceau pour la prochaine visite :', err));
  });
  renderTrackList();
}

async function removeTrack(index) {
  const list = viewTracks();
  const track = list[index];
  if (track.id != null) {
    await dbDeleteTrack(track.id);
  } else {
    track.pendingRemoval = true;
  }
  URL.revokeObjectURL(track.url);
  const isLive = viewScope === liveScope;
  const wasPlaying = isLive && index === currentIndex;
  list.splice(index, 1);
  if (wasPlaying) {
    stopPlayback();
  } else if (isLive && index < currentIndex) {
    currentIndex -= 1;
  }
  renderTrackList();
}

function playTrack(index) {
  const list = liveTracks();
  if (index < 0 || index >= list.length) return;
  currentIndex = index;
  const track = list[index];
  audioPlayer.src = track.url;
  audioPlayer.play().catch(() => {});
  npTitle.textContent = track.name;
  renderTrackList();
}

// Central "stop" used whenever playback must be forcibly reset (scope switch, track removal):
function stopPlayback() {
  audioPlayer.pause();
  audioPlayer.removeAttribute('src');
  currentIndex = -1;
  resetNowPlayingDisplay();
  updatePlayIcon(false);
}

function isCurrentlyPlaying() {
  if (currentIndex === -1) return false;
  return !!liveTracks()[currentIndex] && !audioPlayer.paused;
}

function updatePlayIcon(playing) {
  playPauseBtn.textContent = playing ? '⏸' : '▶';
  nowPlaying.classList.toggle('paused', !playing);
}

function resetNowPlayingDisplay() {
  npTitle.textContent = '—';
  npCurrent.textContent = '0:00';
  npDuration.textContent = '0:00';
  seekBar.value = 0;
  seekBar.max = 100;
}

playPauseBtn.addEventListener('click', () => {
  if (currentIndex === -1) {
    if (liveTracks().length) playTrack(0);
    return;
  }
  if (audioPlayer.paused) audioPlayer.play().catch(() => {});
  else audioPlayer.pause();
});

audioPlayer.addEventListener('play', () => updatePlayIcon(true));
audioPlayer.addEventListener('pause', () => updatePlayIcon(false));

function pickNextIndex() {
  const list = liveTracks();
  if (list.length === 0) return -1;
  if (isShuffle) {
    if (list.length === 1) return 0;
    let next;
    do { next = Math.floor(Math.random() * list.length); } while (next === currentIndex);
    return next;
  }
  return (currentIndex + 1) % list.length;
}
function pickPrevIndex() {
  const list = liveTracks();
  if (list.length === 0) return -1;
  if (isShuffle) return pickNextIndex();
  return (currentIndex - 1 + list.length) % list.length;
}

$('#nextBtn').addEventListener('click', () => { const i = pickNextIndex(); if (i !== -1) playTrack(i); });
$('#prevBtn').addEventListener('click', () => { const i = pickPrevIndex(); if (i !== -1) playTrack(i); });

shuffleBtn.addEventListener('click', () => {
  isShuffle = !isShuffle;
  shuffleBtn.classList.toggle('active', isShuffle);
});
repeatBtn.addEventListener('click', () => {
  repeatMode = repeatMode === 'off' ? 'all' : repeatMode === 'all' ? 'one' : 'off';
  repeatBtn.classList.toggle('active', repeatMode !== 'off');
  repeatBtn.textContent = repeatMode === 'one' ? '🔂' : '🔁';
});

function handlePlaybackEnded() {
  if (repeatMode === 'one') { playTrack(currentIndex); return; }
  const i = pickNextIndex();
  if (i === -1) return;
  if (repeatMode === 'off' && !isShuffle && i === 0 && currentIndex === liveTracks().length - 1) {
    updatePlayIcon(false);
    return;
  }
  playTrack(i);
}
audioPlayer.addEventListener('ended', handlePlaybackEnded);

audioPlayer.addEventListener('loadedmetadata', () => {
  npDuration.textContent = fmtTime(audioPlayer.duration);
  seekBar.max = audioPlayer.duration;
  const list = liveTracks();
  if (currentIndex !== -1 && list[currentIndex]) {
    list[currentIndex].duration = audioPlayer.duration;
    renderTrackList();
  }
});
audioPlayer.addEventListener('timeupdate', () => {
  npCurrent.textContent = fmtTime(audioPlayer.currentTime);
  if (!seekBar.matches(':active')) seekBar.value = audioPlayer.currentTime;
});
seekBar.addEventListener('input', () => {
  audioPlayer.currentTime = seekBar.value;
});

/* ---- playlist mode: unique vs. par phase ---- */
document.querySelectorAll('.pmode-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    playlistMode = btn.dataset.plmode;
    localStorage.setItem('pomodoro_playlist_mode', playlistMode);
    applyPlaylistMode();
  });
});
document.querySelectorAll('#playlistPhaseTabs .pl-phase-tab').forEach(tab => {
  tab.addEventListener('click', () => setViewScope(tab.dataset.mode));
});

/* ---- add-track modal / file input / drag&drop ---- */
// files always go into whichever phase tab is currently open in the panel (viewScope)
const addTrackModal = $('#addTrackModal');
$('#addTracksBtn').addEventListener('click', () => addTrackModal.classList.add('open'));
$('#closeAddTrack').addEventListener('click', () => addTrackModal.classList.remove('open'));
addTrackModal.addEventListener('click', (e) => { if (e.target === addTrackModal) addTrackModal.classList.remove('open'); });

dropzone.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', (e) => {
  addFiles(e.target.files);
  addTrackModal.classList.remove('open');
});

['dragenter', 'dragover'].forEach(evt => {
  dropzone.addEventListener(evt, (e) => { e.preventDefault(); dropzone.classList.add('drag-over'); });
  document.body.addEventListener(evt, (e) => e.preventDefault());
});
['dragleave', 'drop'].forEach(evt => {
  dropzone.addEventListener(evt, (e) => { e.preventDefault(); dropzone.classList.remove('drag-over'); });
});
dropzone.addEventListener('drop', (e) => {
  e.preventDefault();
  if (e.dataTransfer.files.length) addFiles(e.dataTransfer.files);
  addTrackModal.classList.remove('open');
});
document.body.addEventListener('drop', (e) => e.preventDefault());

/* ---- toast (non-blocking feedback, unlike the existing alert() calls) ---- */
function showTransientMessage(msg) {
  const toast = $('#toast');
  toast.textContent = msg;
  toast.hidden = false;
  clearTimeout(showTransientMessage._t);
  showTransientMessage._t = setTimeout(() => { toast.hidden = true; }, 4000);
}

/* ---- Spotify: playlist widget by link (public embed, no OAuth/API/account needed) ---- */
const SPOTIFY_WIDGET_KEY = 'pomodoro_spotify_widget';
const SPOTIFY_WIDGET_SCOPES = ['shared', 'focus', 'short', 'long'];
let spotifyWidgets = { shared: null, focus: null, short: null, long: null, ...JSON.parse(localStorage.getItem(SPOTIFY_WIDGET_KEY) || '{}') };
let spotifyControllers = {}; // scope -> Spotify EmbedController, created lazily once a playlist is linked
let spotifyControllerPromises = {}; // scope -> in-flight createController promise, to dedupe concurrent calls

function saveSpotifyWidgets() {
  localStorage.setItem(SPOTIFY_WIDGET_KEY, JSON.stringify(spotifyWidgets));
}

// Accepts a playlist page URL (https://open.spotify.com/playlist/<id>, with or without a locale
// prefix or ?si=... suffix) or a spotify:playlist:<id> URI. Returns the bare id, or null.
function extractSpotifyPlaylistId(input) {
  const match = input.trim().match(/playlist[/:]([a-zA-Z0-9]+)/);
  return match ? match[1] : null;
}

// One-time DOM setup: a hidden slot per phase, each with its own embed target + remove button.
// Slots for phases the visitor isn't currently viewing stay in the DOM (just hidden) so a
// playlist keeps playing in the background — e.g. while browsing the Short-break tab during Focus.
// .spotify-embed-mount is a stable wrapper we control: a fresh throwaway <div> is created inside
// it for each createController() call, since Spotify's own code takes over/replaces whatever
// element it's given — trying to re-find that same element afterwards would fail.
function buildSpotifyWidgetSlots() {
  const container = $('#spotifyWidgetContainer');
  container.innerHTML = SPOTIFY_WIDGET_SCOPES.map(scope => `
    <div class="spotify-widget-slot" data-scope="${scope}" hidden>
      <p class="spotify-widget-status"></p>
      <div class="spotify-embed-mount"></div>
      <button type="button" class="text-btn spotify-remove-btn" data-i18n="spotifyLinkRemoveBtn">Retirer cette playlist Spotify</button>
    </div>
  `).join('');
  SPOTIFY_WIDGET_SCOPES.forEach(scope => {
    container.querySelector(`.spotify-widget-slot[data-scope="${scope}"] .spotify-remove-btn`)
      .addEventListener('click', () => removeSpotifyWidget(scope));
  });
}

let spotifyIframeApiPromise = null;
function loadSpotifyIframeApi() {
  if (spotifyIframeApiPromise) return spotifyIframeApiPromise;
  spotifyIframeApiPromise = new Promise((resolve) => {
    window.onSpotifyIframeApiReady = resolve;
    const script = document.createElement('script');
    script.src = 'https://open.spotify.com/embed/iframe-api/v1';
    script.async = true;
    document.head.appendChild(script);
  });
  return spotifyIframeApiPromise;
}

function ensureSpotifyController(scope) {
  const playlistId = spotifyWidgets[scope];
  if (!playlistId) return Promise.resolve(null);
  if (spotifyControllers[scope]) return Promise.resolve(spotifyControllers[scope]);
  if (spotifyControllerPromises[scope]) return spotifyControllerPromises[scope];
  const promise = loadSpotifyIframeApi().then(IFrameAPI => new Promise((resolve) => {
    const mount = $(`.spotify-widget-slot[data-scope="${scope}"] .spotify-embed-mount`);
    mount.innerHTML = ''; // drop any previous iframe before mounting a fresh one
    const mountTarget = document.createElement('div');
    mount.appendChild(mountTarget);
    IFrameAPI.createController(mountTarget, { width: '100%', height: '352', uri: `spotify:playlist:${playlistId}` }, (controller) => {
      spotifyControllers[scope] = controller;
      resolve(controller);
    });
  }));
  spotifyControllerPromises[scope] = promise;
  return promise;
}

function destroySpotifyController(scope) {
  if (spotifyControllers[scope]) { spotifyControllers[scope].destroy(); delete spotifyControllers[scope]; }
  delete spotifyControllerPromises[scope];
  const mount = document.querySelector(`.spotify-widget-slot[data-scope="${scope}"] .spotify-embed-mount`);
  if (mount) mount.innerHTML = ''; // clear any leftover content so the next controller starts clean
}

function removeSpotifyWidget(scope) {
  destroySpotifyController(scope);
  spotifyWidgets[scope] = null;
  saveSpotifyWidgets();
  renderSpotifyWidget();
}

function renderSpotifyWidget() {
  SPOTIFY_WIDGET_SCOPES.forEach(scope => {
    $(`.spotify-widget-slot[data-scope="${scope}"]`).hidden = scope !== viewScope || !spotifyWidgets[scope];
  });
  if (spotifyWidgets[viewScope]) showSpotifyWidgetForScope(viewScope);
}

// Loading the Spotify embed (iframe-api script, then the embed itself) takes several seconds
// over the network — without this placeholder, the widget appears to do nothing until the
// page is reloaded, which is exactly what looked like a bug from the outside.
function showSpotifyWidgetForScope(scope) {
  if (spotifyControllers[scope]) return; // already loaded
  const expectedId = spotifyWidgets[scope];
  const status = $(`.spotify-widget-slot[data-scope="${scope}"] .spotify-widget-status`);
  status.textContent = t('spotifyWidgetLoading');
  const timeoutId = setTimeout(() => {
    if (!spotifyControllers[scope] && spotifyWidgets[scope] === expectedId) {
      status.textContent = t('spotifyWidgetLoadError');
    }
  }, 12000);
  ensureSpotifyController(scope).then(controller => {
    clearTimeout(timeoutId);
    if (controller) status.textContent = ''; // the embed itself is now visible below
  });
}

// Ties Spotify playback to the timer itself: starts the live phase's playlist when the timer
// starts, pauses it when the timer stops — independent of the local-tracks player.
function playSpotifyForLiveScope() {
  if (!spotifyWidgets[liveScope]) return;
  ensureSpotifyController(liveScope).then(controller => controller && controller.resume());
}
function pauseSpotifyForScope(scope) {
  if (spotifyControllers[scope]) spotifyControllers[scope].pause();
}

$('#spotifyLinkAddBtn').addEventListener('click', () => {
  const id = extractSpotifyPlaylistId($('#spotifyLinkInput').value);
  if (!id) { showTransientMessage(t('spotifyLinkInvalid')); return; }
  destroySpotifyController(viewScope);
  spotifyWidgets[viewScope] = id;
  saveSpotifyWidgets();
  $('#spotifyLinkInput').value = '';
  renderSpotifyWidget();
  addTrackModal.classList.remove('open');
  showTransientMessage(t('spotifyLinkAdded'));
});

buildSpotifyWidgetSlots();

/* ---- language ---- */
function applyTranslations() {
  document.documentElement.lang = lang;
  localStorage.setItem('pomodoro_lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-title]').forEach(el => { el.title = t(el.dataset.i18nTitle); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));

  // static text just got reset by the loop above — refresh anything computed dynamically
  renderPresets();
  modeLabel.textContent = modeText(mode);
  startBtn.textContent = running ? t('startBtnPause') : t('startBtnStart');
  updateDisplay();
  refreshPlaylistUI();
  if (bgModal.classList.contains('open')) renderBgModal();
  if (statsModal.classList.contains('open')) renderStats();
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    lang = btn.dataset.lang;
    applyTranslations();
  });
});

/* ============ Init ============ */
(async function init() {
  loadSessionCount();
  renderPresets();
  resetNowPlayingDisplay();
  updatePlayIcon(false);
  await loadBackgroundsFromDB();
  applyPlaylistMode(); // must run before loading tracks: it sets viewScope/liveScope from the
  // persisted playlist mode, which the initial (empty) track-list render below depends on
  await loadTracksFromDB();
  setMode('focus');
  applyTranslations();
})();
