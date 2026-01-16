import './style.css'
import './workforce-styles.css'

document.querySelector('#app').innerHTML = `
  <!-- Globe Background Visual -->
  <div class="globe-container">
    <div class="globe"></div>
  </div>
  
  <!-- Grid Overlay -->
  <div class="grid-overlay"></div>
  
  <!-- VERTICAL LEFT MENU - NUMBERED STEPS -->
  <nav class="left-menubar">
    <div class="menu-steps">
      <button class="step-btn" data-step="0" title="Generate your business idea">
        <span class="step-number">0</span>
        <span class="step-label">Idea</span>
      </button>
      <button class="step-btn" data-step="1" title="Build your business pipeline">
        <span class="step-number">1</span>
        <span class="step-label">Pipeline</span>
      </button>
      <button class="step-btn active" data-step="2" title="Connect integrations">
        <span class="step-number">2</span>
        <span class="step-label">Connect</span>
      </button>
      <button class="step-btn" data-step="3" title="Configure settings">
        <span class="step-number">3</span>
        <span class="step-label">Configure</span>
      </button>
      <button class="step-btn" data-step="4" title="Hire AI agents">
        <span class="step-number">4</span>
        <span class="step-label">Agents</span>
      </button>
      <button class="step-btn" data-step="5" title="Monitor performance">
        <span class="step-number">5</span>
        <span class="step-label">Monitor</span>
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
  </div>

  <!-- AGENT MARKETPLACE MODAL -->
  <div id="agentMarketplaceModal" class="modal-overlay hidden">
    <div class="modal-window agent-marketplace-window">
      <div class="modal-header">
        <span class="modal-title">🤖 HIRE EXTERNAL AGENTS</span>
        <button id="closeAgentModalBtn" class="close-btn">×</button>
      </div>
      <div class="modal-body">
        <div class="marketplace-intro">
          <p>Expand your business capabilities with specialized AI agents. Choose from our marketplace of expert agents.</p>
        </div>

        <div id="myAgentsList" class="my-agents-section hidden">
          <h3>My Active Agents</h3>
          <div class="active-agents-container"></div>
        </div>

        <h3 class="marketplace-section-title">Available Agents</h3>
        <div class="agent-grid">
          
          <div class="agent-card" data-agent-id="marketing-agent">
            <div class="agent-icon">💼</div>
            <h4>Marketing Agent</h4>
            <div class="agent-price">$500<span>/month</span></div>
            <ul class="agent-capabilities">
              <li>Campaign automation</li>
              <li>SEO optimization</li>
              <li>Content generation</li>
              <li>Social media management</li>
            </ul>
            <button class="hire-agent-btn" data-agent-name="Marketing Agent" data-agent-price="500">Hire Now</button>
          </div>

          <div class="agent-card" data-agent-id="sales-agent">
            <div class="agent-icon">📊</div>
            <h4>Sales Agent</h4>
            <div class="agent-price">$750<span>/month</span></div>
            <ul class="agent-capabilities">
              <li>Lead qualification</li>
              <li>CRM automation</li>
              <li>Follow-up sequences</li>
              <li>Pipeline management</li>
            </ul>
            <button class="hire-agent-btn" data-agent-name="Sales Agent" data-agent-price="750">Hire Now</button>
          </div>

          <div class="agent-card" data-agent-id="compliance-agent">
            <div class="agent-icon">⚖️</div>
            <h4>Compliance Agent</h4>
            <div class="agent-price">$1,000<span>/month</span></div>
            <ul class="agent-capabilities">
              <li>Regulatory checks</li>
              <li>Documentation</li>
              <li>Audit trails</li>
              <li>Risk assessment</li>
            </ul>
            <button class="hire-agent-btn" data-agent-name="Compliance Agent" data-agent-price="1000">Hire Now</button>
          </div>

          <div class="agent-card" data-agent-id="hr-agent">
            <div class="agent-icon">👥</div>
            <h4>HR Agent</h4>
            <div class="agent-price">$600<span>/month</span></div>
            <ul class="agent-capabilities">
              <li>Resume screening</li>
              <li>Interview scheduling</li>
              <li>Onboarding automation</li>
              <li>Performance tracking</li>
            </ul>
            <button class="hire-agent-btn" data-agent-name="HR Agent" data-agent-price="600">Hire Now</button>
          </div>

          <div class="agent-card" data-agent-id="data-agent">
            <div class="agent-icon">📈</div>
            <h4>Data Analysis Agent</h4>
            <div class="agent-price">$850<span>/month</span></div>
            <ul class="agent-capabilities">
              <li>Custom reports</li>
              <li>Interactive dashboards</li>
              <li>Predictive insights</li>
              <li>Data visualization</li>
            </ul>
            <button class="hire-agent-btn" data-agent-name="Data Analysis Agent" data-agent-price="850">Hire Now</button>
          </div>

          <div class="agent-card" data-agent-id="customer-success-agent">
            <div class="agent-icon">🤝</div>
            <h4>Customer Success Agent</h4>
            <div class="agent-price">$700<span>/month</span></div>
            <ul class="agent-capabilities">
              <li>24/7 support responses</li>
              <li>Customer sentiment analysis</li>
              <li>Ticket prioritization</li>
              <li>Retention strategies</li>
            </ul>
            <button class="hire-agent-btn" data-agent-name="Customer Success Agent" data-agent-price="700">Hire Now</button>
          </div>

        </div>
      </div>
    </div>
  </div>
`

