import {Provider} from '@angular/core';
import {environment} from '../../../environments/environment';

export const API_PROVIDER = 'API_PROVIDER';

export interface IApiProvider {
  apiUrl: string;
}

const apiProvider: IApiProvider = {
  apiUrl: environment.apiProtocol + '://' + environment.apiUrl
};

export const ApiProvider: Provider = {
  provide: API_PROVIDER,
  useValue: apiProvider
};
