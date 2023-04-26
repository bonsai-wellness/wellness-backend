/*
  Warnings:

  - You are about to drop the `TorneoDeporte` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TorneoEspacio` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `deporte_id` to the `Torneo` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[TorneoDeporte] DROP CONSTRAINT [TorneoDeporte_deporte_id_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[TorneoDeporte] DROP CONSTRAINT [TorneoDeporte_torneo_id_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[TorneoEspacio] DROP CONSTRAINT [TorneoEspacio_espacio_padre_id_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[TorneoEspacio] DROP CONSTRAINT [TorneoEspacio_torneo_id_fkey];

-- AlterTable
ALTER TABLE [dbo].[Torneo] ADD [deporte_id] INT NOT NULL;

-- DropTable
DROP TABLE [dbo].[TorneoDeporte];

-- DropTable
DROP TABLE [dbo].[TorneoEspacio];

-- AddForeignKey
ALTER TABLE [dbo].[Torneo] ADD CONSTRAINT [Torneo_deporte_id_fkey] FOREIGN KEY ([deporte_id]) REFERENCES [dbo].[Deporte]([deporte_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
