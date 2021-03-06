import { Component, OnDestroy, Input, Output, EventEmitter, ElementRef, HostBinding } from '@angular/core';
import { ModalInstance, ModalResult } from './modal-instance';

@Component({
  selector: 'rb-modal',
  host: {
    'class': 'modal',
    'role': 'dialog',
    'tabindex': '-1'
  },
  template: `
        <div class="modal-dialog" [ngClass]="getCssClasses()">
            <div class="modal-content">
                <ng-content></ng-content>
            </div>
        </div>
    `
})
export class ModalComponent implements OnDestroy {

  private overrideSize: string = null;

  instance: ModalInstance;
  visible: Boolean = false;

  @Input() animation: Boolean = true;
  @Input() backdrop: String | Boolean = true;
  @Input() keyboard: Boolean = true;
  @Input() size: String;
  @Input() cssClass: String = '';

  @Output() onClose: EventEmitter<Boolean> = new EventEmitter(false);
  @Output() onDismiss: EventEmitter<Boolean> = new EventEmitter(false);
  @Output() onOpen: EventEmitter<Boolean> = new EventEmitter(false);

  @HostBinding('class.fade') get fadeClass(): Boolean {
    return this.animation;
  }

  @HostBinding('attr.data-keyboard') get dataKeyboardAttr(): Boolean {
    return this.keyboard;
  }

  @HostBinding('attr.data-backdrop') get dataBackdropAttr(): String | Boolean {
    return this.backdrop;
  }

  constructor(private element: ElementRef) {
    this.instance = new ModalInstance(this.element);

    this.instance.hidden.subscribe((result) => {
      this.visible = this.instance.visible;
      if (result === ModalResult.Dismiss) {
        this.onDismiss.emit(undefined);
      }
    });

    this.instance.shown.subscribe(() => {
      this.onOpen.emit(undefined);
    });
  }

  ngOnDestroy() {
    return this.instance && this.instance.destroy();
  }

  routerCanDeactivate(): any {
    return this.ngOnDestroy();
  }

  open(size?: string): Promise<void> {
    if (ModalSize.validSize(size)) this.overrideSize = size;
    return this.instance.open().then(() => {
      this.visible = this.instance.visible;
    });
  }

  close(value?: any): Promise<void> {
    return this.instance.close().then(() => {
      this.onClose.emit(value);
    });
  }

  dismiss(): Promise<void> {
    return this.instance.dismiss();
  }

  getCssClasses(): String {
    const classes: String[] = [];

    if (this.isSmall()) {
      classes.push('modal-sm');
    }

    if (this.isLarge()) {
      classes.push('modal-lg');
    }

    if (this.cssClass !== '') {
      classes.push(this.cssClass);
    }

    return classes.join(' ');
  }

  private isSmall() {
    return this.overrideSize !== ModalSize.Large
      && this.size === ModalSize.Small
      || this.overrideSize === ModalSize.Small;
  }

  private isLarge() {
    return this.overrideSize !== ModalSize.Small
      && this.size === ModalSize.Large
      || this.overrideSize === ModalSize.Large;
  }
}

export class ModalSize {
  static Small = 'sm';
  static Large = 'lg';

  static validSize(size: string) {
    return size && (size === ModalSize.Small || size === ModalSize.Large);
  }
}
