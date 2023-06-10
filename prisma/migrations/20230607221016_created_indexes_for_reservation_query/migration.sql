BEGIN TRY

BEGIN TRAN;

-- CreateIndex
CREATE NONCLUSTERED INDEX [Espacio_espacio_padre_id_idx] ON [dbo].[Espacio]([espacio_padre_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [Reservation_espacio_id_idx] ON [dbo].[Reservation]([espacio_id]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
