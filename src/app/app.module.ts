import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';  // Import FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './_auth/auth.module';
import { BatchModule } from './admin/batch/batch.module';
import { TechnologyModule } from './admin/technology/technology.module';
import { JseUserModule } from './admin/jse-user/jse-user.module';
import { FeedbackModule } from './admin/feedback/feedback.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AdminModule } from './admin/admin.module';
import { CKEditorModule } from 'ckeditor4-angular';
import { QuillModule } from 'ngx-quill';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AuthModule,
    AdminModule,
    CKEditorModule,
    NgMultiSelectDropDownModule.forRoot(),
    QuillModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
