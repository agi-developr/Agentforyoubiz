# AI Idea Analyzer

Analyzes business ideas and predicts success probability, exit potential, and capital requirements.

## Current Model

**Default: HEURISTIC (Rule-based)**
- Uses keyword matching and statistical heuristics
- No API required, works offline
- Fast but less sophisticated than AI models

## Available Models

### 1. Heuristic (Default)
- **Location**: `script.js` → `performHeuristicAnalysis()`
- **Method**: Rule-based keyword matching
- **Pros**: Free, fast, no API needed
- **Cons**: Limited sophistication

### 2. OpenAI GPT-4
- **Location**: `script.js` → `performOpenAIAnalysis()`
- **Method**: GPT-4 API call
- **Setup**: 
  1. Change `AI_MODEL = 'openai'` in `script.js`
  2. Add your API key: `OPENAI_API_KEY = 'your-key-here'`
- **Pros**: Highly accurate, understands context
- **Cons**: Requires API key and costs per request

### 3. Anthropic Claude (Placeholder)
- **Location**: `script.js` → `performAnthropicAnalysis()`
- **Status**: Not yet implemented

### 4. Ollama Local LLM (Placeholder)
- **Location**: `script.js` → `performOllamaAnalysis()`
- **Status**: Not yet implemented

## How It Works

### Success Probability Model
Currently uses **founder count-based heuristics**:
- 1 Founder: 15-25% success rate
- 2 Founders: 30-50% success rate
- 3 Founders: 45-70% success rate
- 4+ Founders: 50-80% success rate

### Exit Probability (200M/2Y)
Calculates probability of $200M exit within 2 years (0-10 scale):
- Based on industry trends
- Boosted for AI/SaaS/marketplace models
- Heuristic-based scoring

### Quadrant System
- **Q1**: Low Founders | Low Success (15-25%)
- **Q2**: High Founders | Low Success (30-40%)
- **Q3**: Low Founders | High Success (50-70%)
- **Q4**: High Founders | High Success (60-80%) - IDEAL

## Configuration

Edit `script.js` line 7-8:
```javascript
const AI_MODEL = 'heuristic'; // or 'openai', 'anthropic', 'ollama'
const OPENAI_API_KEY = ''; // Add your key for OpenAI
```

## Usage

1. Open `index.html` in a browser
2. Enter a business idea
3. Click "ANALYZE IDEA" (or Ctrl+Enter)
4. View results in the table
5. Sort by any column
6. Export/import data via header buttons

