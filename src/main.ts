import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { InjectionToken } from '@angular/core';
import { TasksService } from './app/tasks/tasks.service';

export const TasksServiceToken = new InjectionToken<TasksService>(
    'task-service-token'
);

bootstrapApplication(AppComponent, {
    providers: [{provide: TasksServiceToken, useClass: TasksService}],
}).catch((err) => console.error(err));
// import { TasksService } from './app/tasks/tasks.service';

// bootstrapApplication(AppComponent, {
//     providers: [TasksService]
// }).catch((err) => console.error(err));

// bootstrapApplication(AppComponent).catch((err) => console.error(err));
