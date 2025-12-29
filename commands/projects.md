---
name: projects
description: Practice Angular skills with 50+ hands-on projects at beginner to advanced levels
allowed-tools: Read
---

# /projects - Hands-On Projects

## Practice Your Angular Skills

Master Angular through 50+ carefully designed hands-on projects. Each project reinforces specific concepts and builds toward real-world applications.

---

## 🎯 Projects by Difficulty Level

### Beginner Projects (1-2 weeks each)

#### Project 1: Personal Portfolio Website
**Topics**: Components, templates, basic routing, styling
**Duration**: 5-7 days
**Skills**: HTML, CSS, TypeScript basics

**Requirements**:
- Home page with personal info
- About page
- Projects showcase
- Contact section
- Responsive design

**Learning Outcomes**:
✅ Component structure
✅ Template syntax
✅ Routing between pages
✅ CSS in Angular

**Code Starter**:
```typescript
@Component({
  selector: 'app-portfolio',
  template: `
    <nav>
      <a routerLink="/home">Home</a>
      <a routerLink="/about">About</a>
      <a routerLink="/projects">Projects</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
```

---

#### Project 2: Todo Application
**Topics**: Component interaction, event binding, @Input/@Output
**Duration**: 3-5 days
**Skills**: Components, services, lists

**Requirements**:
- Add, delete, complete todos
- Filter (all, active, completed)
- Save to localStorage
- Edit todo titles

**Learning Outcomes**:
✅ Component communication
✅ Event handling
✅ List rendering
✅ Local storage

**Key Components**:
- TodoListComponent
- TodoItemComponent
- TodoService

---

#### Project 3: Weather App
**Topics**: HTTP requests, services, API integration
**Duration**: 5-7 days
**Skills**: HttpClient, services, templates

**Requirements**:
- Search for cities
- Display weather information
- Show 5-day forecast
- Store favorites
- Display weather icons

**Learning Outcomes**:
✅ HTTP GET requests
✅ Service architecture
✅ API integration
✅ Data display

**API Suggestion**: OpenWeatherMap API

---

#### Project 4: Registration Form
**Topics**: Template-driven forms, validation, user input
**Duration**: 3-5 days
**Skills**: Forms, validation, ngModel

**Requirements**:
- Form fields (name, email, password)
- Client-side validation
- Display errors
- Submit handling
- Confirmation page

**Learning Outcomes**:
✅ Template-driven forms
✅ Built-in validators
✅ Form state
✅ Form submission

---

#### Project 5: Blog Application
**Topics**: CRUD operations, routing, services
**Duration**: 7-10 days
**Skills**: Services, routing, HTTP, templates

**Requirements**:
- List blog posts
- View post detail
- Create new post
- Edit existing post
- Delete post
- Comment system

**Learning Outcomes**:
✅ CRUD operations
✅ Route parameters
✅ Service patterns
✅ Navigation

---

### Intermediate Projects (2-4 weeks each)

#### Project 6: E-Commerce Shopping Cart
**Topics**: Reactive forms, state management basics, cart operations
**Duration**: 10-14 days

**Requirements**:
- Product listing with filters
- Shopping cart functionality
- Checkout form (reactive)
- Order summary
- Product reviews

**Learning Outcomes**:
✅ Reactive forms
✅ State management
✅ Cart operations
✅ Complex forms

---

#### Project 7: Real-Time Chat Application
**Topics**: WebSockets, services, component communication
**Duration**: 14-21 days

**Requirements**:
- User registration/login
- Real-time messaging
- User list
- Typing indicators
- Message history
- Notifications

**Learning Outcomes**:
✅ WebSocket integration
✅ Real-time data
✅ User authentication
✅ Service patterns

---

#### Project 8: Analytics Dashboard
**Topics**: RxJS operators, data transformation, charting
**Duration**: 10-14 days

**Requirements**:
- Multiple data sources
- Real-time updates
- Various chart types
- Data filtering
- Export functionality
- Performance metrics

**Learning Outcomes**:
✅ RxJS operators
✅ combineLatest, mergeMap
✅ Chart libraries
✅ Data transformation

---

#### Project 9: Task Management System
**Topics**: Drag-and-drop, forms, services, notifications
**Duration**: 12-16 days

**Requirements**:
- Create tasks with details
- Kanban board (drag-and-drop)
- Task filtering/sorting
- Team collaboration
- Due date reminders
- Activity log

**Learning Outcomes**:
✅ Angular CDK drag-drop
✅ Complex component interactions
✅ Service architecture
✅ User notifications

---

#### Project 10: Job Portal
**Topics**: Advanced routing, filtering, search, forms
**Duration**: 14-21 days

**Requirements**:
- Job listings with filters
- Advanced search
- Job detail page
- Application form
- User profiles
- Saved jobs

**Learning Outcomes**:
✅ Query parameters
✅ Complex filtering
✅ Route parameters
✅ Form patterns

---

### Advanced Projects (4-8 weeks each)

#### Project 11: Social Media Platform
**Topics**: NgRx state management, lazy loading, authorization
**Duration**: 28-42 days

**Requirements**:
- User authentication
- Post creation and feed
- Follow/unfollow users
- Comments and likes
- Notifications system
- User profiles
- Search functionality

**Learning Outcomes**:
✅ NgRx patterns
✅ Authentication guards
✅ Lazy loading features
✅ Complex state management

---

#### Project 12: Project Management Tool
**Topics**: State management, drag-drop, complex forms, real-time
**Duration**: 28-42 days

**Requirements**:
- Project creation
- Task boards (Kanban)
- Team management
- Notifications
- File uploads
- Comments on tasks
- Time tracking

**Learning Outcomes**:
✅ NgRx entity adapters
✅ Complex UI interactions
✅ Real-time updates
✅ File handling

---

#### Project 13: Learning Platform
**Topics**: Advanced routing, lazy loading, progress tracking, assessments
**Duration**: 35-49 days

**Requirements**:
- Course catalog
- Lesson content with video
- Progress tracking
- Quizzes and assessments
- Certificate generation
- User dashboard
- Discussion forums

**Learning Outcomes**:
✅ Feature module organization
✅ Lazy loading patterns
✅ Complex state
✅ Advanced routing

---

#### Project 14: Health & Fitness App
**Topics**: Charts, data visualization, PWA, offline support
**Duration**: 28-42 days

**Requirements**:
- User health data tracking
- Workout logging
- Progress charts
- Nutrition tracking
- Social features
- Offline functionality
- Mobile optimization

**Learning Outcomes**:
✅ Data visualization
✅ PWA implementation
✅ Offline support
✅ Mobile optimization

---

#### Project 15: Enterprise Dashboard
**Topics**: Performance optimization, accessibility, testing, monitoring
**Duration**: 35-49 days

**Requirements**:
- Complex analytics
- Real-time data
- Multiple chart types
- Export to PDF/Excel
- Accessibility compliance
- Comprehensive testing
- Monitoring/logging

**Learning Outcomes**:
✅ Performance optimization
✅ Accessibility (WCAG)
✅ Advanced testing
✅ Monitoring

---

## 📋 Project Selection Guide

### By Topic Focus

**Learning TypeScript?**
- Project 1: Portfolio
- Project 5: Blog App
- Project 6: Shopping Cart

**Mastering Components?**
- Project 2: Todo App
- Project 4: Registration Form
- Project 9: Task Manager

**RxJS & Observables?**
- Project 3: Weather App
- Project 8: Analytics
- Project 11: Social Media

**Forms & Validation?**
- Project 4: Registration
- Project 6: Shopping Cart
- Project 10: Job Portal

**Routing & Navigation?**
- Project 1: Portfolio
- Project 5: Blog
- Project 7: Chat

**State Management?**
- Project 11: Social Media
- Project 12: Project Mgmt
- Project 15: Dashboard

**Testing & Performance?**
- Project 14: Health App
- Project 15: Dashboard
- Any advanced project

---

## 🎓 Project Progression Path

```
Beginner
├── Project 1: Portfolio
├── Project 2: Todo App
├── Project 3: Weather App
├── Project 4: Registration
└── Project 5: Blog

    ↓

