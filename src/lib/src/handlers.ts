export interface StateConfig<S> {
  stateName: string;
  initialState: S;
}

export interface HandlerConfig {
  type: string;
  stateName: string;
  reducer?;
  payload?;
}

export const createHandler = (type: string, stateName: string, reducer?) => {
  return (payload?): HandlerConfig => ({
    type,
    stateName,
    reducer,
    payload,
  });
};
