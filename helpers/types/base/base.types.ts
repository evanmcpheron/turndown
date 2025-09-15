export type GenericTurndownObject = Record<string, any> | any | undefined;
export type TurndownObject<T = GenericTurndownObject> =
  | Record<string, T>
  | T
  | undefined;
