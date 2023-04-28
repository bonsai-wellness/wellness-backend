import {
  Deporte,
  Espacio,
  EspacioPadre,
  EspacioDeporte,
  Torneo,
  PuntoImportante,
  EspacioPuntoImportante,
} from "@prisma/client";

export type EspacioCreate = Omit<
  Espacio,
  "espacio_id" | "created_at" | "updated_at"
>;

export type EspacioPadreCreate = Omit<
  EspacioPadre,
  "espacio_padre_id" | "created_at" | "updated_at"
>;

export type DeporteCreate = Omit<
  Deporte,
  "deporte_id" | "created_at" | "updated_at"
>;

export type EspacioDeporteCreate = Omit<
  EspacioDeporte,
  "created_at" | "updated_at"
>;

export type TorneoCreate = Omit<
  Torneo,
  "torneo_id" | "created_at" | "updated_at"
>;

export type PuntoImportanteCreate = Omit<
  PuntoImportante,
  "punto_importante_id" | "created_at" | "updated_at"
>;

export type EspacioPuntoImportanteCreate = Omit<
  EspacioPuntoImportante,
  "created_at" | "updated_at"
>;
