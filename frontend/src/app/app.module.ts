import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule }   from '@angular/forms';
import {ApiService} from './api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {JitCompiler} from '@angular/compiler';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import {COMPILER_OPTIONS} from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    RouterModule.forRoot([
    {
      path: "register", component: RegisterComponent
    }
  ])
  ],
  providers: [ApiService, { provide: JitCompiler, useClass: JitCompilerFactory,deps: [COMPILER_OPTIONS] }],
  bootstrap: [AppComponent]
})
export class AppModule { }
