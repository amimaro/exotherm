import { NgModule } from '@angular/core';
import { ModalItemComponent } from './modal-item/modal-item';
import { PopoverComponent } from './popover/popover';
@NgModule({
	declarations: [
		ModalItemComponent,
		PopoverComponent
	],
	imports: [],
	exports: [
		ModalItemComponent,
		PopoverComponent
	]
})
export class ComponentsModule {}
