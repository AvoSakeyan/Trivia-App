import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  private _disabled = false;

  public set disabled(value: boolean) {
    this._disabled = value;
  }

  public get disabled(): boolean {
    return this._disabled;
  }

  constructor(private snackBar: MatSnackBar) {}

  public success(message: string): void {
    if (this._disabled) return;

    this.snackBar.open(message, 'dismiss', {
      panelClass: ['bg-success'],
    });
  }

  public fail(message: string): void {
    if (this._disabled) return;

    this.snackBar.open(message, 'dismiss', {
      panelClass: ['bg-danger'],
    });
  }

  public warn(message: string): void {
    if (this._disabled) return;

    this.snackBar.open(message, 'dismiss', {
      panelClass: ['bg-warning'],
    });
  }

  public info(message: string): void {
    if (this._disabled) return;

    this.snackBar.open(message, 'dismiss', {
      panelClass: ['bg-info'],
    });
  }
}
