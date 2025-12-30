# Master Troubleshooting Guide

**Version**: 3.0.0 | **SASMP**: 1.3.0 | **EQHM**: Enabled

## Quick Diagnosis

```
PROBLEM ENCOUNTERED
       │
       ▼
┌──────────────────────┐
│ What type of issue?  │
└──────────┬───────────┘
           │
     ┌─────┴─────┬─────────────┬──────────────┬───────────────┐
     ▼           ▼             ▼              ▼               ▼
 TypeScript   Angular      RxJS/Async    Build/Deploy    State Mgmt
   Errors     Runtime       Issues         Errors          Issues
     │           │             │              │               │
     ▼           ▼             ▼              ▼               ▼
  Agent 01   Agent 02      Agent 03      Agent 07       Agent 06
```

---

## Common Failure Modes by Category

### 1. TypeScript Errors (Agent 01)

#### TS2322: Type Mismatch
```typescript
// ERROR: Type 'string' is not assignable to type 'number'
const value: number = "123";

// FIX 1: Correct the type
const value: number = 123;

// FIX 2: Parse the value
const value: number = parseInt("123", 10);

// FIX 3: Update the type definition
const value: string | number = "123";
```

**Debug Checklist**:
- [ ] Check variable initialization
- [ ] Verify function return types
- [ ] Check interface definitions
- [ ] Look for implicit type coercion

#### TS7006: Implicit Any
```typescript
// ERROR: Parameter 'x' implicitly has an 'any' type
function process(x) { return x; }

// FIX: Add type annotation
function process(x: string): string { return x; }
```

#### TS2339: Property Does Not Exist
```typescript
// ERROR: Property 'name' does not exist on type '{}'
const user = {};
console.log(user.name);

// FIX: Define interface
interface User { name: string; }
const user: User = { name: 'John' };
```

---

### 2. Angular Runtime Errors (Agent 02)

#### NullInjectorError: No Provider
```
NullInjectorError: No provider for UserService!
```

**Solutions** (in order of preference):
```typescript
// Solution 1: providedIn root (recommended)
@Injectable({ providedIn: 'root' })
export class UserService {}

// Solution 2: Module providers
@NgModule({
  providers: [UserService]
})

// Solution 3: Component-level provider
@Component({
  providers: [UserService]
})
```

#### ExpressionChangedAfterItHasBeenChecked
```
ExpressionChangedAfterItHasBeenChecked: Expression has changed...
```

**Root Cause**: Value changed after Angular's change detection cycle

**Solutions**:
```typescript
// Solution 1: Use setTimeout
ngAfterViewInit() {
  setTimeout(() => {
    this.value = newValue;
  });
}

// Solution 2: Use ChangeDetectorRef
constructor(private cdr: ChangeDetectorRef) {}
ngAfterViewInit() {
  this.value = newValue;
  this.cdr.detectChanges();
}

// Solution 3: Use async pipe (preferred)
// Component
value$ = this.service.getValue();
// Template
{{ value$ | async }}
```

#### Component Not Found
```
'app-user' is not a known element
```

**Debug Checklist**:
- [ ] Component is declared in a module OR is standalone
- [ ] Module is imported where component is used
- [ ] Selector matches exactly (case-sensitive)
- [ ] Check for typos in selector

```typescript
// For standalone
@Component({
  standalone: true,
  imports: [UserComponent]  // Add component here
})

// For modules
@NgModule({
  declarations: [UserComponent],
  exports: [UserComponent]  // Export if used elsewhere
})
```

---

### 3. RxJS/Async Issues (Agent 03)

#### Memory Leak - Subscription Not Cleaned
**Symptoms**: Slow performance, increasing memory usage

**Detection**:
```typescript
// Add logging to see if subscriptions live too long
ngOnInit() {
  console.log('Subscribed at:', new Date());
  this.subscription = this.data$.subscribe();
}
ngOnDestroy() {
  console.log('Should unsubscribe at:', new Date());
}
```

**Solutions**:
```typescript
// Solution 1: takeUntil pattern
private destroy$ = new Subject<void>();

ngOnInit() {
  this.data$.pipe(
    takeUntil(this.destroy$)
  ).subscribe();
}

ngOnDestroy() {
  this.destroy$.next();
  this.destroy$.complete();
}

// Solution 2: async pipe (best)
// Component
data$ = this.service.getData();
// Template: {{ data$ | async }}

// Solution 3: takeUntilDestroyed (Angular 16+)
data$ = this.service.getData().pipe(
  takeUntilDestroyed()
);
```

