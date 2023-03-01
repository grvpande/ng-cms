import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFormComponent } from './create-form/create-form.component';
import { MatInputModule } from '@angular/material/input';
import { AddNewPostComponent } from './add-new-post/add-new-post.component';

@NgModule({
  imports: [CommonModule, MatInputModule],
  declarations: [CreateFormComponent, AddNewPostComponent],
  exports: [CreateFormComponent],
})
export class CmsPostModule {}
