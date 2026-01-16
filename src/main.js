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
      <button id="bizPipelinesBtn" class="menu-btn" title="Business Pipelines">
        <span class="icon">💼</span>
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
          <!-- Total Score Header -->
          <div class="total-score-header">
             <div class="total-label">POTENTIAL PRIZE POOL</div>
             <div class="total-value">$29,300+</div>
          </div>
          
          <div class="score-grid extended-grid">
            
            <!-- Retool (Already Targeted) -->
            <div class="sponsor-card retool-card active-target">
              <div class="card-header">
                <h4>Retool (UI)</h4>
                <div class="score-badge success">92%</div>
              </div>
              <div class="progress-track">
                <div class="progress-fill" style="width: 92%;"></div>
              </div>
              <ul class="task-list">
                <li class="task-item"><input type="checkbox" checked disabled><span>Embed/Integration</span></li>
                <li class="task-item"><input type="checkbox" checked disabled><span>Builder Aesthetic</span></li>
              </ul>
            </div>

            <!-- Yutori (High Value) -->
            <div class="sponsor-card">
              <div class="card-header">
                <h4>Yutori (API)</h4>
                <div class="score-badge warning">0%</div>
              </div>
              <div class="progress-track">
                <div class="progress-fill" style="width: 5%; background: var(--text-muted);"></div>
              </div>
              <p class="prize-tag">🏆 $3,500 Prize</p>
            </div>

            <!-- TinyFish -->
            <div class="sponsor-card">
              <div class="card-header">
                <h4>TinyFish (Web Agent)</h4>
                <div class="score-badge warning">0%</div>
              </div>
              <div class="progress-track">
                <div class="progress-fill" style="width: 5%; background: var(--text-muted);"></div>
              </div>
              <p class="prize-tag">🏆 $2,250 Prize</p>
            </div>

            <!-- Freepik -->
            <div class="sponsor-card">
              <div class="card-header">
                <h4>Freepik (Assets)</h4>
                <div class="score-badge warning">0%</div>
              </div>
              <div class="progress-track">
                <div class="progress-fill" style="width: 5%; background: var(--text-muted);"></div>
              </div>
              <p class="prize-tag">🏆 $1,850 Prize</p>
            </div>

            <!-- Cline -->
            <div class="sponsor-card">
              <div class="card-header">
                <h4>Cline (Innovative)</h4>
                <div class="score-badge warning">0%</div>
              </div>
              <div class="progress-track">
                <div class="progress-fill" style="width: 5%; background: var(--text-muted);"></div>
              </div>
              <p class="prize-tag">🏆 $1,500 Prize</p>
            </div>

            <!-- Tonic Fabricate -->
            <div class="sponsor-card">
              <div class="card-header">
                <h4>Tonic Fabricate</h4>
                <div class="score-badge warning">0%</div>
              </div>
              <div class="progress-track">
                <div class="progress-fill" style="width: 5%; background: var(--text-muted);"></div>
              </div>
              <p class="prize-tag">🏆 $1,000 Prize</p>
            </div>

             <!-- Macroscope -->
            <div class="sponsor-card">
              <div class="card-header">
                <h4>Macroscope</h4>
                <div class="score-badge warning">0%</div>
              </div>
              <div class="progress-track">
                <div class="progress-fill" style="width: 5%; background: var(--text-muted);"></div>
              </div>
              <p class="prize-tag">🏆 $1,000 Prize</p>
            </div>

            <!-- Senso.ai -->
            <div class="sponsor-card">
              <div class="card-header">
                <h4>Senso.ai</h4>
                <div class="score-badge warning">0%</div>
              </div>
              <div class="progress-track">
                <div class="progress-fill" style="width: 5%; background: var(--text-muted);"></div>
              </div>
              <p class="prize-tag">🏆 $2k Credits</p>
            </div>

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

// --- LOGIC ---

// 1. Navigation Logic (Sidebar)
const navButtons = document.querySelectorAll('.menu-btn');
navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Basic active state toggling
    if (!btn.classList.contains('alignment-btn')) { // Don't toggle alignment btn as active like a tab
      navButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }
  });
});

// 2. Modal Logic
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

// 3. Pipeline & Connect Logic
const connectBtn = document.getElementById('connect-gh');
const contentArea = document.querySelector('.content-area');
const steps = document.querySelectorAll('.step');
const lines = document.querySelectorAll('.line');

