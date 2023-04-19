export type Espacio = {
  espacio_id: number;
  created_at: Date;
  updated_at: Date;
  name: String;
  code: String;
  capacity: Number;
  time_max: Number;
  details: String;
  open_at: Date;
  close_at: Date;
  espacio_padre_id: Number;
  imagen: String;
  is_active: String;
}