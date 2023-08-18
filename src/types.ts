export type ElixirType = {
  id: string;
  name: string;
  effect: string;
  sideEffects: string;
  characteristics: string;
  time: string;
  ingredients: [{
    id: number;
    name: string;
  }];
}

export type HousesType = {
  id: string;
  name: string;
  houseColours: string;
  founder: string;
  ghost: string;
  commonRoom: string;
}

export type SpellType = {
  id: string;
  name: string;
  effect: string;
  incantation: string;
  type: string;
  light: string;
}

export type IngredientType = {
  id: string;
  name: string;
}