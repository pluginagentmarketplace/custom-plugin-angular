# Changelog

All notable changes to the Angular Development Assistant plugin will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.0.0] - 2025-12-28

### Added
- marketplace.json for plugin marketplace compatibility
- SASMP v1.3.0 compliance for all agents
- Template v2.1.0 README format
- Verified Installation notice
- Available Skills table with `Skill("...")` invoke syntax
- Metadata section
- Contributors section

### Changed
- plugin.json restructured with agents/skills/commands/hooks paths
- README updated with SASMP badge and missing sections
- Quick Start commands use `/plugin add marketplace` format
- hooks.json standardized to `{"hooks": {}}`

### Fixed
- E307: plugin.json repository format (object to string)
- E303: marketplace.name differs from plugin.name

---

## [1.0.0] - 2024-12-05

### Initial Release

**8 Angular Specialist Agents**
- TypeScript Fundamentals (types, generics, decorators)
- Angular Core (components, services, DI)
- Reactive Programming (RxJS, observables)
- Forms & Directives (reactive forms, validators)
- Routing & Performance (lazy loading, guards)
- State Management (NgRx, store, effects)
- Testing & Deployment (Jest, Cypress, CI/CD)
- Modern Angular (Signals, standalone, @defer, SSR)

**8 Comprehensive Skills**
- typescript, core, rxjs
- forms, routing, state-management
- testing, modern-angular

**4 Interactive Commands**
- /learn, /explore, /assess, /projects

**Status**: Production Ready

---

## Contributors

- **Dr. Umit Kacar** - Senior AI Researcher & Engineer
- **Muhsin Elcicek** - Senior Software Architect

---

*Last Updated: 2025-12-28*
