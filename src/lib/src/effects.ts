import { Observable } from 'rxjs';
import { Store } from './store';

export const MST_NGRX_EFFECT = 'MstNgrxEffect';

export const createEffect = (effect) => {
  effect.type = MST_NGRX_EFFECT;
  return effect;
};

export const registerEffects = (store: Store, effects: Observable<any>[]) => {
  effects.forEach(effect => effect.subscribe((handlers) => {
    Array.isArray(handlers)
      ? handlers.forEach(handler => store.dispatch(handler))
      : store.dispatch(handlers);
  }));
};
