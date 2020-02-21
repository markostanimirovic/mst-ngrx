export interface StateConfig<T> {
  stateName: string;
  initialState: T;
}

export interface HandlerConfig {
  type: string;
  stateName: string;
  reducer?;
  payload?;
}

export const createHandler = (type: string, stateName: string, reducer?) => (payload?): HandlerConfig => ({
  type,
  stateName,
  reducer,
  payload,
});
