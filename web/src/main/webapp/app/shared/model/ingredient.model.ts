export interface IIngredient {
  id?: number;
  name?: string;
  unit?: string;
}

export const defaultValue: Readonly<IIngredient> = {};