// --- LOGIC ---

// 1. Navigation Logic (Numbered Steps)
const stepButtons = document.querySelectorAll('.step-btn');
stepButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const step = btn.getAttribute('data-step');

    // Update active state
    stepButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Navigate to corresponding view
    navigateToStep(step);
  });
});

// Navigation router for numbered steps
function navigateToStep(step) {
  switch (step) {
    case '0':
      renderIdeaGenerator();
      break;
    case '1':
      renderBusinessPipelines();
      break;
    case '2':
      renderIntegrationPipeline();
      break;
    case '3':
      renderConfigureView();
      break;
    case '4':
      // Open agent marketplace modal
      if (agentMarketplaceModal) {
        agentMarketplaceModal.classList.remove('hidden');
      }
      break;
    case '5':
      renderMonitorView();
      break;
    default:
      renderIntegrationPipeline();
  }
}


// 2. Modal Logic (Alignment Modal - opened from Step 5)
const alignmentModal = document.getElementById('alignmentModal');
const closeModalBtn = document.getElementById('closeModalBtn');

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

// 2b. Agent Marketplace Modal Logic
const agentMarketplaceModal = document.getElementById('agentMarketplaceModal');
const closeAgentModalBtn = document.getElementById('closeAgentModalBtn');
const myAgentsList = document.getElementById('myAgentsList');
const activeAgentsContainer = document.querySelector('.active-agents-container');

// Store hired agents
let hiredAgents = [];


if (closeAgentModalBtn && agentMarketplaceModal) {
  closeAgentModalBtn.addEventListener('click', () => {
    agentMarketplaceModal.classList.add('hidden');
  });
}

if (agentMarketplaceModal) {
  agentMarketplaceModal.addEventListener('click', (e) => {
    if (e.target === agentMarketplaceModal) {
      agentMarketplaceModal.classList.add('hidden');
    }
  });
}

// Handle "Hire Now" button clicks
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('hire-agent-btn')) {
    const agentName = e.target.getAttribute('data-agent-name');
    const agentPrice = e.target.getAttribute('data-agent-price');
    const agentCard = e.target.closest('.agent-card');
    const agentId = agentCard.getAttribute('data-agent-id');

    // Check if already hired
    if (hiredAgents.some(agent => agent.id === agentId)) {
      alert(`${agentName} is already hired!`);
      return;
    }

    // Confirmation dialog
    const confirmed = confirm(`Hire ${agentName} for $${agentPrice}/month?\n\nThis agent will be added to your active agents.`);

    if (confirmed) {
      // Add to hired agents
      const agent = {
        id: agentId,
        name: agentName,
        price: agentPrice,
        icon: agentCard.querySelector('.agent-icon').textContent
      };
      hiredAgents.push(agent);

      // Update button state
      e.target.textContent = '✓ Hired';
      e.target.disabled = true;
      e.target.style.background = 'rgba(46, 204, 113, 0.3)';
      e.target.style.borderColor = '#2ecc71';
      e.target.style.color = '#2ecc71';

      // Update "My Agents" section
      updateMyAgentsList();

      // Show success message
      showNotification(`✓ Successfully hired ${agentName}!`);
    }
  }
});

function updateMyAgentsList() {
  if (hiredAgents.length > 0) {
    myAgentsList.classList.remove('hidden');
    activeAgentsContainer.innerHTML = hiredAgents.map(agent => `
      <div class="hired-agent-item">
        <div class="hired-agent-icon">${agent.icon}</div>
        <div class="hired-agent-info">
          <div class="hired-agent-name">${agent.name}</div>
          <div class="hired-agent-price">$${agent.price}/month</div>
        </div>
        <button class="remove-agent-btn" data-agent-id="${agent.id}">Remove</button>
      </div>
    `).join('');
  } else {
    myAgentsList.classList.add('hidden');
  }
}

