import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-template-binding',
  imports: [],
  templateUrl: './signal-template-binding.html',
  styleUrl: './signal-template-binding.css',
})
export class SignalTemplateBinding {
  role = signal<"user" | "admin">('user');

  verNavOptions = signal<string[]>(['hrms', 'inventory', 'sales', 'marketing']);
  verNavOptions2 = signal<string[]>(['admin', 'finance', 'operations', 'support']);

  handleRoleChange(newRole: "user" | "admin"): void {
    this.role.set(newRole);
  }

  handleAddOptionInAdmin(): void {
    this.verNavOptions2.update((val) => {
      if (val.includes('i am admin')) {
        return val;
      } else {
        return [...val, 'i am admin'];
      }
    });
  }

  handleAddOptionInUser(): void {
    this.verNavOptions.update((val) => {
      if (val.includes('i am user')) {
        return val;
      } else {
        return [...val, 'i am user'];
      }
    });
  }
}
