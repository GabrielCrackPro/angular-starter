import {
  HttpErrorResponse,
  type HttpInterceptorFn,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { ModalComponent } from '@components/shared';
import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { catchError, throwError } from 'rxjs';

export const errorResponseInterceptor: HttpInterceptorFn = (req, next) => {
  const _dialog = inject(DialogService);

  return next(req).pipe(
    catchError((error) => {
      if (error instanceof HttpErrorResponse) {
        const dialogConfig: DynamicDialogConfig = {
          header: 'Error',
          modal: true,
          data: {
            description: error.message,
            btnConfirm: 'Close',
          },
        };

        _dialog.open<ModalComponent>(ModalComponent, dialogConfig);
      }
      return throwError(() => error);
    })
  );
};
