import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ListService {
    constructor(private http: HttpClient) {}

    loadData() {
        return this.http.get('https://fakestoreapi.com/products');
    }
}
