/*
  Warnings:

  - You are about to alter the column `start_time` on the `Reservation` table. The data in that column could be lost. The data in that column will be cast from `DateTime2` to `Time`.
  - You are about to alter the column `end_time` on the `Reservation` table. The data in that column could be lost. The data in that column will be cast from `DateTime2` to `Time`.
  - Added the required column `date` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Reservation] ALTER COLUMN [start_time] TIME NOT NULL;
ALTER TABLE [dbo].[Reservation] ALTER COLUMN [end_time] TIME NOT NULL;
ALTER TABLE [dbo].[Reservation] ADD [date] DATE NOT NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
