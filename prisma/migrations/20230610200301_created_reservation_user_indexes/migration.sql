BEGIN TRY

BEGIN TRAN;

-- CreateIndex
CREATE NONCLUSTERED INDEX [ReservationUser_reservation_id_idx] ON [dbo].[ReservationUser]([reservation_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [ReservationUser_user_id_idx] ON [dbo].[ReservationUser]([user_id]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