// Handle agent removal
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-agent-btn')) {
    const agentId = e.target.getAttribute('data-agent-id');
    const agent = hiredAgents.find(a => a.id === agentId);

    if (confirm(`Remove ${agent.name} from your active agents?`)) {
      hiredAgents = hiredAgents.filter(a => a.id !== agentId);
      updateMyAgentsList();

      // Re-enable the hire button in the marketplace
      const agentCard = document.querySelector(`[data-agent-id="${agentId}"]`);
      if (agentCard) {
        const hireBtn = agentCard.querySelector('.hire-agent-btn');
        hireBtn.textContent = 'Hire Now';
        hireBtn.disabled = false;
        hireBtn.style.background = '';
        hireBtn.style.borderColor = '';
        hireBtn.style.color = '';
      }

      showNotification(`Removed ${agent.name}`);
    }
  }
});

function showNotification(message) {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = 'notification-toast';
  notification.textContent = message;
  document.body.appendChild(notification);

  // Trigger animation
  setTimeout(() => notification.classList.add('show'), 100);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
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

// Functions render views via navigateToStep() - no individual button wiring needed


// 5. Idea Generator Feature
const ideaGeneratorBtn = document.getElementById('ideaGeneratorBtn');

function renderIdeaGenerator() {
  pipelineContainer.innerHTML = `
    <div class="idea-generator-container fade-in">
      <h1 class="title">💡 Business Idea Generator</h1>
      <p class="subtitle">Describe your business idea and we'll create a customized pipeline for you</p>
      
      <div class="idea-input-card card glass">
        <label for="bizIdeaInput" class="idea-label">What's your business idea?</label>
        <textarea 
          id="bizIdeaInput" 
          class="biz-idea-input" 
          placeholder="Example: I want to create a company to sell chips with purple plantains (similar to bananas)"
          rows="6"
        ></textarea>
        
        <button id="generatePipelineBtn" class="generate-btn primary-btn">
          Generate Pipeline 🚀
        </button>
      </div>
      
      <div id="pipelineResults" class="pipeline-results hidden"></div>
    </div>
  `;

  // Wire up generate button
  const generateBtn = document.getElementById('generatePipelineBtn');
  const ideaInput = document.getElementById('bizIdeaInput');
  const resultsContainer = document.getElementById('pipelineResults');

  if (generateBtn && ideaInput) {
    generateBtn.addEventListener('click', () => {
      const idea = ideaInput.value.trim();

      if (!idea) {
        alert('Please enter your business idea first!');
        return;
      }

      // Show loading state
      generateBtn.disabled = true;
      generateBtn.textContent = 'Analyzing... 🤔';

      // Simulate AI processing delay
      setTimeout(() => {
        const pipeline = generateBusinessPipeline(idea);
        renderGeneratedPipeline(pipeline, resultsContainer);

        // Reset button
        generateBtn.disabled = false;
        generateBtn.innerHTML = 'Generate Pipeline 🚀';

        // Scroll to results
        resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 1500);
    });
  }
}

function generateBusinessPipeline(idea) {
  const lowerIdea = idea.toLowerCase();

  // Extract business name/product
  const businessName = extractBusinessName(idea);

  // Enhanced business model detection
  const businessModel = detectBusinessModel(lowerIdea);

  // Detect business characteristics
  const isPhysicalProduct = /\b(sell|product|manufacture|produce|chips|food|goods|items|physical|tangible)\b/.test(lowerIdea);
  const isService = /\b(service|consulting|agency|platform|software|saas)\b/.test(lowerIdea);
  const isB2B = /\b(b2b|enterprise|business|businesses|companies|corporate)\b/.test(lowerIdea);
  const isB2C = /\b(b2c|consumer|customer|people|users|individuals)\b/.test(lowerIdea);
  const isFood = /\b(food|chips|restaurant|cafe|snack|eat|cook|bake|beverage|drink)\b/.test(lowerIdea);
  const isTech = /\b(software|app|platform|saas|tech|digital|ai|ml|web|mobile)\b/.test(lowerIdea);
  const isHealthcare = /\b(health|medical|healthcare|clinic|doctor|patient|wellness|fitness)\b/.test(lowerIdea);
  const isEcommerce = /\b(ecommerce|e-commerce|online store|marketplace|shopping)\b/.test(lowerIdea);
  const isSaaS = /\b(saas|software as a service|subscription|cloud)\b/.test(lowerIdea);
  const isMarketplace = /\b(marketplace|platform connects|peer.to.peer|p2p)\b/.test(lowerIdea);

  // Build process blocks with priorities, workforce options, and costs
  const processes = [];

  // Marketing - Almost always high priority for new businesses
  processes.push({
    name: 'Marketing',
    icon: '📈',
    priority: (isB2C || isPhysicalProduct) ? 'critical' : 'high',
    recommendation: isPhysicalProduct
      ? 'Build brand awareness for your unique product through social media and content marketing'
      : isTech
        ? 'Focus on digital marketing, SEO, and community building'
        : 'Develop a comprehensive marketing strategy to reach your target audience',
    timeline: 'Month 1',
    tasks: [
      'Define target audience',
      'Create brand identity',
      'Launch social media presence',
      'Develop content strategy'
    ],
    workforceOptions: {
      recommended: 'hybrid',
      agentTypes: ['Marketing Agent'],
      costs: {
        ai: 500,
        human: 4500,
        hybrid: 2500
      },
      timeEstimates: {
        ai: '24/7',
        human: '40 hrs/week',
        hybrid: '24/7 + strategy'
      }
    }
  });

  // Manufacturing - Only for physical products
  if (isPhysicalProduct) {
    processes.push({
      name: 'Manufacturing',
      icon: '🏭',
      priority: 'critical',
      recommendation: isFood
        ? 'Source ingredients, establish production process, and ensure quality control'
        : 'Set up supply chain, production line, and quality assurance systems',
      timeline: 'Month 1-2',
      tasks: [
        'Source raw materials/ingredients',
        'Set up production facility',
        'Establish quality control',
        'Optimize production process'
      ],
      workforceOptions: {
        recommended: 'human',
        agentTypes: [],
        costs: {
          ai: 0, // Not automatable
          human: 8000,
          hybrid: 8000
        },
        timeEstimates: {
          ai: 'N/A',
          human: 'Full-time team',
          hybrid: 'Full-time team'
        }
      }
    });
  }

  // Product Development - For tech/services
  if (isTech || isService) {
    processes.push({
      name: 'Product',
      icon: '🎨',
      priority: 'critical',
      recommendation: isTech
        ? 'Build MVP, iterate based on user feedback, and maintain product roadmap'
        : 'Design service offering, create processes, and document best practices',
      timeline: 'Month 1-3',
      tasks: [
        'Define product requirements',
        'Build MVP/prototype',
        'Conduct user testing',
        'Iterate based on feedback'
      ],
      workforceOptions: {
        recommended: 'hybrid',
        agentTypes: [],
        costs: {
          ai: 0,
          human: 12000,
          hybrid: 9000
        },
        timeEstimates: {
          ai: 'N/A',
          human: '3-6 months',
          hybrid: '2-4 months'
        }
      }
    });
  }

  // Finance - Always critical
  processes.push({
    name: 'Finance',
    icon: '💰',
    priority: 'critical',
    recommendation: 'Set up accounting systems, forecast cash flow, and plan funding strategy',
    timeline: 'Month 1',
    tasks: [
      'Create financial projections',
      'Set up accounting system',
      'Determine funding needs',
      'Establish pricing strategy'
    ],
    workforceOptions: {
      recommended: 'hybrid',
      agentTypes: ['Data Analysis Agent'],
      costs: {
        ai: 850,
        human: 6000,
        hybrid: 3500
      },
      timeEstimates: {
        ai: 'Real-time reporting',
        human: 'Monthly close',
        hybrid: 'Automated + oversight'
      }
    }
  });

  // Compliance - Higher for food, healthcare, finance
  const compliancePriority = (isFood || isHealthcare) ? 'critical' : isPhysicalProduct ? 'high' : 'medium';
  processes.push({
    name: 'Compliance',
    icon: '⚖️',
    priority: compliancePriority,
    recommendation: isFood
      ? 'Obtain FDA approval, food safety certifications, and ensure labeling compliance'
      : isHealthcare
        ? 'Ensure HIPAA compliance, obtain necessary licenses, and follow regulations'
        : 'Research industry regulations, obtain business licenses, and ensure legal compliance',
    timeline: compliancePriority === 'critical' ? 'Month 1-2' : 'Month 2-3',
    tasks: isFood ? [
      'FDA registration',
      'Food safety certifications',
      'Labeling compliance',
      'Health department approvals'
    ] : [
      'Business registration',
      'Industry licenses',
      'Legal compliance review',
      'Insurance coverage'
    ],
    workforceOptions: {
      recommended: 'human',
      agentTypes: ['Compliance Agent'],
      costs: {
        ai: 1000,
        human: 7000,
        hybrid: 4500
      },
      timeEstimates: {
        ai: 'Monitoring only',
        human: 'Full compliance',
        hybrid: 'AI monitoring + human expertise'
      }
    }
  });

  // Sales - Critical for B2B, High for B2C
  processes.push({
    name: 'Sales',
    icon: '💼',
    priority: isB2B ? 'critical' : 'high',
    recommendation: isB2B
      ? 'Build sales team, develop enterprise sales process, and create pipeline strategy'
      : 'Set up e-commerce platform, optimize conversion funnel, and establish sales channels',
    timeline: 'Month 2-3',
    tasks: isB2B ? [
      'Develop sales process',
      'Build sales team',
      'Create sales collateral',
      'Establish CRM system'
    ] : [
      'Set up sales channels',
      'Create online store',
      'Optimize checkout process',
      'Establish partnerships'
    ],
    workforceOptions: {
      recommended: isB2B ? 'human' : 'hybrid',
      agentTypes: ['Sales Agent'],
      costs: {
        ai: 750,
        human: isB2B ? 10000 : 4000,
        hybrid: isB2B ? 6000 : 2500
      },
      timeEstimates: {
        ai: 'Lead qualification',
        human: 'Full sales cycle',
        hybrid: 'AI leads + human closing'
      }
    }
  });

  // Customer Success - Higher for services and B2B
  processes.push({
    name: 'Customer Success',
    icon: '🤝',
    priority: (isService || isB2B) ? 'high' : 'medium',
    recommendation: isB2B
      ? 'Build customer success team, create onboarding process, and track customer health'
      : 'Provide excellent customer support, gather feedback, and build loyalty programs',
    timeline: 'Month 3-4',
    tasks: [
      'Set up support system',
      'Create help documentation',
      'Implement feedback loops',
      'Build customer community'
    ],
    workforceOptions: {
      recommended: 'hybrid',
      agentTypes: ['Customer Success Agent'],
      costs: {
        ai: 700,
        human: 5000,
        hybrid: 2800
      },
      timeEstimates: {
        ai: '24/7 support',
        human: 'Business hours',
        hybrid: '24/7 AI + human escalation'
      }
    }
  });

  // Operations
  processes.push({
    name: 'Operations',
    icon: '⚙️',
    priority: isPhysicalProduct ? 'high' : 'medium',
    recommendation: 'Establish efficient processes, manage logistics, and optimize workflows',
    timeline: 'Month 3-5',
    tasks: [
      'Define operational processes',
      'Set up infrastructure',
      'Optimize workflows',
      'Implement automation'
    ],
    workforceOptions: {
      recommended: 'hybrid',
      agentTypes: [],
      costs: {
        ai: 0,
        human: 6000,
        hybrid: 4000
      },
      timeEstimates: {
        ai: 'Automation only',
        human: 'Full operations',
        hybrid: 'Automated + oversight'
      }
    }
  });

  // HR - Lower priority initially
  processes.push({
    name: 'HR',
    icon: '👥',
    priority: isB2B ? 'medium' : 'low',
    recommendation: 'Plan hiring strategy, create onboarding process, and build company culture',
    timeline: 'Month 4-6',
    tasks: [
      'Define hiring needs',
      'Create job descriptions',
      'Establish hiring process',
      'Develop onboarding program'
    ],
    workforceOptions: {
      recommended: 'hybrid',
      agentTypes: ['HR Agent'],
      costs: {
        ai: 600,
        human: 5500,
        hybrid: 3000
      },
      timeEstimates: {
        ai: 'Resume screening',
        human: 'Full HR function',
        hybrid: 'AI screening + human interviews'
      }
    }
  });

  // Sort by priority
  const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
  processes.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  return {
    businessName,
    businessModel,
    originalIdea: idea,
    processes
  };
}

// New function: Detect business model
function detectBusinessModel(lowerIdea) {
  if (/\b(saas|software as a service|subscription|cloud.based)\b/.test(lowerIdea)) {
    return 'SaaS';
  } else if (/\b(marketplace|platform connects|peer.to.peer|p2p)\b/.test(lowerIdea)) {
    return 'Marketplace';
  } else if (/\b(ecommerce|e-commerce|online store|dropship)\b/.test(lowerIdea)) {
    return 'E-commerce';
  } else if (/\b(agency|consulting|service provider)\b/.test(lowerIdea)) {
    return 'Service';
  } else if (/\b(manufacture|produce|physical product|retail)\b/.test(lowerIdea)) {
    return 'Product';
  } else if (/\b(franchise|license)\b/.test(lowerIdea)) {
    return 'Franchise';
  } else {
    return 'General Business';
  }
}

function extractBusinessName(idea) {
  // Simple extraction - look for keywords
  const match = idea.match(/(?:company|business|platform|service|agency)\s+(?:to|for)?\s*(.+?)(?:\.|$)/i);
  if (match) {
    return match[1].trim().split(' ').slice(0, 5).join(' ');
  }

  // Fallback: use first few words
  return idea.split(' ').slice(0, 6).join(' ') + '...';
}

// Global state for workforce selections
let workforceSelections = {};
let totalMonthlyCost = 0;

function renderGeneratedPipeline(pipeline, container) {
  const priorityEmojis = {
    critical: '🔴',
    high: '🟡',
    medium: '🟠',
    low: '⚪'
  };

  const priorityLabels = {
    critical: 'CRITICAL',
    high: 'HIGH',
    medium: 'MEDIUM',
    low: 'LOW'
  };

  // Initialize workforce selections with recommended options
  workforceSelections = {};
  pipeline.processes.forEach((process, idx) => {
    workforceSelections[idx] = process.workforceOptions.recommended;
  });

  // Calculate initial total cost
  calculateTotalCost(pipeline);

  container.innerHTML = `
    <div class="pipeline-header">
      <h2>Your Customized Business Pipeline</h2>
      <p class="pipeline-subtitle">"${pipeline.businessName}"</p>
      <div class="business-model-badge">Business Model: ${pipeline.businessModel}</div>
    </div>
    
    <!-- Total Cost Widget -->
    <div class="total-cost-widget">
      <div class="cost-widget-header">
        <h3>💰 Total Monthly Cost</h3>
        <div class="cost-widget-value" id="totalCostDisplay">$${totalMonthlyCost.toLocaleString()}</div>
      </div>
      <div class="cost-breakdown">
        <div class="cost-breakdown-item">
          <span>AI Agents:</span>
          <span id="aiCostCount">calculating...</span>
        </div>
        <div class="cost-breakdown-item">
          <span>Human Staff:</span>
          <span id="humanCostCount">calculating...</span>
        </div>
        <div class="cost-breakdown-item">
          <span>Hybrid:</span>
          <span id="hybridCostCount">calculating...</span>
        </div>
      </div>
    </div>
    
    <div class="process-blocks">
      ${pipeline.processes.map((process, index) => `
        <div class="process-block priority-${process.priority} workforce-${workforceSelections[index]}" 
             style="animation-delay: ${index * 0.1}s" 
             data-process-index="${index}">
          <div class="process-header">
            <div class="process-title">
              <span class="process-icon">${process.icon}</span>
              <h3>${process.name}</h3>
            </div>
            <div class="priority-badge priority-${process.priority}">
              ${priorityEmojis[process.priority]} ${priorityLabels[process.priority]}
            </div>
          </div>
          
          <div class="ai-recommendation">
            <strong>AI Recommendation:</strong>
            <p>${process.recommendation}</p>
          </div>
          
          <div class="timeline-info">
            <span class="timeline-icon">📅</span>
            <span>Timeline: ${process.timeline}</span>
          </div>
          
          <!-- Workforce Selection -->
          <div class="workforce-selector">
            <label class="workforce-label">Choose Workforce Type:</label>
            <div class="workforce-options">
              <button class="workforce-option ai ${workforceSelections[index] === 'ai' ? 'active' : ''}" 
                      data-process="${index}" 
                      data-type="ai"
                      ${process.workforceOptions.costs.ai === 0 ? 'disabled' : ''}>
                <span class="workforce-icon">🤖</span>
                <span class="workforce-name">AI Agent</span>
                <span class="workforce-cost">$${process.workforceOptions.costs.ai}/mo</span>
                <span class="workforce-time">${process.workforceOptions.timeEstimates.ai}</span>
              </button>
              
              <button class="workforce-option human ${workforceSelections[index] === 'human' ? 'active' : ''}" 
                      data-process="${index}" 
                      data-type="human">
                <span class="workforce-icon">👤</span>
                <span class="workforce-name">Human</span>
                <span class="workforce-cost">$${process.workforceOptions.costs.human}/mo</span>
                <span class="workforce-time">${process.workforceOptions.timeEstimates.human}</span>
              </button>
              
              <button class="workforce-option hybrid ${workforceSelections[index] === 'hybrid' ? 'active' : ''}" 
                      data-process="${index}" 
                      data-type="hybrid"
                      ${process.workforceOptions.costs.hybrid === process.workforceOptions.costs.human ? 'disabled' : ''}>
                <span class="workforce-icon">🤝</span>
                <span class="workforce-name">Hybrid</span>
                <span class="workforce-cost">$${process.workforceOptions.costs.hybrid}/mo</span>
                <span class="workforce-time">${process.workforceOptions.timeEstimates.hybrid}</span>
              </button>
            </div>
            
            ${process.workforceOptions.agentTypes.length > 0 ? `
              <div class="agent-matches">
                <span class="agent-matches-label">Recommended Agents:</span>
                ${process.workforceOptions.agentTypes.map(agentType => `
                  <span class="agent-match-badge">${agentType}</span>
                `).join('')}
                <button class="quick-hire-btn" data-agent-type="${process.workforceOptions.agentTypes[0]}">
                  Hire Now →
                </button>
              </div>
            ` : ''}
          </div>
          
          <div class="process-tasks">
            <strong>Key Tasks:</strong>
            <ul>
              ${process.tasks.map(task => `<li>${task}</li>`).join('')}
            </ul>
          </div>
        </div>
      `).join('')}
    </div>
    
    <div class="pipeline-actions">
      <button class="primary-btn" onclick="document.getElementById('bizIdeaInput').scrollIntoView({ behavior: 'smooth' })">
        Try Another Idea
      </button>
    </div>
  `;

  container.classList.remove('hidden');

  // Store pipeline for reference
  window.currentPipeline = pipeline;

  // Update cost breakdown
  updateCostBreakdown(pipeline);

  // Attach workforce selection listeners
  attachWorkforceListeners(pipeline);
}

function calculateTotalCost(pipeline) {
  totalMonthlyCost = 0;
  pipeline.processes.forEach((process, idx) => {
    const selection = workforceSelections[idx];
    totalMonthlyCost += process.workforceOptions.costs[selection] || 0;
  });
  return totalMonthlyCost;
}

function updateCostBreakdown(pipeline) {
  let aiCount = 0, humanCount = 0, hybridCount = 0;
  let aiCost = 0, humanCost = 0, hybridCost = 0;

  pipeline.processes.forEach((process, idx) => {
    const selection = workforceSelections[idx];
    const cost = process.workforceOptions.costs[selection] || 0;

    if (selection === 'ai') {
      aiCount++;
      aiCost += cost;
    } else if (selection === 'human') {
      humanCount++;
      humanCost += cost;
    } else if (selection === 'hybrid') {
      hybridCount++;
      hybridCost += cost;
    }
  });

  const aiCostEl = document.getElementById('aiCostCount');
  const humanCostEl = document.getElementById('humanCostCount');
  const hybridCostEl = document.getElementById('hybridCostCount');

  if (aiCostEl) aiCostEl.textContent = `${aiCount} processes ($${aiCost.toLocaleString()})`;
  if (humanCostEl) humanCostEl.textContent = `${humanCount} processes ($${humanCost.toLocaleString()})`;
  if (hybridCostEl) hybridCostEl.textContent = `${hybridCount} processes ($${hybridCost.toLocaleString()})`;
}

function attachWorkforceListeners(pipeline) {
  // Workforce option buttons
  document.querySelectorAll('.workforce-option').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const button = e.currentTarget;
      if (button.disabled) return;

      const processIndex = parseInt(button.getAttribute('data-process'));
      const workforceType = button.getAttribute('data-type');

      // Update selection
      workforceSelections[processIndex] = workforceType;

      // Update UI - remove active from siblings
      const parent = button.parentElement;
      parent.querySelectorAll('.workforce-option').forEach(b => b.classList.remove('active'));
      button.classList.add('active');

      // Update process block class
      const processBlock = document.querySelector(`[data-process-index="${processIndex}"]`);
      processBlock.className = processBlock.className.replace(/workforce-\w+/, `workforce-${workforceType}`);

      // Recalculate costs
      calculateTotalCost(pipeline);
      document.getElementById('totalCostDisplay').textContent = `$${totalMonthlyCost.toLocaleString()}`;
      updateCostBreakdown(pipeline);

      // Animate cost update
      const costDisplay = document.getElementById('totalCostDisplay');
      costDisplay.style.transform = 'scale(1.1)';
      setTimeout(() => costDisplay.style.transform = 'scale(1)', 200);
    });
  });

  // Quick hire buttons
  document.querySelectorAll('.quick-hire-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const agentType = btn.getAttribute('data-agent-type');

      // Open agent marketplace modal
      const agentMarketplaceModal = document.getElementById('agentMarketplaceModal');
      if (agentMarketplaceModal) {
        agentMarketplaceModal.classList.remove('hidden');

        // Scroll to the specific agent card
        setTimeout(() => {
          const agentCards = document.querySelectorAll('.agent-card h4');
          agentCards.forEach(card => {
            if (card.textContent === agentType) {
              card.closest('.agent-card').scrollIntoView({ behavior: 'smooth', block: 'center' });
              card.closest('.agent-card').style.border = '2px solid var(--accent-color)';
              setTimeout(() => {
                card.closest('.agent-card').style.border = '';
              }, 2000);
            }
          });
        }, 300);
      }
    });
  });
}

