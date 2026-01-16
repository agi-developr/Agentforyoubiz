
// State
let activeAgents = 0;
let hourlyBurn = 0;
let estRevenue = 0;
let cashOnHand = 500000;
let hiredDepartments = [];
let logInterval = null;

import './style.css';

const app = document.querySelector('#app');

// --- VIEWS ---

function renderHero() {
  app.innerHTML = `
    <div class="container">
      <header class="hero">
        <h1 class="glitch" data-text="AgentForYou.biz">AgentForYou.biz</h1>
        <p class="subtitle">The Future of Autonomous Business</p>
        <div class="cta-group">
          <button id="cta-primary">Initialize Agent</button>
          <button id="cta-secondary">Learn More</button>
        </div>
      </header>
    </div>
  `;

  const btn = document.getElementById('cta-primary');
  if (btn) {
    btn.addEventListener('click', () => {
      transitionToDashboard();
    });
  }
}

function renderDashboard() {
  app.innerHTML = `
    <div class="dashboard-view">
        <!-- Top Bar -->
        <div class="top-bar">
            <div class="brand">AgentForYou.biz <span style="font-size:0.8em; opacity:0.6;">// DASHBOARD</span></div>
            <div class="auth-badge">
                <div class="user-avatar"></div>
                <span>user_0x92</span>
            </div>
        </div>

        <!-- Metrics -->
        <div class="metrics-row">
            <div class="metric-card">
                <div class="metric-label">Cash on Hand</div>
                <div class="metric-value" id="m-cash">$${cashOnHand.toLocaleString()}</div>
            </div>
            <div class="metric-card">
                <div class="metric-label">Hourly Burn</div>
                <div class="metric-value" id="m-burn">$0/hr</div>
            </div>
            <div class="metric-card">
                <div class="metric-label">Est. Revenue</div>
                <div class="metric-value" id="m-revenue">$0/mo</div>
            </div>
            <div class="metric-card">
                <div class="metric-label">Active Agents</div>
                <div class="metric-value" id="m-agents">0</div>
            </div>
        </div>

        <!-- Main Workspace -->
        <div class="main-workspace">
            <!-- Left: Pipeline Builder -->
            <div class="pipeline-section" id="pipeline-container">
                <!-- Empty State / Input -->
                <div class="input-prompt" style="text-align:center; padding: 2rem;">
                    <h3>What business do you want to build?</h3>
                    <div class="input-area" style="margin-top: 1rem;">
                        <input type="text" id="biz-input" class="cmd-input" placeholder="e.g. 'Sell potato chips online' or 'SaaS for dog walkers'">
                        <button id="btn-generate" style="background:var(--primary); color:black; border:none; padding:0 1.5rem; border-radius:4px; font-weight:bold; cursor:pointer;">GO</button>
                    </div>
                </div>
            </div>

            <!-- Right: Terminal/Logs -->
            <div class="terminal-section">
                <div class="terminal-logs" id="terminal-logs">
                    <div class="log-entry system">[SYSTEM] Interface initialized.</div>
                    <div class="log-entry system">[SYSTEM] Waiting for business input vector...</div>
                </div>
            </div>
        </div>
    </div>
  `;

  // Attach Listeners
  const btnGen = document.getElementById('btn-generate');
  if (btnGen) {
    btnGen.addEventListener('click', handleGenerate);
  }
}

// --- LOGIC ---

function transitionToDashboard() {
  // Simple fade mimic by just switching innerHTML for now, 
  // real CSS transitions can be added if requested.
  renderDashboard();
}

function handleGenerate() {
  const input = document.getElementById('biz-input');
  const query = input.value;
  if (!query) return;

  log("system", `Analyzing request: "${query}"...`);

  // Disable input
  const container = document.getElementById('pipeline-container');
  container.innerHTML = `<div style="text-align:center; color:white; padding:2rem;">Processing Neural Architecture...</div>`;

  // Simulate delay
  setTimeout(() => {
    generatePipeline(query);
  }, 1500);
}

function generatePipeline(topic) {
  const container = document.getElementById('pipeline-container');
  container.innerHTML = ''; // clear loading

  log("system", "Architecture defined. 4 autonomous Roles identified.");

  // Mock Data based on input, but generic for now as per "script.js" logic
  const roles = [
    { name: "Product Manager", task: "Define specs & roadmap", cost: 45 },
    { name: "Sales Agent", task: "Outreach & lead gen", cost: 25 },
    { name: "Marketing Bot", task: "Social media & ads", cost: 20 },
    { name: "Logistics Router", task: "Supply chain optimization", cost: 60 }
  ];

  roles.forEach((role, i) => {
    const card = document.createElement('div');
    card.className = 'pipeline-card';
    card.innerHTML = `
            <div class="card-info">
                <h3>${role.name}</h3>
                <p>${role.task}</p>
            </div>
            <button class="btn-hire" data-cost="${role.cost}" data-name="${role.name}">
                Hire ($${role.cost}/hr)
            </button>
        `;
    container.appendChild(card);

    // Animation delay
    card.style.opacity = '0';
    card.style.animation = `fadeIn 0.5s forwards ${i * 0.2}s`;
  });

  // Attach hire listeners
  const btns = container.querySelectorAll('.btn-hire');
  btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const cost = parseInt(e.target.dataset.cost);
      const name = e.target.dataset.name;
      hireAgent(name, cost, e.target);
    });
  });
}

function hireAgent(name, cost, btn) {
  if (btn.classList.contains('hired')) return;

  activeAgents++;
  hourlyBurn += cost;
  hiredDepartments.push(name);

  // Simulate initial cost
  cashOnHand -= cost * 10;

  // Update UI
  btn.classList.add('hired');
  btn.textContent = 'Active';

  updateMetrics();
  log("system", `Contract deployed: ${name}`);

  // Start logs if first agent
  if (activeAgents === 1) {
    startSimulation();
  }
}

function updateMetrics() {
  const cashEl = document.getElementById('m-cash');
  const burnEl = document.getElementById('m-burn');
  const agentEl = document.getElementById('m-agents');
  const revEl = document.getElementById('m-revenue');

  if (cashEl) cashEl.innerText = '$' + cashOnHand.toLocaleString();
  if (burnEl) burnEl.innerText = '$' + hourlyBurn.toLocaleString() + '/hr';
  if (agentEl) agentEl.innerText = activeAgents;

  // Simple revenue model
  estRevenue = hourlyBurn * 4;
  if (revEl) revEl.innerText = '$' + estRevenue.toLocaleString() + '/mo';
}

function log(type, msg) {
  const logs = document.getElementById('terminal-logs');
  if (!logs) return;

  const div = document.createElement('div');
  div.className = `log-entry ${type}`;
  div.innerText = `[${new Date().toLocaleTimeString()}] ${msg}`;
  logs.appendChild(div);
  logs.scrollTop = logs.scrollHeight;
}

function startSimulation() {
  log("system", "Autonomous loop started.");

  setInterval(() => {
    if (hiredDepartments.length === 0) return;

    const dept = hiredDepartments[Math.floor(Math.random() * hiredDepartments.length)];
    const events = [
      "Optimized workflow DB",
      "Contacted 50 leads",
      "Deployed new ad set",
      "Resolved customer ticket",
      "Updated inventory",
      "Negotiated supplier rate"
    ];
    const evt = events[Math.floor(Math.random() * events.length)];

    log("agent", `${dept}: ${evt}`);

    // Random revenue event
    if (Math.random() > 0.6) {
      const gain = Math.floor(Math.random() * 200) + 10;
      cashOnHand += gain;
      updateMetrics();
    }

  }, 2500);
}

// Init
renderHero();