#### Observable Not Emitting
**Debug Steps**:
```typescript
this.data$.pipe(
  tap(v => console.log('Step 1:', v)),  // Debug point 1
  map(v => transform(v)),
  tap(v => console.log('Step 2:', v)),  // Debug point 2
  filter(v => condition(v)),
  tap(v => console.log('Step 3:', v))   // Debug point 3
).subscribe(
  v => console.log('Received:', v),
  err => console.error('Error:', err),
  () => console.log('Completed')
);
```

#### switchMap Canceling Requests
```typescript
// Problem: Rapid events cancel previous requests
click$.pipe(
  switchMap(() => this.http.get('/api/save'))
)

// Solutions based on use case:

// Use exhaustMap: Ignore new events while processing
click$.pipe(
  exhaustMap(() => this.http.get('/api/save'))
)

// Use concatMap: Queue all requests
click$.pipe(
  concatMap(() => this.http.get('/api/save'))
)

// Use mergeMap: Run all in parallel
click$.pipe(
  mergeMap(() => this.http.get('/api/save'))
)
```

---

### 4. Forms Issues (Agent 04)

#### Form Control Not Found
```
Cannot find control with name: 'email'
```

**Debug Checklist**:
```typescript
// Verify form structure
console.log(this.form.value);
console.log(this.form.controls);

// Ensure control exists
this.form = this.fb.group({
  email: ['', Validators.required]  // Name must match formControlName
});
```

#### Async Validator Not Working
```typescript
// Problem: Validator called on every keystroke
emailValidator: AsyncValidatorFn = (control) => {
  return this.http.get(`/api/check?email=${control.value}`);
};

// Solution: Debounce and switchMap
emailValidator: AsyncValidatorFn = (control) => {
  return timer(300).pipe(
    switchMap(() => this.http.get(`/api/check?email=${control.value}`)),
    map(exists => exists ? { emailTaken: true } : null),
    catchError(() => of(null))
  );
};
```

---

### 5. Routing Issues (Agent 05)

#### Route Not Matching
```typescript
// Debug: Log all router events
this.router.events.pipe(
  filter(e => e instanceof NavigationStart ||
              e instanceof NavigationError ||
              e instanceof NavigationCancel)
).subscribe(console.log);
```

**Common Fixes**:
```typescript
// Order matters! More specific routes first
const routes: Routes = [
  { path: 'users/:id', component: UserDetailComponent },  // Specific
  { path: 'users', component: UserListComponent },        // General
  { path: '', redirectTo: 'users', pathMatch: 'full' },   // Default
  { path: '**', component: NotFoundComponent }            // Wildcard last
];
```

#### Lazy Loading Not Working
```typescript
// Correct syntax for lazy loading
{
  path: 'admin',
  loadChildren: () => import('./admin/admin.module')
    .then(m => m.AdminModule)
}

// For standalone components
{
  path: 'dashboard',
  loadComponent: () => import('./dashboard/dashboard.component')
    .then(c => c.DashboardComponent)
}
```

#### Guard Redirect Loop
```typescript
// Problem: Guard redirects to route that also requires guard
canActivate() {
  if (!this.auth.isLoggedIn) {
    return this.router.createUrlTree(['/login']);  // Login also guarded!
  }
  return true;
}

// Solution: Exclude login route from guard
{
  path: 'login',
  component: LoginComponent  // No guard here
},
{
  path: 'dashboard',
  component: DashboardComponent,
  canActivate: [AuthGuard]
}
```

---

### 6. State Management Issues (Agent 06)

#### Action Not Dispatched
```typescript
// Debug: Monitor all actions
constructor(private actions$: Actions) {
  actions$.subscribe(action => console.log('Action:', action));
}

// Ensure dispatch is called
this.store.dispatch(loadUsers());  // Not just loadUsers
```

#### Effect Not Triggering
```typescript
// Verify effect is registered
@NgModule({
  imports: [
    EffectsModule.forRoot([UserEffects])  // Must be registered
  ]
})

// Verify ofType matches
loadUsers$ = createEffect(() =>
  this.actions$.pipe(
    ofType(loadUsers),  // Must match action creator exactly
    tap(action => console.log('Effect triggered:', action)),
    switchMap(() => ...)
  )
);
```

#### State Mutation Error
```typescript
// WRONG: Direct mutation
on(addUser, (state, { user }) => {
  state.users.push(user);  // Mutates original!
  return state;
})

// CORRECT: Immutable update
on(addUser, (state, { user }) => ({
  ...state,
  users: [...state.users, user]
}))
```