// Wire up Idea Generator button
if (ideaGeneratorBtn) {
  ideaGeneratorBtn.addEventListener('click', () => {
    renderIdeaGenerator();
  });
}


// 6. Step 3: Configure View
function renderConfigureView() {
    pipelineContainer.innerHTML = `
    <div class="configure-container fade-in">
      <h1 class="title">⚙️ Configure Your Business</h1>
      <p class="subtitle">Set up your business parameters and integrations</p>
      
      <div class="config-grid">
        <div class="config-card card glass">
          <h3>Business Information</h3>
          <div class="form-group">
            <label>Business Name</label>
            <input type="text" class="input-field" placeholder="Enter business name" />
          </div>
          <div class="form-group">
            <label>Industry</label>
            <select class="input-field">
              <option>Select industry</option>
              <option>Technology</option>
              <option>Food & Beverage</option>
              <option>Healthcare</option>
              <option>E-commerce</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div class="config-card card glass">
          <h3>API Keys</h3>
          <div class="form-group">
            <label>OpenAI API Key</label>
            <input type="password" class="input-field" placeholder="sk-..." />
          </div>
          <div class="form-group">
            <label>Stripe API Key</label>
            <input type="password" class="input-field" placeholder="pk_..." />
          </div>
        </div>

        <div class="config-card card glass">
          <h3>Permissions</h3>
          <div class="checkbox-group">
            <label><input type="checkbox" checked> Enable AI Automation</label>
            <label><input type="checkbox" checked> Allow External Integrations</label>
            <label><input type="checkbox"> Auto-hire Recommended Agents</label>
            <label><input type="checkbox"> Send Weekly Reports</label>
          </div>
        </div>

        <div class="config-card card glass">
          <h3>Notifications</h3>
          <div class="form-group">
            <label>Email Notifications</label>
            <input type="email" class="input-field" placeholder="your@email.com" />
          </div>
          <div class="checkbox-group">
            <label><input type="checkbox" checked> Agent Status Updates</label>
            <label><input type="checkbox" checked> Revenue Milestones</label>
            <label><input type="checkbox"> Daily Summaries</label>
          </div>
        </div>
      </div>

      <button class="primary-btn save-config-btn" style="margin-top: 2rem;">Save Configuration</button>
    </div>
  `;

    // Add save handler
    const saveBtn = document.querySelector('.save-config-btn');
    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            showNotification('✓ Configuration saved successfully!');
        });
    }
}

