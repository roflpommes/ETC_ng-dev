import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { MarkdownEditorComponent } from './comments/markdown-editor/markdown-editor.component';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { AsyncComponent } from './samples/async/async.component';
import { CreatingObservableComponent } from './samples/creating-observables/creating-observable.component';
import { EventBusComponent } from './samples/evt-bus/evt-bus.component';
import { FlexLayoutApiComponent } from './samples/flex-layout-api/flex-layout-api.component';
import { DebouncedSearchComponent } from './samples/operators/debounced-search/debounced-search.component';
import { OperatorsComponent } from './samples/operators/operators.component';
import { StatefulComponent } from './samples/stateful/stateful.component';
import { SubjectsComponent } from './samples/subjects/subjects.component';
import { UnsubscribingComponent } from './samples/unsubscribing/unsubscribing.component';
import { VouchersService } from './samples/vouchers/voucher.service';
import { StatefulVouchersComponent } from './samples/vouchers/stateful-vouchers/stateful-vouchers.component';
import { DemoService } from './demo-base/demo.service';
import { LoadingInterceptor } from '../shared/loading/loading-interceptor';
import { LoadingService } from '../shared/loading/loading.service';
import { LoadingHostComponent } from './samples/loading-host/loading-host.component';

const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,
    children: [
      { path: 'subjects', component: SubjectsComponent },
      { path: 'creating', component: CreatingObservableComponent },
      { path: 'operators', component: OperatorsComponent },
      { path: 'flexlayoutapi', component: FlexLayoutApiComponent },
      { path: 'unsubscribe', component: UnsubscribingComponent },
      { path: 'streams', component: AsyncComponent },
      { path: 'stateful', component: StatefulComponent },
      { path: 'evtbus', component: EventBusComponent },
      { path: 'search', component: DebouncedSearchComponent },
      { path: 'loading', component: LoadingHostComponent },
    ],
  },
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    CreatingObservableComponent,
    OperatorsComponent,
    FlexLayoutApiComponent,
    UnsubscribingComponent,
    DebouncedSearchComponent,
    SubjectsComponent,
    StatefulComponent,
    EventBusComponent,
    MarkdownEditorComponent,
    AsyncComponent,
    StatefulVouchersComponent,
    LoadingHostComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    DemoService,
    LoadingService,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
})
export class DemosModule {}
