import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CdTrackerService {
  components: Record<string, number> = {};

  tick(componentName: string) {
    if (componentName in this.components) {
      this.components[componentName]++;
    } else {
      this.components[componentName] = 1;
    }
  }
}