// 7. Step 5: Monitor View
function renderMonitorView() {
    pipelineContainer.innerHTML = `
    <div class="monitor-container fade-in">
      <h1 class="title">📊 Monitor Performance</h1>
      <p class="subtitle">Track your business metrics and agent performance</p>
      
      <div class="metrics-grid">
        <div class="metric-card card glass">
          <div class="metric-icon">💰</div>
          <div class="metric-label">Revenue</div>
          <div class="metric-value">$12,450</div>
          <div class="metric-change positive">+23% this month</div>
        </div>

        <div class="metric-card card glass">
          <div class="metric-icon">👥</div>
          <div class="metric-label">Active Agents</div>
          <div class="metric-value">${hiredAgents.length}</div>
          <div class="metric-change">${hiredAgents.length > 0 ? 'Working' : 'Hire agents to start'}</div>
        </div>

        <div class="metric-card card glass">
          <div class="metric-icon">⚡</div>
          <div class="metric-label">Automation Rate</div>
          <div class="metric-value">67%</div>
          <div class="metric-change positive">+12% this week</div>
        </div>

        <div class="metric-card card glass">
          <div class="metric-icon">🎯</div>
          <div class="metric-label">Goals Completed</div>
          <div class="metric-value">8/12</div>
          <div class="metric-change">4 remaining</div>
        </div>
      </div>

      <div class="performance-section">
        <h2>Agent Performance</h2>
        <div class="agent-performance-list">
          ${hiredAgents.length > 0 ? hiredAgents.map(agent => `
            <div class="performance-item card glass">
              <div class="perf-header">
                <span class="perf-icon">${agent.icon}</span>
                <span class="perf-name">${agent.name}</span>
                <span class="perf-status active">Active</span>
              </div>
              <div class="perf-metrics">
                <div class="perf-metric">
                  <span class="perf-metric-label">Tasks Completed</span>
                  <span class="perf-metric-value">${Math.floor(Math.random() * 50 + 20)}</span>
                </div>
                <div class="perf-metric">
                  <span class="perf-metric-label">Efficiency</span>
                  <span class="perf-metric-value">${Math.floor(Math.random() * 30 + 70)}%</span>
                </div>
                <div class="perf-metric">
                  <span class="perf-metric-label">Cost Savings</span>
                  <span class="perf-metric-value">$${Math.floor(Math.random() * 3000 + 1000)}</span>
                </div>
              </div>
            </div>
          `).join('') : '<p class="no-agents-message">No agents hired yet. Go to Step 4 to hire agents!</p>'}
        </div>
      </div>

      <button class="primary-btn" onclick="document.getElementById('alignmentModal').classList.remove('hidden')" style="margin-top: 2rem;">
        View Hackathon Alignment
      </button>
    </div>
  `;
}
