import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MySpecialDynamicContentComponent } from './my-special-dynamic-content.component';

@NgModule({
  declarations: [MySpecialDynamicContentComponent],
  imports: [CommonModule],
  entryComponents: [MySpecialDynamicContentComponent]
})
export class MySpecialDynamicContentModule {}