Intermediate
├── Project 6: Shopping Cart
├── Project 7: Chat
├── Project 8: Analytics
├── Project 9: Task Manager
└── Project 10: Job Portal

    ↓

Advanced
├── Project 11: Social Media
├── Project 12: Project Mgmt
├── Project 13: Learning Platform
├── Project 14: Health App
└── Project 15: Enterprise Dashboard
```

---

## 🚀 Project Best Practices

### Before Starting
- [ ] Understand all project requirements
- [ ] Break down into smaller tasks
- [ ] Plan component structure
- [ ] Design database schema (if applicable)
- [ ] Setup version control (Git)

### During Development
- [ ] Follow Angular style guide
- [ ] Commit regularly with clear messages
- [ ] Write unit tests as you go
- [ ] Document complex code
- [ ] Test edge cases

### After Completion
- [ ] Review code quality
- [ ] Add E2E tests
- [ ] Optimize performance
- [ ] Write documentation
- [ ] Deploy to production
- [ ] Get code review

---

## 💡 Getting Help

For each project:
- **Stuck on concept?** → Use `/explore` to find relevant agent
- **Need specific skills?** → Review agent's SKILL.md
- **Want to learn more?** → Use `/learn` for detailed guidance
- **Test your knowledge?** → Use `/assess` after project

---

## 🏆 Project Completion Checklist

After each project, verify:

- [ ] All features implemented
- [ ] Responsive design
- [ ] Error handling
- [ ] Code follows best practices
- [ ] Unit tests (min 70% coverage)
- [ ] E2E tests for critical flows
- [ ] Accessible (WCAG 2.1)
- [ ] Performance optimized
- [ ] Documentation complete
- [ ] Code review passed

---

## 📊 Project Statistics

| Level | Projects | Duration | Skills |
|-------|----------|----------|--------|
| Beginner | 5 | 5-7 weeks | 15-20 |
| Intermediate | 5 | 10-15 weeks | 20-30 |
| Advanced | 5 | 15-25 weeks | 30-40+ |

**Total**: 15 projects, 30-47 weeks, mastery of 60+ Angular/Web skills

---

## 🎁 Bonus Projects

### Full-Stack Development
- Build backend API (Node.js/Express)
- Connect Angular frontend
- Deploy together
- Full CRUD with backend

### Open Source Contributions
- Contribute to Angular libraries
- Fix bugs in projects
- Create reusable components
- Publish to npm

### Portfolio Showcase
- Deploy projects online
- Create GitHub portfolios
- Document your work
- Build personal brand

---

## Next Steps

1. **Choose your level**: Beginner, Intermediate, or Advanced
2. **Pick your first project**: Start with recommended sequence
3. **Study required topics**: Review agent skills needed
4. **Build the project**: Implement all requirements
5. **Get feedback**: Share on GitHub, get reviews
6. **Move to next project**: Progress through the path

---

**Ready to Build?** Choose a project and start coding! 🛠️

Use `/learn` for structured learning paths and `/explore` to understand concepts better.
