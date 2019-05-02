import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { HttpHelper, Endpoints } from '../../helpers/http.helper';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(
    private http: HttpClient,
    private httpHelper: HttpHelper
  ) { }

  public getExpenses(): Observable<any> {
    const url = this.httpHelper.getUrl(Endpoints.EXPENSES_LIST);
    return this.http.get(url);
  }

  public addExpense(data): Observable<any> {
    const url = this.httpHelper.getUrl(Endpoints.EXPENSES_SAVE);
    return this.http.post(url, data).pipe(
      concatMap(() => this.getExpenses())
    );
  }

  public deleteExpense(index): Observable<any> {
    const url = this.httpHelper.getUrl(Endpoints.EXPENSES_DELETE, {index});
    return this.http.delete(url);
  }
}
