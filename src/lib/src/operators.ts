import { filter, map } from 'rxjs/operators';
import { HandlerConfig } from './handlers';

export const select = (stateName: string) => map(
  state => state[stateName]
);

export const ofType = (...handlers: (() => HandlerConfig)[]) => filter(
  (emittedHandler: HandlerConfig) => handlers.map(handler => handler().type).indexOf(emittedHandler.type) > -1
);
