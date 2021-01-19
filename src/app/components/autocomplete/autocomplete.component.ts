import {
  AfterViewInit,
  Component,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { Observable, Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AutocompleteService } from './autocomplete.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.less'],
})
export class AutocompleteComponent implements OnInit, AfterViewInit {
  constructor(
    // tslint:disable-next-line:variable-name
    private _autocompleteSrv: AutocompleteService
  ) {}
  //   private autocomp = new Subject();
  //   public $autocomo = this.autocomp.asObservable();
  autocompleteControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  public totalDocuments: number;

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  public onKeyDownEnter(event: KeyboardEvent): void {
    if (
      this.autocompleteControl.value &&
      this.autocompleteControl.value.length >= 3
    ) {
      this.filteredOptions = this.autocompleteControl.valueChanges.pipe(
        startWith(''),
        map((value) => this._filter(value))
      );
      // call Service
      this._autocompleteSrv
        .getDataForAutocomplete(this.autocompleteControl.value)
        .subscribe((response) => {
          if (response) {
            this.options = response;
          }
        });
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(
      (option) => option.toLowerCase().indexOf(filterValue) === 0
    );
  }

  public getTotalDocuments(): void {
    if (this.options.length !== 0) {
      console.log('total docmuentos::', this.options.length);
      this.totalDocuments = this.options.length;
    }
  }
}
