import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFormComponent } from './create-form/create-form.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CreateFormComponent],
  exports: [CreateFormComponent],
})
export class CmsPostModule {}
