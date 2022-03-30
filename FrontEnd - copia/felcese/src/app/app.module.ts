import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadpageComponent } from './uploadpage/uploadpage.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { UcfComponent } from './ucf/ucf.component';

import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';


import { PdfViewerModule } from 'ng2-pdf-viewer';

import { DatePipe } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeaderDashboardComponent } from './header-dashboard/header-dashboard.component';
import { FooterDashboardComponent } from './footer-dashboard/footer-dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PaymentComponent } from './payment/payment.component';
import { VideoTutorialComponent } from './video-tutorial/video-tutorial.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PoliticaPrivacidadComponent } from './politica-privacidad/politica-privacidad.component';
import { PerfilComponent } from './ui/views/perfil/perfil.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
@NgModule({
  declarations: [
    AppComponent,
    UploadpageComponent,
    LoginComponent,
    UcfComponent,
    SignupComponent,
    HeaderComponent,
    HeaderDashboardComponent,
    FooterDashboardComponent,
    FooterComponent,
    PaymentComponent,
    VideoTutorialComponent,
    PoliticaPrivacidadComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxExtendedPdfViewerModule,
    PdfViewerModule,
    FlexLayoutModule,
    SweetAlert2Module.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    NgbModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