function advanceToStep(stepNumber) {
  // Update Visuals (Step Indicators)
  steps.forEach((s, idx) => {
    if (idx < stepNumber) {
      s.classList.add('active');
    } else {
      s.classList.remove('active');
    }
  });

  // Update Lines
  // line 0 connects step 1 and 2. So if stepNumber is 2, line 0 should be active.
  lines.forEach((l, idx) => {
    if (idx < stepNumber - 1) {
      l.style.opacity = '1';
      l.style.background = 'var(--primary-color)';
    }
  });

  // Update Content Area
  if (stepNumber === 2) {
    contentArea.innerHTML = `
      <div class="card glass animate-slide-up">
        <h3>Configure Agent</h3>
        <p class="subtitle">Set permissions and access levels.</p>
        
        <div class="form-group margin-top">
           <label>Agent Name</label>
           <input type="text" value="MyFirstAgent_v1" class="input-field" />
        </div>

        <div class="permissions-group">
           <label>Permissions (Scopes)</label>
           <div class="checkbox-group">
             <label><input type="checkbox" checked> read:profile</label>
             <label><input type="checkbox" checked> read:email</label>
             <label><input type="checkbox"> write:admin</label>
           </div>
        </div>

        <button id="deploy-btn" class="primary-btn">Deploy Agent 🚀</button>
      </div>
    `;

    // Wire up the new button (for next step)
    document.getElementById('deploy-btn').addEventListener('click', () => {
      advanceToStep(3);
    });
  }
  else if (stepNumber === 3) {
    contentArea.innerHTML = `
        <div class="terminal-window animate-slide-up">
           <div class="terminal-header">
             <span class="dot red"></span>
             <span class="dot yellow"></span>
             <span class="dot green"></span>
             <span class="title">deploy_logs.txt</span>
           </div>
           <div class="terminal-body">
             <p>> Initializing build environment...</p>
             <p>> Verifying Auth0 credentials... <span class="green">OK</span></p>
             <p>> Bundling agent logic... <span class="green">Done</span></p>
             <p>> Deploying to edge... <span class="blink">_</span></p>
           </div>
        </div>
        <div class="success-message hidden">
           <h2>🎉 Deployment Successful!</h2>
        </div>
     `;

    // Simulate typewriter effect or scrolling logs
    setTimeout(() => {
      const body = document.querySelector('.terminal-body');
      body.innerHTML += `<p>> Live at: <a href="#" class="link">https://agent-xyz.app</a></p>`;
      document.querySelector('.success-message').classList.remove('hidden');
    }, 2000);
  }
}

if (connectBtn) {
  connectBtn.addEventListener('click', () => {
    // 1. Change text to "Connecting..."
    connectBtn.innerText = 'Connecting...';
    connectBtn.disabled = true;

    // 2. Simulate API delay
    setTimeout(() => {
      // 3. Success State
      connectBtn.innerText = 'Connected';
      connectBtn.classList.add('connected-state');

      // 4. Trigger move to next step (Task B)
      setTimeout(() => advanceToStep(2), 500);
    }, 1500);
  });
}

// 4. Business Pipelines View
const bizPipelinesBtn = document.getElementById('bizPipelinesBtn');
const pipelineContainer = document.querySelector('.pipeline-container');

function renderBusinessPipelines() {
  pipelineContainer.innerHTML = `
    <h1 class="title">Business Pipelines</h1>
    <div class="pipeline-grid">
      
      <div class="biz-card">
        <div class="icon-large">📈</div>
        <h3>Marketing</h3>
        <p>Brand awareness, campaigns, lead generation</p>
      </div>

      <div class="biz-card">
        <div class="icon-large">🏭</div>
        <h3>Manufacturing</h3>
        <p>Production, supply chain, quality control</p>
      </div>

      <div class="biz-card">
        <div class="icon-large">⚖️</div>
        <h3>Compliance</h3>
        <p>Legal, regulations, audits, certifications</p>
      </div>

      <div class="biz-card">
        <div class="icon-large">💰</div>
        <h3>Sales</h3>
        <p>Pipeline management, CRM, revenue tracking</p>
      </div>

      <div class="biz-card">
        <div class="icon-large">👥</div>
        <h3>HR</h3>
        <p>Recruiting, onboarding, performance, payroll</p>
      </div>

      <div class="biz-card">
        <div class="icon-large">⚙️</div>
        <h3>Operations</h3>
        <p>Infrastructure, logistics, processes</p>
      </div>

      <div class="biz-card">
        <div class="icon-large">💼</div>
        <h3>Finance</h3>
        <p>Accounting, budgeting, forecasting, reporting</p>
      </div>

      <div class="biz-card">
        <div class="icon-large">🎨</div>
        <h3>Product</h3>
        <p>Design, development, roadmap, launches</p>
      </div>

      <div class="biz-card">
        <div class="icon-large">🤝</div>
        <h3>Customer Success</h3>
        <p>Support, retention, satisfaction, feedback</p>
      </div>

    </div>
  `;
}

function renderIntegrationPipeline() {
  pipelineContainer.innerHTML = `
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
  `;

  // Re-attach connect button listener
  const newConnectBtn = document.getElementById('connect-gh');
  if (newConnectBtn) {
    newConnectBtn.addEventListener('click', () => {
      newConnectBtn.innerText = 'Connecting...';
      newConnectBtn.disabled = true;

      setTimeout(() => {
        newConnectBtn.innerText = 'Connected';
        newConnectBtn.classList.add('connected-state');

        setTimeout(() => advanceToStep(2), 500);
      }, 1500);
    });
  }
}

// Wire up Business Pipelines button
if (bizPipelinesBtn) {
  bizPipelinesBtn.addEventListener('click', () => {
    renderBusinessPipelines();
  });
}

// Wire up Dashboard button to return to Integration Pipeline
const dashboardBtn = document.querySelector('.menu-btn[title="Dashboard"]');
if (dashboardBtn) {
  dashboardBtn.addEventListener('click', () => {
    renderIntegrationPipeline();
  });
}
