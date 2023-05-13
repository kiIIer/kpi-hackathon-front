import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import * as fromTask from './entities/task/task.reducer';
import * as fromSubject from './entities/subject/subject.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    isDevMode() ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),
    StoreModule.forFeature(fromTask.tasksFeatureKey, fromTask.reducer),
    StoreModule.forFeature(fromSubject.subjectsFeatureKey, fromSubject.reducer)
  ]
})
export class AppStoreModule { }