---

### 7. Build/Deploy Issues (Agent 07)

#### Bundle Too Large
```bash
# Analyze bundle
ng build --stats-json
npx webpack-bundle-analyzer dist/stats.json

# Common fixes:
# 1. Implement lazy loading
# 2. Remove unused imports
# 3. Use smaller alternatives (e.g., date-fns instead of moment)
```

#### Build Failing
```bash
# Clear cache and rebuild
rm -rf node_modules .angular
npm ci
ng build --configuration=production

# Check for circular dependencies
npx madge --circular src/
```

#### Deployment Issues
```bash
# Vercel
vercel --prod

# Firebase
firebase deploy --only hosting

# Check environment
ng build --configuration=production
# Verify dist/ folder structure
```

---

### 8. Modern Angular Issues (Agent 08)

#### Signal Not Updating View
```typescript
// WRONG: Not calling signal in template
<div>{{ user }}</div>

// CORRECT: Call signal
<div>{{ user() }}</div>

// WRONG: Not using set/update
this.user = newValue;

// CORRECT: Use signal methods
this.user.set(newValue);
this.user.update(u => ({ ...u, name: 'New' }));
```

#### SSR Hydration Mismatch
```typescript
// Check platform before DOM access
import { isPlatformBrowser, PLATFORM_ID } from '@angular/common';

constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

ngOnInit() {
  if (isPlatformBrowser(this.platformId)) {
    // Browser-only code
    window.addEventListener('scroll', this.onScroll);
  }
}
```

#### Standalone Component Import Missing
```typescript
@Component({
  standalone: true,
  imports: [
    CommonModule,        // For *ngIf, *ngFor (or use @if, @for)
    RouterModule,        // For routerLink
    ReactiveFormsModule, // For formGroup
    HttpClientModule,    // For HttpClient (or use provideHttpClient)
  ]
})
```

---

## Error Code Reference

| Code | Category | Description | Agent |
|------|----------|-------------|-------|
| TS2322 | TypeScript | Type mismatch | 01 |
| TS7006 | TypeScript | Implicit any | 01 |
| TS2339 | TypeScript | Property not found | 01 |
| NG0100 | Angular | Expression changed | 02 |
| NG0200 | Angular | Circular dependency | 02 |
| NG0201 | Angular | No provider | 02 |
| NG0300 | Angular | Selector not found | 02 |
| RXJS001 | RxJS | Unsubscribed error | 03 |
| RXJS002 | RxJS | Memory leak | 03 |
| NG0301 | Forms | Control not found | 04 |
| ROUTE404 | Routing | Route not matched | 05 |
| NGRX001 | State | Action not dispatched | 06 |
| BUILD001 | Build | Bundle too large | 07 |
| SSR001 | SSR | Hydration mismatch | 08 |

---

## Log Interpretation Guide

### Angular DevTools
```
[Angular DevTools] Component tree updated
[Angular DevTools] Change detection triggered for AppComponent
[Angular DevTools] Signal updated: userSignal
```

### NgRx DevTools
```
@ngrx/store/init
[Users] Load Users
[Users API] Load Users Success { users: [...] }
[Users API] Load Users Failure { error: ... }
```

### Console Patterns
```javascript
// Good: Detailed error with stack trace
Error: Cannot read property 'name' of undefined
    at UserComponent.ngOnInit (user.component.ts:25)

// Debug: Add context
console.log('[UserComponent] Loading user:', userId);
console.error('[UserService] API Error:', error);
console.warn('[Forms] Validation failed:', errors);
```

---

## Recovery Procedures

### 1. Full Reset
```bash
# Nuclear option - full reset
rm -rf node_modules package-lock.json .angular
npm cache clean --force
npm install
ng serve
```

### 2. Incremental Debug
```bash
# Step 1: Verify TypeScript
npx tsc --noEmit

# Step 2: Verify Angular
ng build --configuration=development

# Step 3: Run tests
ng test --watch=false

# Step 4: Check linting
ng lint
```

### 3. Git Recovery
```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo all changes
git checkout -- .

# Stash changes
git stash
git stash pop
```

---

## Getting Help

1. **Check this guide** for common solutions
2. **Use agent-specific troubleshooting** in each agent's documentation
3. **Run diagnostics**: `ng doctor` (Angular 17+)
4. **Check Angular docs**: https://angular.dev
5. **Stack Overflow**: Tag `angular` + specific technology

---

**Last Updated**: 2025-01-01
**Maintainer**: Production-Grade Update v3.0.0
