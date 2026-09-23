// Web Audio API non-blocking synthesizer for festival sound effects

class AudioEngine {
  private ctx: AudioContext | null = null;

  private init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Subtle crackle burst for sparks
  playSparkCrack(volumeScale = 0.5) {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const bufferSize = Math.floor(this.ctx.sampleRate * 0.08);
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.015));
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.value = 2400;
      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(Math.min(0.04, 0.025 * volumeScale), now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start(now);
    } catch {
      // Ignore audio failure if restricted by browser policy
    }
  }

  // Celebratory Flypast Aerobatic Swoop & Chime sound
  playFlypastSound() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      // Aerobatic Jet Woosh (Bandpass Noise)
      const dur = 2.4;
      const bSize = Math.floor(this.ctx.sampleRate * dur);
      const b = this.ctx.createBuffer(1, bSize, this.ctx.sampleRate);
      const d = b.getChannelData(0);
      for (let i = 0; i < bSize; i++) {
        d[i] = (Math.random() * 2 - 1) * 0.5;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = b;
      const bp = this.ctx.createBiquadFilter();
      bp.type = 'bandpass';
      bp.Q.value = 3.5;
      bp.frequency.setValueAtTime(320, now);
      bp.frequency.exponentialRampToValueAtTime(1400, now + 0.9);
      bp.frequency.exponentialRampToValueAtTime(180, now + dur);

      const ngain = this.ctx.createGain();
      ngain.gain.setValueAtTime(0.001, now);
      ngain.gain.linearRampToValueAtTime(0.06, now + 0.8);
      ngain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

      noise.connect(bp);
      bp.connect(ngain);
      ngain.connect(this.ctx.destination);
      noise.start(now);

      // Harmonic Celestial Chime (D major pentatonic celebratory chord)
      const freqs = [587.33, 739.99, 880.0, 1174.66, 1479.98];
      freqs.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.05);
        g.gain.setValueAtTime(0.001, now + idx * 0.05);
        g.gain.linearRampToValueAtTime(0.025, now + idx * 0.05 + 0.04);
        g.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.05 + 1.2);
        osc.connect(g);
        g.connect(this.ctx.destination);
        osc.start(now + idx * 0.05);
        osc.stop(now + idx * 0.05 + 1.3);
      });
    } catch {
      // Ignore
    }
  }

  // Logo shockwave impact punch sound
  playPunchSound() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(38, now + 0.28);
      g.gain.setValueAtTime(0.12, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.connect(g);
      g.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.32);
    } catch {
      // Ignore
    }
  }

  // Celestial cloud wind woosh for the cloud transition
  playCloudWoosh() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const dur = 2.8;
      const bSize = Math.floor(this.ctx.sampleRate * dur);
      const b = this.ctx.createBuffer(1, bSize, this.ctx.sampleRate);
      const d = b.getChannelData(0);
      for (let i = 0; i < bSize; i++) {
        d[i] = (Math.random() * 2 - 1) * 0.4;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = b;
      const lowpass = this.ctx.createBiquadFilter();
      lowpass.type = 'lowpass';
      lowpass.frequency.setValueAtTime(180, now);
      lowpass.frequency.exponentialRampToValueAtTime(850, now + 1.2);
      lowpass.frequency.exponentialRampToValueAtTime(220, now + dur);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.08, now + 1.0);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

      noise.connect(lowpass);
      lowpass.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start(now);

      // Mystical high chime
      const bellFreqs = [440, 554.37, 659.25, 880];
      bellFreqs.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + 0.3 + idx * 0.12);
        g.gain.setValueAtTime(0.001, now + 0.3 + idx * 0.12);
        g.gain.linearRampToValueAtTime(0.018, now + 0.35 + idx * 0.12);
        g.gain.exponentialRampToValueAtTime(0.0001, now + 1.8 + idx * 0.12);
        osc.connect(g);
        g.connect(this.ctx.destination);
        osc.start(now + 0.3 + idx * 0.12);
        osc.stop(now + 2.0 + idx * 0.12);
      });
    } catch {
      // Ignore
    }
  }
}

export const audioEngine = new AudioEngine();
