import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  constructor() {}

  parentUrl = '';
  getAllEmployee = `${this.parentUrl}/Employee`;
  addAnEmployee = `${this.parentUrl}/Employee`;
  getAllDesignation = `${this.parentUrl}/Designation`;
  addAnDesignation = `${this.parentUrl}/Designation`;
}
