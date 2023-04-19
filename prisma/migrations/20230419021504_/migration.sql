BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[User] (
    [id_user] INT NOT NULL IDENTITY(1,1),
    [created_at] DATETIME2 NOT NULL CONSTRAINT [User_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    [email] NVARCHAR(1000) NOT NULL,
    [password] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [is_admin] BIT NOT NULL,
    CONSTRAINT [User_pkey] PRIMARY KEY CLUSTERED ([id_user]),
    CONSTRAINT [User_email_key] UNIQUE NONCLUSTERED ([email])
);

-- CreateTable
CREATE TABLE [dbo].[Torneo] (
    [torneo_id] INT NOT NULL IDENTITY(1,1),
    [created_at] DATETIME2 NOT NULL CONSTRAINT [Torneo_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000) NOT NULL,
    [url] NVARCHAR(1000) NOT NULL,
    [date_start] DATE NOT NULL,
    [date_end] DATE NOT NULL,
    [location] NVARCHAR(1000) NOT NULL,
    [imagen] NVARCHAR(1000) NOT NULL,
    [is_active] VARCHAR(1) NOT NULL,
    CONSTRAINT [Torneo_pkey] PRIMARY KEY CLUSTERED ([torneo_id])
);

-- CreateTable
CREATE TABLE [dbo].[Aviso] (
    [aviso_id] INT NOT NULL IDENTITY(1,1),
    [created_at] DATETIME2 NOT NULL CONSTRAINT [Aviso_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000) NOT NULL,
    [imagen] NVARCHAR(1000) NOT NULL,
    [is_active] VARCHAR(1) NOT NULL,
    CONSTRAINT [Aviso_pkey] PRIMARY KEY CLUSTERED ([aviso_id])
);

-- CreateTable
CREATE TABLE [dbo].[EspacioPadre] (
    [espacio_padre_id] INT NOT NULL IDENTITY(1,1),
    [created_at] DATETIME2 NOT NULL CONSTRAINT [EspacioPadre_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [code] NVARCHAR(1000) NOT NULL,
    [map_url] NVARCHAR(1000) NOT NULL,
    [is_active] VARCHAR(1) NOT NULL,
    CONSTRAINT [EspacioPadre_pkey] PRIMARY KEY CLUSTERED ([espacio_padre_id])
);

-- CreateTable
CREATE TABLE [dbo].[Espacio] (
    [espacio_id] INT NOT NULL IDENTITY(1,1),
    [created_at] DATETIME2 NOT NULL CONSTRAINT [Espacio_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [code] NVARCHAR(1000) NOT NULL,
    [capacity] INT NOT NULL,
    [time_max] SMALLINT NOT NULL,
    [details] NVARCHAR(1000) NOT NULL,
    [open_at] TIME NOT NULL,
    [close_at] TIME NOT NULL,
    [imagen] NVARCHAR(1000) NOT NULL,
    [is_active] VARCHAR(1) NOT NULL,
    [espacio_padre_id] INT NOT NULL,
    CONSTRAINT [Espacio_pkey] PRIMARY KEY CLUSTERED ([espacio_id])
);

-- CreateTable
CREATE TABLE [dbo].[Deporte] (
    [deporte_id] INT NOT NULL IDENTITY(1,1),
    [created_at] DATETIME2 NOT NULL CONSTRAINT [Deporte_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [imagen] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Deporte_pkey] PRIMARY KEY CLUSTERED ([deporte_id])
);

-- CreateTable
CREATE TABLE [dbo].[EspacioDeporte] (
    [deporte_id] INT NOT NULL,
    [espacio_id] INT NOT NULL,
    [created_at] DATETIME2 NOT NULL CONSTRAINT [EspacioDeporte_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    CONSTRAINT [EspacioDeporte_pkey] PRIMARY KEY CLUSTERED ([deporte_id],[espacio_id])
);

-- CreateTable
CREATE TABLE [dbo].[PuntoImportante] (
    [punto_importante_id] INT NOT NULL IDENTITY(1,1),
    [created_at] DATETIME2 NOT NULL CONSTRAINT [PuntoImportante_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    [name] INT NOT NULL,
    CONSTRAINT [PuntoImportante_pkey] PRIMARY KEY CLUSTERED ([punto_importante_id])
);

-- CreateTable
CREATE TABLE [dbo].[EspacioPuntoImportante] (
    [espacio_id] INT NOT NULL,
    [punto_importante_id] INT NOT NULL,
    [created_at] DATETIME2 NOT NULL CONSTRAINT [EspacioPuntoImportante_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    CONSTRAINT [EspacioPuntoImportante_pkey] PRIMARY KEY CLUSTERED ([espacio_id],[punto_importante_id])
);

-- CreateTable
CREATE TABLE [dbo].[Reservation] (
    [reservation_id] INT NOT NULL IDENTITY(1,1),
    [created_at] DATETIME2 NOT NULL CONSTRAINT [Reservation_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    [entry_time] TIME NOT NULL,
    [exit_time] TIME NOT NULL,
    [espacio_id] INT NOT NULL,
    CONSTRAINT [Reservation_pkey] PRIMARY KEY CLUSTERED ([reservation_id])
);

-- CreateTable
CREATE TABLE [dbo].[ReservationUser] (
    [reservation_id] INT NOT NULL,
    [user_id] INT NOT NULL,
    [created_at] DATETIME2 NOT NULL CONSTRAINT [ReservationUser_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    CONSTRAINT [ReservationUser_pkey] PRIMARY KEY CLUSTERED ([reservation_id],[user_id])
);

-- CreateTable
CREATE TABLE [dbo].[WellnessGym] (
    [wellnsess_gym_id] INT NOT NULL IDENTITY(1,1),
    [created_at] DATETIME2 NOT NULL CONSTRAINT [WellnessGym_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    [aforo_actual] INT NOT NULL,
    CONSTRAINT [WellnessGym_pkey] PRIMARY KEY CLUSTERED ([wellnsess_gym_id])
);

-- CreateTable
CREATE TABLE [dbo].[WellnessSchedule] (
    [day_of_week_id] NVARCHAR(1000) NOT NULL,
    [wellness_gym_id] INT NOT NULL,
    [created_at] DATETIME2 NOT NULL CONSTRAINT [WellnessSchedule_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    [open_time] TIME NOT NULL,
    [close_time] TIME NOT NULL,
    CONSTRAINT [WellnessSchedule_pkey] PRIMARY KEY CLUSTERED ([day_of_week_id],[wellness_gym_id])
);

-- CreateTable
CREATE TABLE [dbo].[WellnessLog] (
    [wellness_log_id] INT NOT NULL IDENTITY(1,1),
    [created_at] DATETIME2 NOT NULL CONSTRAINT [WellnessLog_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    [type] VARCHAR(1) NOT NULL,
    [time] DATETIME2 NOT NULL,
    [wellness_id] INT NOT NULL,
    CONSTRAINT [WellnessLog_pkey] PRIMARY KEY CLUSTERED ([wellness_log_id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Espacio] ADD CONSTRAINT [Espacio_espacio_padre_id_fkey] FOREIGN KEY ([espacio_padre_id]) REFERENCES [dbo].[EspacioPadre]([espacio_padre_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[EspacioDeporte] ADD CONSTRAINT [EspacioDeporte_deporte_id_fkey] FOREIGN KEY ([deporte_id]) REFERENCES [dbo].[Deporte]([deporte_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[EspacioDeporte] ADD CONSTRAINT [EspacioDeporte_espacio_id_fkey] FOREIGN KEY ([espacio_id]) REFERENCES [dbo].[Espacio]([espacio_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[EspacioPuntoImportante] ADD CONSTRAINT [EspacioPuntoImportante_espacio_id_fkey] FOREIGN KEY ([espacio_id]) REFERENCES [dbo].[Espacio]([espacio_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[EspacioPuntoImportante] ADD CONSTRAINT [EspacioPuntoImportante_punto_importante_id_fkey] FOREIGN KEY ([punto_importante_id]) REFERENCES [dbo].[PuntoImportante]([punto_importante_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Reservation] ADD CONSTRAINT [Reservation_espacio_id_fkey] FOREIGN KEY ([espacio_id]) REFERENCES [dbo].[Espacio]([espacio_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[ReservationUser] ADD CONSTRAINT [ReservationUser_reservation_id_fkey] FOREIGN KEY ([reservation_id]) REFERENCES [dbo].[Reservation]([reservation_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[ReservationUser] ADD CONSTRAINT [ReservationUser_user_id_fkey] FOREIGN KEY ([user_id]) REFERENCES [dbo].[User]([id_user]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[WellnessSchedule] ADD CONSTRAINT [WellnessSchedule_wellness_gym_id_fkey] FOREIGN KEY ([wellness_gym_id]) REFERENCES [dbo].[WellnessGym]([wellnsess_gym_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[WellnessLog] ADD CONSTRAINT [WellnessLog_wellness_id_fkey] FOREIGN KEY ([wellness_id]) REFERENCES [dbo].[WellnessGym]([wellnsess_gym_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
