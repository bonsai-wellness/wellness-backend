import { Espacio, EspacioPadre } from "@prisma/client";

export type EspacioCreate = Omit<
  Espacio,
  "espacio_id" | "created_at" | "updated_at"
>;

export type EspacioPadreCreate = Omit<
  EspacioPadre,
  "espacio_padre_id" | "created_at" | "updated_at"
>;
