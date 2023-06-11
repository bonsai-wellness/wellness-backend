BEGIN TRY

BEGIN TRAN;

-- DropIndex
DROP INDEX [Reservation_date_idx] ON [dbo].[Reservation];

-- DropIndex
DROP INDEX [Reservation_espacio_id_idx] ON [dbo].[Reservation];

-- CreateIndex
CREATE NONCLUSTERED INDEX [Reservation_espacio_id_date_idx] ON [dbo].[Reservation]([espacio_id], [date]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
