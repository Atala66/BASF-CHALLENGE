import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { ToolbarModule } from 'src/app/components/toolbar/toolbar.module';
import { AutocompleteModule } from 'src/app/components/autocomplete/autocomplete.module';

@NgModule({
  declarations: [ShellComponent],
  imports: [CommonModule, ToolbarModule, 
	AutocompleteModule],
  exports: [ShellComponent],
})
export class ShellModule {}
