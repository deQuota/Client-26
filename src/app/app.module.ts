import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeadComponent} from './head/head.component';
import {AssociatedUsersComponent} from './associated-users/associated-users.component';
import {RegistrationDocsComponent} from './associated-users/registration-docs/registration-docs.component';
import {LegalDocsComponent} from './associated-users/legal-docs/legal-docs.component';
import {DocTemplatesComponent} from './doc-templates/doc-templates.component';
import {PdfComponent} from './pdf/pdf.component';
import {BodyComponent} from './doc-templates/body/body.component';
import {FormsModule} from '@angular/forms';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';



@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    AssociatedUsersComponent,
    RegistrationDocsComponent,
    LegalDocsComponent,
    DocTemplatesComponent,
    PdfComponent,
    BodyComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
