import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RaFeedbackRoutingModule } from './ra-feedback-routing.module';
import { RaFeedbackComponent } from './ra-feedback/ra-feedback.component';
import { RaFeedbackListComponent } from './ra-feedback-list/ra-feedback-list.component';
import { ShareModule } from "../share/share.module";
import { CKEditorModule } from 'ckeditor4-angular';
import { EditRaFeedbackComponent } from './edit-ra-feedback/edit-ra-feedback.component';


@NgModule({
    declarations: [
        RaFeedbackComponent,
        RaFeedbackListComponent,
        EditRaFeedbackComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RaFeedbackRoutingModule,
        ShareModule,
        CKEditorModule
    ]
})
export class RaFeedbackModule { }
