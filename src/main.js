
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
  renderDashboard();
}

function handleGenerate() {
  const input = document.getElementById('biz-input');
  const query = input.value;
  if (!query) return;

  log("system", `Analyzing request: "${query}"...`);

  const container = document.getElementById('pipeline-container');
  container.innerHTML = `<div style="text-align:center; color:white; padding:2rem;">Processing Neural Architecture...</div>`;

  setTimeout(() => {
    generatePipeline(query);
  }, 1500);
}

function analyzeBusinessTopic(topic) {
  const t = topic.toLowerCase();

  // Keyword Mapping
  if (t.includes('software') || t.includes('app') || t.includes('saas') || t.includes('tech') || t.includes('platform') || t.includes('connect')) {
    return [
      { name: "Product Manager", task: "Roadmap & Specs", cost: 55, role: "tech_pm" },
      { name: "Fullstack Dev", task: "Core Architecture", cost: 65, role: "dev" },
      { name: "UI/UX Designer", task: "Interface Design", cost: 45, role: "design" },
      { name: "QA Engineer", task: "Testing & Automation", cost: 40, role: "qa" }
    ];
  }

  if (t.includes('shop') || t.includes('store') || t.includes('retail') || t.includes('cafe') || t.includes('food') || t.includes('sell')) {
    return [
      { name: "Store Manager", task: "Operations Oversight", cost: 35, role: "retail_mgr" },
      { name: "Inventory Bot", task: "Stock Optimization", cost: 20, role: "logistics" },
      { name: "Sales Associate", task: "Customer Service", cost: 25, role: "sales" },
      { name: "Marketing Rep", task: "Local Promotions", cost: 30, role: "marketing" }
    ];
  }

  if (t.includes('factory') || t.includes('manufacture') || t.includes('production') || t.includes('hardware')) {
    return [
      { name: "Plant Manager", task: "Facility Oversight", cost: 50, role: "plant_mgr" },
      { name: "Assembly Bot", task: "Production Line", cost: 15, role: "manufacturing" },
      { name: "QC Inspector", task: "Quality Assurance", cost: 25, role: "qc" },
      { name: "Logistics Router", task: "Distribution Net", cost: 40, role: "logistics" }
    ];
  }

  if (t.includes('consulting') || t.includes('agency') || t.includes('service') || t.includes('marketing')) {
    return [
      { name: "Account Manager", task: "Client Relations", cost: 45, role: "sales" },
      { name: "Strategy Lead", task: "Campaign Planning", cost: 60, role: "strategy" },
      { name: "Creative Bot", task: "Content Gen", cost: 35, role: "design" },
      { name: "Outreach Bot", task: "Lead Generation", cost: 20, role: "sales" }
    ];
  }

  // Generic Fallback
  return [
    { name: "Operations Lead", task: "General Management", cost: 40, role: "management" },
    { name: "Sales Bot", task: "Revenue Gen", cost: 30, role: "sales" },
    { name: "Marketing Bot", task: "Traffic Gen", cost: 25, role: "marketing" },
    { name: "Support Bot", task: "Customer Success", cost: 20, role: "support" }
  ];
}

function generatePipeline(topic) {
  const container = document.getElementById('pipeline-container');
  container.innerHTML = '';

  const roles = analyzeBusinessTopic(topic);

  log("system", `Architecture optimized for: ${topic}`);
  log("system", `${roles.length} specialized autonomous roles identified.`);

  roles.forEach((role, i) => {
    const card = document.createElement('div');
    card.className = 'pipeline-card';
    card.innerHTML = `
            <div class="card-info">
                <h3>${role.name}</h3>
                <p>${role.task}</p>
            </div>
            <button class="btn-hire" data-cost="${role.cost}" data-name="${role.name}" data-role="${role.role}">
                Hire ($${role.cost}/hr)
            </button>
        `;
    container.appendChild(card);

    card.style.opacity = '0';
    card.style.animation = `fadeIn 0.5s forwards ${i * 0.2}s`;
  });

  const btns = container.querySelectorAll('.btn-hire');
  btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const cost = parseInt(e.target.dataset.cost);
      const name = e.target.dataset.name;
      const role = e.target.dataset.role;
      hireAgent(name, role, cost, e.target);
    });
  });
}

function hireAgent(name, role, cost, btn) {
  if (btn.classList.contains('hired')) return;

  activeAgents++;
  hourlyBurn += cost;
  // Store full object for log context
  hiredDepartments.push({ name, role, cost });

  cashOnHand -= cost * 10;

  btn.classList.add('hired');
  btn.textContent = 'Active';

  updateMetrics();
  log("system", `Contract deployed: ${name} [${role.toUpperCase()}]`);

  if (activeAgents === 1) {
    startSimulation();
  }
}

function updateMetrics() {
  const cashEl = document.getElementById('m-cash');
  const burnEl = document.getElementById('m-burn');
  const agentEl = document.getElementById('m-agents');
  const revEl = document.getElementById('m-revenue');

  if (cashEl) cashEl.innerText = '$' + Math.floor(cashOnHand).toLocaleString();
  if (burnEl) burnEl.innerText = '$' + hourlyBurn.toLocaleString() + '/hr';
  if (agentEl) agentEl.innerText = activeAgents;

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

const ROLE_EVENTS = {
  "tech_pm": ["Updated product roadmap", "Prioritized feature backlog", "Sync with stakeholders", "defined MVP specs"],
  "dev": ["Committed core logic", "Fixed critical bug", "Refactored API layer", "Deployed to staging", "Optimized DB query"],
  "design": ["Updated UI assets", "Conducted user research", "Published design system", "Tweaked CSS animation"],
  "qa": ["Running test suite...", "Found edge case bug", "Verified deployment", "Writing integration tests"],
  "retail_mgr": ["Opened store", "Checked cash register", "Organized shift schedule", "Resolved customer complaint"],
  "logistics": ["Optimized route", "Restocked low inventory", "Negotiated supplier rate", "Tracked shipment #992"],
  "sales": ["Cold called lead", "Closed deal ($5k)", "Sent proposal", "Followed up with prospect"],
  "marketing": ["Launched ad campaign", "Optimized SEO keywords", "Posted viral content", "Analyzed traffic stats"],
  "plant_mgr": ["Safety check complete", "Optimized assembly line", "Scheduled maintenance", "Reported efficiency gain"],
  "manufacturing": ["Assembled unit", "Calibrated machine", "Quality check pass", "Raw material intake"],
  "qc": ["Inspected output", "Rejected defective unit", "Calibrated sensors", "Logged safety report"],
  "strategy": ["Analyzed market trend", "Pivot strategy meeting", "Updated slide deck", "Competitor analysis"],
  "support": ["Resolved ticket #882", "Updated FAQ", "Chatted with user", "Escalated issue"],
  "management": ["Approved budget", "Hired new staff", "Compliance check", "Quarterly planning"]
};

function startSimulation() {
  log("system", "Autonomous loop started.");

  setInterval(() => {
    if (hiredDepartments.length === 0) return;

    // Pick a random active agent
    const agent = hiredDepartments[Math.floor(Math.random() * hiredDepartments.length)];

    // Get appropriate events
    const pool = ROLE_EVENTS[agent.role] || ROLE_EVENTS["management"];
    const evt = pool[Math.floor(Math.random() * pool.length)];

    log("agent", `${agent.name}: ${evt}`);

    // Random revenue event logic (active)
    if (Math.random() > 0.6) {
      const gain = Math.floor(Math.random() * 200) + 10;
      cashOnHand += gain;
      updateMetrics();
    }

  }, 2500);
}

// Init
renderHero();
