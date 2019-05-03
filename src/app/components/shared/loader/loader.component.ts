import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../../../services/loader/loader.service';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  public color = 'primary';
  public mode = 'indeterminate';
  public value = 50;
  public isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(
    private loaderService: LoaderService
  ) { }

}
