import './style.css'

document.querySelector('#app').innerHTML = `
  <!-- VERTICAL LEFT MENU -->
  <nav class="left-menubar">
    <div class="menu-top">
      <button class="menu-btn active" title="Dashboard">
        <span class="icon">▣</span>
      </button>
      <button class="menu-btn" title="Events">
        <span class="icon">📅</span>
      </button>
      <button class="menu-btn" title="Discover">
        <span class="icon">🔍</span>
      </button>
    </div>
    <div class="menu-bottom">
      <button id="alignmentBtn" class="menu-btn alignment-btn" title="Hackathon Alignment">
        <span class="icon">💎</span>
      </button>
    </div>
  </nav>

  <div class="pipeline-container fade-in">
    <h1 class="title">Integration Pipeline</h1>
    <div class="pipeline-visual">
      <div class="step active">
        <div class="circle">1</div>
        <div class="label">Connect</div>
      </div>
      <div class="line"></div>
      <div class="step">
        <div class="circle">2</div>
        <div class="label">Configure</div>
      </div>
      <div class="line"></div>
      <div class="step">
        <div class="circle">3</div>
        <div class="label">Deploy</div>
      </div>
    </div>
    
    <div class="content-area">
      <p>Select a provider to start integration.</p>
      <div class="card glass">
        <h3>GitHub</h3>
        <button id="connect-gh">Connect</button>
      </div>
    </div>
  </div>

  <!-- ALIGNMENT MODAL -->
  <div id="alignmentModal" class="modal-overlay hidden">
    <div class="modal-window">
      <div class="modal-header">
        <span class="modal-title">HACKATHON ALIGNMENT CHECK</span>
        <button id="closeModalBtn" class="close-btn">×</button>
      </div>
      <div class="modal-body">
        <div class="event-banner">
          <div class="event-tag">UPCOMING EVENT</div>
          <h2>Build Production-Ready AI Agents with Okta + Retool</h2>
          <div class="event-meta">
            <span>📅 Jan 16, 11:45 AM - 12:45 PM</span>
            <span>📍 San Francisco, CA</span>
          </div>
        </div>

        <div class="alignment-score-section">
          <div class="score-label">
            <span>PROJECT ALIGNMENT SCORE</span>
            <span class="score-val">98%</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="width: 98%;"></div>
          </div>
          <div class="score-details">
            <p>> <strong>Target:</strong> Build secure, production-ready AI agents.</p>
            <p>> <strong>Tech Stack:</strong> Okta (Identity) + Retool (UI/Logic).</p>
            <p>> <strong>Status:</strong> Ready for deployment.</p>
          </div>
        </div>

        <div class="event-details-text">
          <h3>About Event</h3>
          <p>Stop Guessing. Start Shipping. This isn’t another high-level AI talk. It’s a hands-on, expert-led workshop designed to take you from a basic prompt to a secure, production-ready AI agent.</p>
          <div class="speakers-list">
            <h4>Speakers</h4>
            <ul>
              <li>Fred P. - Senior Developer Advocate @ Auth0 (Okta)</li>
              <li>David Swan - Sales Engineering @ Retool</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="modal-footer">
           <button class="btn-execute full-width" onclick="window.open('https://lu.ma/event/evt-Q2QYkS6','_blank')">JOIN WAITLIST</button>
      </div>
    </div>
  </div>
`

// Modal Logic
const alignmentBtn = document.getElementById('alignmentBtn');
const alignmentModal = document.getElementById('alignmentModal');
const closeModalBtn = document.getElementById('closeModalBtn');

if (alignmentBtn && alignmentModal) {
  alignmentBtn.addEventListener('click', () => {
    alignmentModal.classList.remove('hidden');
  });
}

if (closeModalBtn && alignmentModal) {
  closeModalBtn.addEventListener('click', () => {
    alignmentModal.classList.add('hidden');
  });
}

if (alignmentModal) {
  alignmentModal.addEventListener('click', (e) => {
    if (e.target === alignmentModal) {
      alignmentModal.classList.add('hidden');
    }
  });
}
