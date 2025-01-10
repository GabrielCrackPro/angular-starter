import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Button } from 'primeng/button';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [Button],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  private _dialogConfig: DynamicDialogConfig<any> = inject(DynamicDialogConfig);
  private _dialogRef = inject(DynamicDialogRef);

  public data = this._dialogConfig.data;

  public close(): void {
    this._dialogRef.close();
  }
}
