import { ChangeDetectionStrategy, Component, Self } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent implements ControlValueAccessor {
  count = 1;
  onChange!: (value: number) => void;
  onTouched!: () => void;
  isDisabled = false;

  constructor(@Self() private ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  increaseCount() {
    this.count = this.count + 1;
    this.onChange(this.count);
  }

  decreaseCount() {
    this.count = this.count - 1;
    this.onChange(this.count);
  }

  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  writeValue(value: number): void {
    this.count = value;
  }
}
