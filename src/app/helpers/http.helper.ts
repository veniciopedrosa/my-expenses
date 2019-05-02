import { Injectable } from '@angular/core';

export enum Endpoints {
	EXPENSES_LIST = 'expenses-list',
	EXPENSES_SAVE = 'expenses-save',
	EXPENSES_DELETE = 'expenses-delete' 
}

export class EndpointsURI {
	static readonly MAP = {
		[Endpoints.EXPENSES_LIST]: 'expenses',
		[Endpoints.EXPENSES_SAVE]: 'expenses',
		[Endpoints.EXPENSES_DELETE]: 'expenses/{index}',
	};
}

@Injectable()
export class HttpHelper {
	constructor() { }

	public getUrl(uriType: Endpoints, pathParams: { [key: string]: string } = {}): string {
		const apiEndpoint = 'https://my-expenses.getsandbox.com:443/';
		const uri = EndpointsURI.MAP[uriType];

    const apiFinal = apiEndpoint;
    return `${apiFinal}${this.replaceUrlParams(uri, pathParams)}`;
	}
	
	private replaceUrlParams(url: string, pathParams: { [key: string]: string }): string {
    return Object.keys(pathParams).reduce((acc, k) => {
      return acc.replace(`{${k}}`, pathParams[k]);
    }, url);
  }
}