<div align="center">

# Angular Development Assistant

### Professional Angular 18+ Plugin for Claude Code

**Build modern Angular applications faster with AI-powered implementation agents**

[![Verified](https://img.shields.io/badge/Verified-Working-success?style=flat-square&logo=checkmarx)](https://github.com/pluginagentmarketplace/custom-plugin-angular)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)
[![Version](https://img.shields.io/badge/Version-2.0.0-blue?style=flat-square)](https://github.com/pluginagentmarketplace/custom-plugin-angular)
[![Status](https://img.shields.io/badge/Status-Production_Ready-brightgreen?style=flat-square)](https://github.com/pluginagentmarketplace/custom-plugin-angular)
[![Agents](https://img.shields.io/badge/Agents-8-orange?style=flat-square)](#agents-overview)
[![Skills](https://img.shields.io/badge/Skills-8-purple?style=flat-square)](#skills-reference)

[![Angular](https://img.shields.io/badge/Angular-18%2B-red?style=for-the-badge&logo=angular)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Signals](https://img.shields.io/badge/Signals-Ready-brightgreen?style=for-the-badge)](https://angular.dev/guide/signals)
[![SSR](https://img.shields.io/badge/SSR-Enabled-orange?style=for-the-badge)](https://angular.dev/guide/ssr)

[Quick Start](#quick-start) | [Agents](#agents-overview) | [Skills](#skills-reference) | [Examples](#usage-examples)

</div>

---

## Verified Installation

> **This plugin has been tested and verified working on Claude Code.**
> Last verified: December 2025

---

## Quick Start

### Option 1: Install from GitHub (Recommended)

```bash
# Step 1: Add the marketplace from GitHub
/plugin marketplace add pluginagentmarketplace/custom-plugin-angular

# Step 2: Install the plugin
/plugin install angular-development-assistant@angular-development-assistant

# Step 3: Restart Claude Code to load the plugin
```

Alternative URL format:
```bash
/plugin marketplace add https://github.com/pluginagentmarketplace/custom-plugin-angular
```

### Option 2: Clone and Load Locally

```bash
# Clone the repository
git clone https://github.com/pluginagentmarketplace/custom-plugin-angular.git

# Navigate to the directory in Claude Code
cd custom-plugin-angular

# Load the plugin
/plugin load .
```

After loading, restart Claude Code.

### Verify Installation

After restarting Claude Code, verify the plugin is loaded. You should see these agents available:

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

---

## Available Skills

Once installed, these skills become available:

| Skill | Invoke Command |
|-------|----------------|
| TypeScript | `Skill("angular-development-assistant:typescript")` |
| Angular Core | `Skill("angular-development-assistant:core")` |
| RxJS | `Skill("angular-development-assistant:rxjs")` |
| Forms | `Skill("angular-development-assistant:forms")` |
| Routing | `Skill("angular-development-assistant:routing")` |
| State Management | `Skill("angular-development-assistant:state-management")` |
| Testing | `Skill("angular-development-assistant:testing")` |
| Modern Angular | `Skill("angular-development-assistant:modern-angular")` |

---

## What This Plugin Does

This plugin provides **8 specialized agents** that actively implement Angular code:

| Agent | Purpose |
|-------|---------|
| **TypeScript Fundamentals** | Type safety, generics, decorators, JS-to-TS conversion |
| **Angular Core** | Components, services, modules, DI, lifecycle hooks |
| **Reactive Programming** | RxJS observables, operators, memory leak fixes |
| **Forms & Directives** | Reactive forms, validators, custom directives |
| **Routing & Performance** | Lazy loading, guards, bundle optimization |
| **State Management** | NgRx store, actions, reducers, effects, selectors |
| **Testing & Deployment** | Unit tests, E2E, CI/CD, production builds |
| **Modern Angular** | Signals, standalone, @defer, SSR, zoneless, Material 3 |

---

## Agents Overview

### 8 Implementation Agents

Each agent is designed to **do the work**, not just explain:

| Agent | Capabilities | Example Prompts |
|-------|--------------|-----------------|
| **TypeScript** | Converts JS to TS, fixes type errors, implements generics, enforces strict mode | `"Fix all type errors"`, `"Convert to TypeScript"` |
| **Modern Angular** | Implements Signals, migrates to standalone, adds @defer blocks, sets up SSR | `"Migrate to standalone"`, `"Add Signals state"` |
| **Core Builder** | Generates components, creates services, builds modules, implements DI | `"Create UserService"`, `"Generate component"` |
| **RxJS** | Implements observables, applies operators, fixes memory leaks, builds pipelines | `"Add debouncing"`, `"Fix memory leaks"` |
| **Forms** | Builds reactive forms, implements validators, creates directives | `"Create registration form"`, `"Add async validator"` |
| **Routing** | Configures routing, implements lazy loading, creates guards, optimizes bundles | `"Add lazy loading"`, `"Create auth guard"` |
| **State (NgRx)** | Sets up NgRx store, creates actions/reducers, builds selectors, implements effects | `"Set up NgRx"`, `"Create effects"` |
| **Testing** | Writes unit tests, implements E2E, optimizes builds, sets up CI/CD | `"Write component tests"`, `"Set up CI/CD"` |

---

## Skills Reference

Each skill provides detailed implementation patterns:

| Skill | Focus Areas |
|-------|-------------|
| **typescript** | Types, generics, decorators, strict mode |
| **core** | Components, services, DI, lifecycle |
| **rxjs** | Observables, operators, subjects, error handling |
| **forms** | Reactive forms, validators, dynamic forms |
| **routing** | Lazy loading, guards, resolvers, performance |
| **state-management** | NgRx store, actions, reducers, effects, selectors |
| **testing** | Unit tests, E2E, mocks, CI/CD |
| **modern-angular** | Signals, standalone, @defer, SSR, zoneless |

---

## Usage Examples

### Example 1: Implement Angular Signals

**Before (BehaviorSubject):**
```typescript
private userSubject = new BehaviorSubject<User | null>(null);
user$ = this.userSubject.asObservable();

ngOnDestroy() {
  this.userSubject.complete();
}
```

**After (Signals):**
```typescript
user = signal<User | null>(null);
userName = computed(() => this.user()?.name ?? 'Guest');

// No cleanup needed!
```

### Example 2: Migrate to Standalone

```
User: "Migrate this entire app to standalone components"

Agent: Modern Angular (18+)
  - Converts all components to standalone: true
  - Removes unnecessary NgModules
  - Updates bootstrap to use standalone APIs
  - Cleans up imports
```

### Example 3: Add Deferrable Views

**Before:**
```html
<app-header />
<app-hero />
<app-heavy-dashboard />
<app-analytics />
<app-chat-widget />
```
Bundle size: 2.5 MB initial

**After:**
```html
<app-header />
<app-hero />

@defer (on viewport) {
  <app-heavy-dashboard />
}

@defer (on interaction; prefetch on idle) {
  <app-chat-widget />
}
```
Bundle size: 800 KB initial (68% reduction)

### Example 4: Complete NgRx Setup

```
User: "Set up NgRx for product management with CRUD operations"

Agent: State Management Implementation
  - Creates feature store structure
  - Generates actions (loadProducts, addProduct, etc.)
  - Implements reducers with entity adapter
  - Creates effects for HTTP calls
  - Builds memoized selectors
  - Adds error handling
```

---

## Modern Angular 18+ Features

This plugin specializes in modern Angular:

| Feature | Support |
|---------|---------|
| Signals | signal(), computed(), effect() |
| Standalone | No NgModules, tree-shakable |
| @defer | Lazy loading, performance |
| SSR | Hydration, Core Web Vitals |
| Zoneless | No Zone.js, faster CD |
| Material 3 | Modern design, M3 components |
| Control Flow | @if, @for, @switch |
| TypeScript 5.4+ | Latest features, strict mode |

---

## Plugin Structure

```
custom-plugin-angular/
├── .claude-plugin/
│   ├── plugin.json           # Plugin manifest
│   └── marketplace.json      # Marketplace config
├── agents/                   # 8 implementation agents
│   ├── 01-typescript-fundamentals.md
│   ├── 02-angular-core.md
│   ├── 03-reactive-programming.md
│   ├── 04-forms-directives.md
│   ├── 05-routing-performance.md
│   ├── 06-state-management.md
│   ├── 07-testing-deployment.md
│   └── 08-modern-angular.md
├── skills/                   # 8 skill guides
│   ├── typescript/SKILL.md
│   ├── core/SKILL.md
│   ├── rxjs/SKILL.md
│   ├── forms/SKILL.md
│   ├── routing/SKILL.md
│   ├── state-management/SKILL.md
│   ├── testing/SKILL.md
│   └── modern-angular/SKILL.md
├── commands/                 # 4 helper commands
│   ├── learn.md
│   ├── explore.md
│   ├── assess.md
│   └── projects.md
├── hooks/                    # Hook definitions
├── README.md
├── INSTALLATION.md
└── LICENSE
```

---

## Performance Gains

Expected improvements with modern Angular features:

| Feature | Improvement |
|---------|-------------|
| @defer blocks | ~60% smaller initial bundle |
| Zoneless detection | ~30% faster change detection |
| SSR + Hydration | ~70% better LCP score |
| Signals | ~25% less memory usage |
| Standalone | ~45% better tree-shaking |

---

## Contributing

Contributions are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## License

MIT License - See [LICENSE](LICENSE) for details.

---

<div align="center">

**Built for the Angular community**

[![Made with Angular](https://img.shields.io/badge/Made%20with-Angular-red?style=for-the-badge&logo=angular)](https://angular.dev)

</div>
