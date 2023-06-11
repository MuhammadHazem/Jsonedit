import {
  Component,
  ChangeDetectionStrategy,
  HostListener,
  Output,
  EventEmitter,
  ElementRef,
  OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalContainerComponent{
  @Output() cancelNotfiy = new EventEmitter<boolean>();
  constructor(private _ref: ElementRef) {
    // layoutService._stickyStyle.next(true);
  }
  @HostListener('click', ['$event'])
  onHostClick(event: MouseEvent) {
    if (this._ref.nativeElement === event.target) {
      event.stopPropagation();
      this.cancelNotfiy.emit(true);
    }
  }
}
