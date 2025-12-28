// Angular Signals Template
import { Component, signal, computed, effect, inject } from '@angular/core';

// Signal-based Store Pattern
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class {Feature}Store {
  // Private state signal
  private state = signal<{
    items: {Entity}[];
    loading: boolean;
    error: string | null;
  }>({
    items: [],
    loading: false,
    error: null
  });

  // Public computed selectors
  readonly items = computed(() => this.state().items);
  readonly loading = computed(() => this.state().loading);
  readonly error = computed(() => this.state().error);
  readonly count = computed(() => this.items().length);

  // Actions
  async loadItems() {
    this.state.update(s => ({ ...s, loading: true }));
    try {
      const items = await this.api.getItems();
      this.state.update(s => ({ ...s, items, loading: false }));
    } catch (error) {
      this.state.update(s => ({ ...s, error: error.message, loading: false }));
    }
  }

  addItem(item: {Entity}) {
    this.state.update(s => ({ ...s, items: [...s.items, item] }));
  }

  removeItem(id: number) {
    this.state.update(s => ({
      ...s,
      items: s.items.filter(i => i.id !== id)
    }));
  }
}

// Signal-based Component
@Component({
  selector: 'app-{feature}',
  standalone: true,
  template: \`
    @if (store.loading()) {
      <app-spinner />
    } @else {
      @for (item of store.items(); track item.id) {
        <div>{{ item.name }}</div>
      } @empty {
        <p>No items</p>
      }
    }
  \`
})
export class {Feature}Component {
  store = inject({Feature}Store);
}
