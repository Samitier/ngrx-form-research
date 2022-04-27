import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QueryBuilderComponent } from './query-builder/query-builder.component';
import { VisualAdapterComponent } from './visual-adapter/visual-adapter.component';
import { SettingsComponent } from './settings/settings.component';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './store/entity-metadata';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    QueryBuilderComponent,
    VisualAdapterComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
