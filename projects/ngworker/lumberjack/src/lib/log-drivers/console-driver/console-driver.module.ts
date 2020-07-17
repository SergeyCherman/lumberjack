import { ModuleWithProviders, NgModule } from '@angular/core';
import { LogDriverConfig, LogDriverConfigToken } from '../../configs/log-driver.config';
import { ConsoleDriver } from './console.driver';
import { LogDriverToken } from '../log-driver';

export function consoleFactory(config: LogDriverConfig): ConsoleDriver {
  return new ConsoleDriver(config);
}

@NgModule()
export class ConsoleDriverModule {
  static forRoot(config: LogDriverConfig = {}): ModuleWithProviders<ConsoleDriverModule> {
    return {
      ngModule: ConsoleDriverModule,
      providers: [
        { provide: LogDriverConfigToken, useValue: config },
        {
          provide: LogDriverToken,
          useFactory: consoleFactory,
          multi: true,
          deps: [LogDriverConfigToken],
        },
      ],
    };
  }
}
