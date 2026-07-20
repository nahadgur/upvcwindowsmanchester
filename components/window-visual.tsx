export function WindowVisual() {
  return (
    <div className="window-scene" aria-hidden="true">
      <div className="cloud cloud-one" />
      <div className="cloud cloud-two" />
      <svg viewBox="0 0 680 540" role="img">
        <title>A bay window on a red-brick Manchester home</title>
        <defs>
          <pattern id="brick-pattern" width="54" height="26" patternUnits="userSpaceOnUse">
            <rect width="54" height="26" fill="#b9573d" />
            <path d="M0 1h54M0 25h54M27 1v12M0 13h54M13.5 13v12M40.5 13v12" stroke="#d9866f" strokeWidth="2" opacity=".58" />
          </pattern>
          <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#dfecef" />
            <stop offset=".48" stopColor="#9ebec4" />
            <stop offset=".5" stopColor="#f3f8f7" />
            <stop offset="1" stopColor="#b8cfd1" />
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="160%">
            <feDropShadow dx="0" dy="18" stdDeviation="12" floodColor="#183436" floodOpacity=".22" />
          </filter>
        </defs>
        <path d="M18 494h648" stroke="#b7b09e" strokeWidth="2" />
        <path d="M62 479V76h556v403" fill="url(#brick-pattern)" />
        <path d="M42 80h596L590 28H92z" fill="#334c4d" />
        <path d="M42 80h596" stroke="#f0ebe0" strokeWidth="12" />
        <g filter="url(#shadow)">
          <path d="M136 214h408v254H136z" fill="#f7f5ef" />
          <path d="M150 228h380v224H150z" fill="#e4e0d6" />
          <path d="M150 228l58 20v184l-58 20zM530 228l-58 20v184l58 20z" fill="#d6d2c7" />
          <path d="M208 248h264v184H208z" fill="url(#glass)" />
          <path d="M164 246l44 14v160l-44 14zM516 246l-44 14v160l44 14z" fill="url(#glass)" />
          <g stroke="#fbfaf6" strokeWidth="12">
            <path d="M296 248v184M384 248v184M208 338h264M186 253v174M494 253v174" />
          </g>
          <path d="M126 468h428l-18 26H144z" fill="#ece8dd" />
        </g>
        <path d="M95 494c8-52 28-79 57-82 29-2 50 25 60 82M485 494c7-43 23-65 49-68 28-3 48 20 56 68" fill="#496c54" />
        <path d="M0 495h680v45H0z" fill="#d9d4c6" />
        <path d="M0 511h680" stroke="#c1baaa" strokeWidth="3" />
      </svg>
      <div className="visual-note">
        <span className="visual-note-icon">A</span>
        <span><strong>Designed for Manchester homes</strong><small>Options for terraces, semis and newer builds</small></span>
      </div>
    </div>
  );
}
