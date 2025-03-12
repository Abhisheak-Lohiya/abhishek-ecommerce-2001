// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HeaderComponent } from './public/components/header/header.component';
// import { SectionComponent } from './public/components/section/section.component';
// import { FooterComponent } from './public/components/footer/footer.component';
// import { LoginComponent } from './public/components/login/login.component';
// import { RegisterComponent } from './public/components/register/register.component';

// @NgModule({
//   declarations: [
  
//     HeaderComponent,
//     SectionComponent,
//     FooterComponent,
//     LoginComponent,
//     RegisterComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     AppComponent,
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './public/components/header/header.component';
import { SectionComponent } from './public/components/section/section.component';
import { FooterComponent } from './public/components/footer/footer.component';
import { LoginComponent } from './public/components/login/login.component';
import { RegisterComponent } from './public/components/register/register.component';
import { HomeComponent } from './public/components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent, // Added this as it was missing
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, // Ensure RouterModule is imported here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }