import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="min-height: 100vh; background-color: #f3f4f6;">
      <nav style="background-color: #7c3aed; color: white; padding: 1rem;">
        <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center;">
          <h1 style="font-size: 1.25rem; font-weight: bold;">Remote App (Standalone)</h1>
        </div>
      </nav>
      <main style="max-width: 1200px; margin: 0 auto; padding: 1rem;">
        <app-user-table></app-user-table>
      </main>
    </div>
  `
})
export class AppComponent { }