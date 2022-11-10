import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _empId = '';
  constructor() {}

  public set empId(v: string) {
    this._empId = v;
  }

  public get empId(): string {
    return this._empId;
  }
}
