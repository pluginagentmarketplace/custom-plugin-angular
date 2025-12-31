<div align="center">

<!-- Animated Typing Banner -->
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=28&duration=3000&pause=1000&color=DD0031&center=true&vCenter=true&multiline=true&repeat=true&width=600&height=100&lines=Angular+Development+Assistant;8+Specialized+Agents+%7C+8+Skills;Build+Modern+Angular+18%2B+Apps" alt="Angular Development Assistant" />

<br/>

<!-- Badge Row 1: Status Badges -->
[![Version](https://img.shields.io/badge/Version-2.0.0-blue?style=for-the-badge)](https://github.com/pluginagentmarketplace/custom-plugin-angular/releases)
[![License](https://img.shields.io/badge/License-Custom-yellow?style=for-the-badge)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Production-brightgreen?style=for-the-badge)](#)
[![SASMP](https://img.shields.io/badge/SASMP-v1.3.0-blueviolet?style=for-the-badge)](#)

<!-- Badge Row 2: Content & Tech Badges -->
[![Agents](https://img.shields.io/badge/Agents-8-orange?style=flat-square&logo=robot)](#-agents)
[![Skills](https://img.shields.io/badge/Skills-12-purple?style=flat-square&logo=lightning)](#-skills)
[![Commands](https://img.shields.io/badge/Commands-4-green?style=flat-square&logo=terminal)](#-commands)
[![Angular](https://img.shields.io/badge/Angular-18+-DD0031?style=flat-square&logo=angular)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

<br/>

<!-- Quick CTA Row -->
[📦 **Install Now**](#-quick-start) · [🤖 **Explore Agents**](#-agents) · [📖 **Documentation**](#-documentation) · [⭐ **Star this repo**](https://github.com/pluginagentmarketplace/custom-plugin-angular)

---

### What is this?

> **Angular Development Assistant** is a Claude Code plugin with **8 specialized agents** and **12 skills** for Angular 18+ development. Build modern, production-ready Angular applications with AI-powered implementation agents that write code, not just explain.

</div>

---

## 📑 Table of Contents

<details>
<summary>Click to expand</summary>

- [Quick Start](#-quick-start)
- [Features](#-features)
- [Agents](#-agents)
- [Skills](#-skills)
- [Commands](#-commands)
- [Usage Examples](#-usage-examples)
- [Modern Angular Features](#-modern-angular-18-features)
- [Documentation](#-documentation)
- [Contributing](#-contributing)
- [License](#-license)

</details>

---

## 🚀 Quick Start

### Prerequisites

- Claude Code CLI v2.0.27+
- Active Claude subscription
- Node.js 18+ (for Angular projects)

### Installation (Choose One)

<details open>
<summary><strong>Option 1: From Marketplace (Recommended)</strong></summary>

```bash
# Step 1️⃣ Add the marketplace
/plugin add marketplace pluginagentmarketplace/custom-plugin-angular

# Step 2️⃣ Install the plugin
/plugin install angular-development-assistant@pluginagentmarketplace-angular

# Step 3️⃣ Restart Claude Code
# Close and reopen your terminal/IDE
```

</details>

<details>
<summary><strong>Option 2: Local Installation</strong></summary>

```bash
# Clone the repository
git clone https://github.com/pluginagentmarketplace/custom-plugin-angular.git
cd custom-plugin-angular

# Load locally
/plugin load .

# Restart Claude Code
```

</details>

### ✅ Verify Installation

After restart, you should see these agents:

```
angular-development-assistant:01-typescript-fundamentals
angular-development-assistant:02-angular-core
angular-development-assistant:03-reactive-programming
angular-development-assistant:04-forms-directives
angular-development-assistant:05-routing-performance
angular-development-assistant:06-state-management
angular-development-assistant:07-testing-deployment
angular-development-assistant:08-modern-angular
```

> **Tip:** Run `/explore` to see all agents and their capabilities!

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🤖 **8 Agents** | Specialized AI agents for every Angular domain |
| 🛠️ **12 Skills** | Reusable capabilities with Golden Format |
| ⌨️ **4 Commands** | Quick slash commands for learning |
| 📚 **Modern Angular** | Signals, Standalone, @defer, SSR support |
| 🔄 **SASMP v1.3.0** | Full protocol compliance |

---

## 🤖 Agents

### 8 Specialized Implementation Agents

Each agent is designed to **do the work**, not just explain:

| # | Agent | Purpose | Example Prompts |
|---|-------|---------|-----------------|
| 1 | **TypeScript Fundamentals** | Types, generics, decorators, strict mode | `"Fix all type errors"`, `"Convert to TypeScript"` |
| 2 | **Angular Core** | Components, services, DI, lifecycle hooks | `"Create UserService"`, `"Generate component"` |
| 3 | **Reactive Programming** | RxJS observables, operators, memory leaks | `"Add debouncing"`, `"Fix memory leaks"` |
| 4 | **Forms & Directives** | Reactive forms, validators, custom directives | `"Create registration form"`, `"Add async validator"` |
| 5 | **Routing & Performance** | Lazy loading, guards, bundle optimization | `"Add lazy loading"`, `"Create auth guard"` |
| 6 | **State Management** | NgRx store, actions, reducers, effects | `"Set up NgRx"`, `"Create effects"` |
| 7 | **Testing & Deployment** | Unit tests, E2E, CI/CD, builds | `"Write component tests"`, `"Set up CI/CD"` |
| 8 | **Modern Angular** | Signals, standalone, @defer, SSR, zoneless | `"Migrate to standalone"`, `"Add Signals"` |

<details>
<summary><strong>📋 Agent Capabilities Matrix</strong></summary>

| Agent | Writes Code | Fixes Bugs | Refactors | Tests |
|-------|:-----------:|:----------:|:---------:|:-----:|
| TypeScript | ✅ | ✅ | ✅ | ✅ |
| Angular Core | ✅ | ✅ | ✅ | ✅ |
| RxJS | ✅ | ✅ | ✅ | ✅ |
| Forms | ✅ | ✅ | ✅ | ✅ |
| Routing | ✅ | ✅ | ✅ | ✅ |
| State | ✅ | ✅ | ✅ | ✅ |
| Testing | ✅ | ✅ | ✅ | ✅ |
| Modern | ✅ | ✅ | ✅ | ✅ |

</details>

---

## 🛠️ Skills

### Available Skills

| Skill | Description | Invoke |
|-------|-------------|--------|
| `typescript` | Type system mastery | `Skill("angular-development-assistant:typescript")` |
| `core` | Component & service patterns | `Skill("angular-development-assistant:core")` |
| `rxjs` | Reactive programming | `Skill("angular-development-assistant:rxjs")` |
| `forms` | Form handling & validation | `Skill("angular-development-assistant:forms")` |
| `routing` | Navigation & lazy loading | `Skill("angular-development-assistant:routing")` |
| `state-management` | NgRx patterns | `Skill("angular-development-assistant:state-management")` |
| `testing` | Test strategies | `Skill("angular-development-assistant:testing")` |
| `modern-angular` | Angular 18+ features | `Skill("angular-development-assistant:modern-angular")` |

### Skill Categories

```
📦 Core Development
├── typescript - Types, generics, decorators
├── core - Components, services, DI
└── rxjs - Observables, operators, subjects

📦 UI & Forms
├── forms - Reactive forms, validators
└── routing - Navigation, lazy loading, guards

📦 Advanced
├── state-management - NgRx, effects, selectors
├── testing - Unit, E2E, mocking
└── modern-angular - Signals, standalone, SSR
```

---

## ⌨️ Commands

| Command | Description |
|---------|-------------|
| `/learn` | Start Angular learning paths |
| `/explore` | Discover all 8 agents |
| `/assess` | Test your Angular knowledge |
| `/projects` | Browse 50+ hands-on projects |

---

## 💡 Usage Examples

### Example 1: Migrate to Angular Signals

<table>
<tr>
<th>❌ Before (BehaviorSubject)</th>
<th>✅ After (Signals)</th>
</tr>
<tr>
<td>

```typescript
// Old reactive pattern
private userSubject = new BehaviorSubject<User | null>(null);
user$ = this.userSubject.asObservable();

updateUser(user: User) {
  this.userSubject.next(user);
}

ngOnDestroy() {
  this.userSubject.complete();
}
```

</td>
<td>

```typescript
// Modern Signals pattern
user = signal<User | null>(null);
userName = computed(() => this.user()?.name ?? 'Guest');

updateUser(user: User) {
  this.user.set(user);
}

// No cleanup needed!
```

</td>
</tr>
</table>

**Result:** ~25% less memory, no subscription leaks!

---

### Example 2: Add @defer for Performance

```
👤 User: "Optimize my dashboard for faster initial load"

🤖 Agent: Modern Angular (18+)
   ├── Analyzes component tree
   ├── Identifies heavy components
   ├── Adds @defer blocks with viewport triggers
   └── Implements prefetch on idle

✅ Result: 68% smaller initial bundle (2.5MB → 800KB)
```

**Before:**
```html
<app-header />
<app-hero />
<app-heavy-dashboard />
<app-chat-widget />
```

**After:**
```html
<app-header />
<app-hero />

@defer (on viewport) {
  <app-heavy-dashboard />
} @placeholder {
  <app-skeleton />
}

@defer (on interaction; prefetch on idle) {
  <app-chat-widget />
}
```

---

### Example 3: Complete NgRx Setup

```
👤 User: "Set up NgRx for product management with CRUD"

🤖 Agent: State Management
   ├── Creates feature store structure
   ├── Generates actions (loadProducts, addProduct, etc.)
   ├── Implements reducers with entity adapter
   ├── Creates effects for HTTP calls
   ├── Builds memoized selectors
   └── Adds error handling

✅ Result: Production-ready state management in minutes!
```

---

## 🔥 Modern Angular 18+ Features

| Feature | Support | Improvement |
|---------|---------|-------------|
| **Signals** | `signal()`, `computed()`, `effect()` | ~25% less memory |
| **Standalone** | No NgModules needed | ~45% better tree-shaking |
| **@defer** | Lazy component loading | ~60% smaller bundle |
| **SSR** | Server-side rendering | ~70% better LCP |
| **Zoneless** | No Zone.js | ~30% faster CD |
| **Control Flow** | `@if`, `@for`, `@switch` | Cleaner templates |
| **Material 3** | Modern design system | Latest components |

---

## 📚 Documentation

| Document | Description |
|----------|-------------|
| [INSTALLATION.md](INSTALLATION.md) | Detailed setup guide |
| [CHANGELOG.md](CHANGELOG.md) | Version history |
| [CONTRIBUTING.md](CONTRIBUTING.md) | How to contribute |

---

## 📁 Project Structure

<details>
<summary>Click to expand</summary>

```
custom-plugin-angular/
├── 📁 .claude-plugin/
│   ├── plugin.json              # Plugin manifest
│   └── marketplace.json         # Marketplace config
├── 📁 agents/                   # 8 specialized agents
│   ├── 01-typescript-fundamentals.md
│   ├── 02-angular-core.md
│   ├── 03-reactive-programming.md
│   ├── 04-forms-directives.md
│   ├── 05-routing-performance.md
│   ├── 06-state-management.md
│   ├── 07-testing-deployment.md
│   └── 08-modern-angular.md
├── 📁 skills/                   # 12 skills (Golden Format)
│   ├── typescript/
│   ├── core/
│   ├── rxjs/
│   ├── forms/
│   ├── routing/
│   ├── state-management/
│   ├── testing/
│   └── modern-angular/
├── 📁 commands/                 # 4 slash commands
│   ├── learn.md
│   ├── explore.md
│   ├── assess.md
│   └── projects.md
├── 📁 hooks/
│   └── hooks.json
├── 📄 README.md
├── 📄 INSTALLATION.md
├── 📄 CHANGELOG.md
├── 📄 CONTRIBUTING.md
└── 📄 LICENSE
```

</details>

---

## 📅 Metadata

| Field | Value |
|-------|-------|
| **Version** | 2.0.0 |
| **Last Updated** | 2025-12-29 |
| **Status** | Production Ready |
| **SASMP** | v1.3.0 |
| **Agents** | 8 |
| **Skills** | 12 |
| **Commands** | 4 |

---

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md).

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Follow the Golden Format for new skills
4. Submit a pull request

---

## ⚠️ Security

> **Important:** This repository contains third-party code and dependencies.
>
> - ✅ Always review code before using in production
> - ✅ Check dependencies for known vulnerabilities
> - ✅ Follow security best practices
> - ✅ Report security issues privately via [Issues](../../issues)

---

## 📝 License

Copyright © 2025 **Dr. Umit Kacar** & **Muhsin Elcicek**

Custom License - See [LICENSE](LICENSE) for details.

---

## 👥 Contributors

<table>
<tr>
<td align="center">
<strong>Dr. Umit Kacar</strong><br/>
Senior AI Researcher & Engineer
</td>
<td align="center">
<strong>Muhsin Elcicek</strong><br/>
Senior Software Architect
</td>
</tr>
</table>

---

<div align="center">

### ⭐ Star History

If you find this plugin useful, please give it a star!

[![Star History Chart](https://api.star-history.com/svg?repos=pluginagentmarketplace/custom-plugin-angular&type=Date)](https://star-history.com/#pluginagentmarketplace/custom-plugin-angular&Date)

---

**Made with ❤️ for the Angular & Claude Code Community**

[![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev)
[![GitHub](https://img.shields.io/badge/GitHub-pluginagentmarketplace-black?style=for-the-badge&logo=github)](https://github.com/pluginagentmarketplace)

</div>
