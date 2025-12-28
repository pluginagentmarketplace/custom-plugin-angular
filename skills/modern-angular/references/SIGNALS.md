# Angular Signals Reference

## Creating Signals

```typescript
// Writable signal
const count = signal(0);

// Read value
count();  // 0

// Set value
count.set(5);

// Update value
count.update(n => n + 1);
```

## Computed Signals

```typescript
const firstName = signal('John');
const lastName = signal('Doe');

// Auto-updates when dependencies change
const fullName = computed(() => `${firstName()} ${lastName()}`);
```

## Effects

```typescript
effect(() => {
  console.log(`Count changed: ${count()}`);
  // Runs whenever count changes
});
```

## Signals vs RxJS

| Feature | Signals | RxJS |
|---------|---------|------|
| Sync state | Best choice | Overkill |
| Async streams | Use RxJS | Best choice |
| HTTP | toSignal() | Native |
| Cleanup | Automatic | Manual |

## Converting RxJS to Signals

```typescript
import { toSignal } from '@angular/core/rxjs-interop';

// Observable to Signal
const users = toSignal(this.userService.getUsers(), { initialValue: [] });

// Signal to Observable
import { toObservable } from '@angular/core/rxjs-interop';
const count$ = toObservable(count);
```
