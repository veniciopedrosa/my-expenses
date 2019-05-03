import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpensesListComponent } from './components/expenses-list/expenses-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderService } from './services/loader/loader.service';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { HttpHelper } from './helpers/http.helper';
import { CurrencyPipe } from '@angular/common';
import {NgxMaskModule} from 'ngx-mask';
import { SharedComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpensesListComponent,
    AddExpenseComponent,
    LoaderComponent,
    SharedComponent
  ],
  imports: [
    NgxMaskModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    LoaderService,
    HttpHelper,
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: LoaderInterceptor, 
      multi: true
    },
    CurrencyPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
