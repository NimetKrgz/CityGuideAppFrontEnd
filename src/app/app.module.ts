import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import { CityComponent } from './city/city.component';
import { CityDetailComponent } from './city/city-detail/city-detail.component';
import { CityAddComponent } from './city/city-add/city-add.component';
import { AlertifyService } from './services/alertify.service';
import { RegisterComponent } from './register/register.component';
//import { NgxEditorModule } from 'ngx-editor';
import { PhotoComponent } from './photo/photo.component';
import { FileUploadModule} from 'ng2-file-upload';

@NgModule({
  declarations: [					
    AppComponent,
      ValueComponent,
      NavComponent,
      CityComponent,
      CityDetailComponent,
      CityAddComponent,
      RegisterComponent,
      PhotoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgxGalleryModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    //NgxEditorModule
    FileUploadModule

  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
