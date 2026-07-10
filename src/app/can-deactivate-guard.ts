import { CanDeactivateFn } from '@angular/router';

interface ComponentCanDeactivateFn {
  canDeactivate(): boolean;
}

export const canDeactivateGuard: CanDeactivateFn<ComponentCanDeactivateFn> = (
  component,
  currentRoute,
  currentState,
  nextState,
) => {
  return component.canDeactivate();
};
