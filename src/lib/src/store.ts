import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { fromStateConfigToState } from './helpers';
import { HandlerConfig, StateConfig } from './handlers';

export class Store {

  private state: BehaviorSubject<any>;
  private handlers = new Subject();

  state$: Observable<any>;
  handlers$: Observable<any>;

  constructor(stateConfig: StateConfig<any> | StateConfig<any>[]) {
    this.state = new BehaviorSubject(fromStateConfigToState(stateConfig));
    this.state$ = this.state.asObservable();
    this.handlers$ = this.handlers.asObservable();
  }

  dispatch(handler: HandlerConfig) {
    if (handler.reducer) {
      const newStateChunk = handler.reducer(this.state.value[handler.stateName], handler.payload);
      this.state.next({ ...this.state.value, [handler.stateName]: newStateChunk });
    }

    this.handlers.next(handler);
  }

}
