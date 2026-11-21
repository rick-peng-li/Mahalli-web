use sea_orm_migration::{prelude::*, sea_orm::Statement};

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        let db = manager.get_connection();

        // Enable WAL mode for better concurrency
        db.execute_raw(Statement::from_string(
            sea_orm::DatabaseBackend::Sqlite,
            r#"PRAGMA journal_mode=WAL;"#,
        ))
        .await?;

        // --- FK indexes (no is_deleted, plain indexes) ---

        manager
            .create_index(
                Index::create()
                    .table(OrderItem::Table)
                    .col(OrderItem::OrderId)
                    .name("idx_order_items_order_id")
                    .to_owned(),
            )
            .await?;

        manager
            .create_index(
                Index::create()
                    .table(OrderItem::Table)
                    .col(OrderItem::InventoryId)
                    .name("idx_order_item_inventory_id")
                    .to_owned(),
            )
            .await?;

        manager
            .create_index(
                Index::create()
                    .table(QuoteItem::Table)
                    .col(QuoteItem::QuoteId)
                    .name("idx_quote_items_quote_id")
                    .to_owned(),
            )
            .await?;

        manager
            .create_index(
                Index::create()
                    .table(QuoteItem::Table)
                    .col(QuoteItem::ProductId)
                    .name("idx_quote_item_product_id")
                    .to_owned(),
            )
            .await?;

        manager
            .create_index(
                Index::create()
                    .table(InvoiceItem::Table)
                    .col(InvoiceItem::InvoiceId)
                    .name("idx_invoice_items_invoice_id")
                    .to_owned(),
            )
            .await?;

        manager
            .create_index(
                Index::create()
                    .table(InvoiceItem::Table)
                    .col(InvoiceItem::ProductId)
                    .name("idx_invoice_items_product_id")
                    .to_owned(),
            )
            .await?;

        manager
            .create_index(
                Index::create()
                    .table(DeliveryNoteItem::Table)
                    .col(DeliveryNoteItem::DeliveryNoteId)
                    .name("idx_delivery_note_items_delivery_note_id")
                    .to_owned(),
            )
            .await?;

        manager
            .create_index(
                Index::create()
                    .table(DeliveryNoteItem::Table)
                    .col(DeliveryNoteItem::ProductId)
                    .name("idx_delivery_note_items_product_id")
                    .to_owned(),
            )
            .await?;

        manager
            .create_index(
                Index::create()
                    .table(Invoice::Table)
                    .col(Invoice::DeliveryNoteId)
                    .name("idx_invoices_delivery_note_id")
                    .to_owned(),
            )
            .await?;

        manager
            .create_index(
                Index::create()
                    .table(InvoicePayment::Table)
                    .col(InvoicePayment::InvoiceId)
                    .name("idx_invoice_payments_invoice_id")
                    .to_owned(),
            )
            .await?;

        manager
            .create_index(
                Index::create()
                    .table(InvoicePayment::Table)
                    .col(InvoicePayment::PaymentDate)
                    .name("idx_invoice_payments_payment_date")
                    .to_owned(),
            )
            .await?;

        // --- Partial indexes (active records only, WHERE is_deleted = FALSE) ---

        // invoices
        db.execute_unprepared(
            "CREATE INDEX idx_invoices_active_status ON invoices(status) WHERE is_deleted = FALSE",
        )
        .await?;
        db.execute_unprepared(
            "CREATE INDEX idx_invoices_active_client ON invoices(client_id) WHERE is_deleted = FALSE",
        )
        .await?;
        db.execute_unprepared(
            "CREATE INDEX idx_invoices_active_created_at ON invoices(created_at) WHERE is_deleted = FALSE",
        )
        .await?;
        db.execute_unprepared(
            "CREATE INDEX idx_invoices_active_identifier ON invoices(identifier) WHERE is_deleted = FALSE",
        )
        .await?;

        // orders
        db.execute_unprepared(
            "CREATE INDEX idx_orders_active_status ON orders(status) WHERE is_deleted = FALSE",
        )
        .await?;
        db.execute_unprepared(
            "CREATE INDEX idx_orders_active_client ON orders(client_id) WHERE is_deleted = FALSE",
        )
        .await?;
        db.execute_unprepared(
            "CREATE INDEX idx_orders_active_created_at ON orders(created_at) WHERE is_deleted = FALSE",
        )
        .await?;
        db.execute_unprepared(
            "CREATE INDEX idx_orders_active_identifier ON orders(identifier) WHERE is_deleted = FALSE",
        )
        .await?;

        // quotes
        db.execute_unprepared(
            "CREATE INDEX idx_quotes_active_status ON quotes(status) WHERE is_deleted = FALSE",
        )
        .await?;
        db.execute_unprepared(
            "CREATE INDEX idx_quotes_active_client ON quotes(client_id) WHERE is_deleted = FALSE",
        )
        .await?;
        db.execute_unprepared(
            "CREATE INDEX idx_quotes_active_created_at ON quotes(created_at) WHERE is_deleted = FALSE",
        )
        .await?;
        db.execute_unprepared(
            "CREATE INDEX idx_quotes_active_identifier ON quotes(identifier) WHERE is_deleted = FALSE",
        )
        .await?;

        // delivery_notes
        db.execute_unprepared(
            "CREATE INDEX idx_delivery_notes_active_status ON delivery_notes(status) WHERE is_deleted = FALSE",
        )
        .await?;
        db.execute_unprepared(
            "CREATE INDEX idx_delivery_notes_active_client ON delivery_notes(client_id) WHERE is_deleted = FALSE",
        )
        .await?;
        db.execute_unprepared(
            "CREATE INDEX idx_delivery_notes_active_order ON delivery_notes(order_id) WHERE is_deleted = FALSE",
        )
        .await?;
        db.execute_unprepared(
            "CREATE INDEX idx_delivery_notes_active_created_at ON delivery_notes(created_at) WHERE is_deleted = FALSE",
        )
        .await?;
        db.execute_unprepared(
            "CREATE INDEX idx_delivery_notes_active_identifier ON delivery_notes(identifier) WHERE is_deleted = FALSE",
        )
        .await?;

        // clients
        db.execute_unprepared(
            "CREATE INDEX idx_clients_active_name ON clients(full_name) WHERE is_deleted = FALSE",
        )
        .await?;

        // products
        db.execute_unprepared(
            "CREATE INDEX idx_products_active_name ON products(name) WHERE is_deleted = FALSE",
        )
        .await?;

        // inventory_transactions (uses is_void instead of is_deleted)
        db.execute_unprepared(
            "CREATE INDEX idx_inventory_active_product ON inventory_transactions(product_id) WHERE is_void = FALSE",
        )
        .await?;
        db.execute_unprepared(
            "CREATE INDEX idx_inventory_active_type ON inventory_transactions(transaction_type) WHERE is_void = FALSE",
        )
        .await?;
        db.execute_unprepared(
            "CREATE INDEX idx_inventory_active_source ON inventory_transactions(source_type, source_id) WHERE is_void = FALSE",
        )
        .await?;
        db.execute_unprepared(
            "CREATE INDEX idx_inventory_active_created_at ON inventory_transactions(created_at) WHERE is_void = FALSE",
        )
        .await?;

        // Create triggers for auto-generated identifiers
        let invoice_trigger = Statement::from_string(
            sea_orm::DatabaseBackend::Sqlite,
            r#"
                CREATE TRIGGER IF NOT EXISTS invoice_identifier_generator
                AFTER INSERT ON invoices
                BEGIN
                    UPDATE invoices
                    SET identifier = (
                        WITH current_month_invoices AS (
                            SELECT COUNT(*) as invoice_count
                            FROM invoices
                            WHERE strftime('%Y-%m', created_at) = strftime('%Y-%m', NEW.created_at)
                            AND id <= NEW.id
                        )
                        SELECT format(
                            'F-%s-%03d',
                            SUBSTRING(strftime('%Y-%m', NEW.created_at), 3),
                            invoice_count
                        )
                        FROM current_month_invoices
                    )
                    WHERE id = NEW.id;
                END;
            "#,
        );
        db.execute_raw(invoice_trigger).await?;

        let order_trigger = Statement::from_string(
            sea_orm::DatabaseBackend::Sqlite,
            r#"
                CREATE TRIGGER IF NOT EXISTS order_identifier_generator
                AFTER INSERT ON orders
                BEGIN
                    UPDATE orders
                    SET identifier = (
                        WITH current_month_orders AS (
                            SELECT COUNT(*) as order_count
                            FROM orders
                            WHERE strftime('%Y-%m', created_at) = strftime('%Y-%m', NEW.created_at)
                            AND id <= NEW.id
                        )
                        SELECT format(
                            'C-%s-%03d',
                            SUBSTRING(strftime('%Y-%m', NEW.created_at), 3),
                            order_count
                        )
                        FROM current_month_orders
                    )
                    WHERE id = NEW.id;
                END;
            "#,
        );
        db.execute_raw(order_trigger).await?;

        let quote_trigger = Statement::from_string(
            sea_orm::DatabaseBackend::Sqlite,
            r#"
                CREATE TRIGGER IF NOT EXISTS quote_identifier_generator
                AFTER INSERT ON quotes
                BEGIN
                    UPDATE quotes
                    SET identifier = (
                        WITH current_month_quotes AS (
                            SELECT COUNT(*) as quote_count
                            FROM quotes
                            WHERE strftime('%Y-%m', created_at) = strftime('%Y-%m', NEW.created_at)
                            AND id <= NEW.id
                        )
                        SELECT format(
                            'D-%s-%03d',
                            SUBSTRING(strftime('%Y-%m', NEW.created_at), 3),
                            quote_count
                        )
                        FROM current_month_quotes
                    )
                    WHERE id = NEW.id;
                END;
            "#,
        );
        db.execute_raw(quote_trigger).await?;

        let delivery_note_trigger = Statement::from_string(
            sea_orm::DatabaseBackend::Sqlite,
            r#"
                CREATE TRIGGER IF NOT EXISTS delivery_note_identifier_generator
                AFTER INSERT ON delivery_notes
                BEGIN
                    UPDATE delivery_notes
                    SET identifier = (
                        WITH current_month_delivery_notes AS (
                            SELECT COUNT(*) as delivery_note_count
                            FROM delivery_notes
                            WHERE strftime('%Y-%m', created_at) = strftime('%Y-%m', NEW.created_at)
                            AND id <= NEW.id
                        )
                        SELECT format(
                            'BL-%s-%03d',
                            SUBSTRING(strftime('%Y-%m', NEW.created_at), 3),
                            delivery_note_count
                        )
                        FROM current_month_delivery_notes
                    )
                    WHERE id = NEW.id;
                END;
            "#,
        );
        db.execute_raw(delivery_note_trigger).await?;

        Ok(())
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        let db = manager.get_connection();
        db.execute_unprepared("DROP TRIGGER IF EXISTS invoice_identifier_generator")
            .await?;
        db.execute_unprepared("DROP TRIGGER IF EXISTS order_identifier_generator")
            .await?;
        db.execute_unprepared("DROP TRIGGER IF EXISTS quote_identifier_generator")
            .await?;
        db.execute_unprepared("DROP TRIGGER IF EXISTS delivery_note_identifier_generator")
            .await?;

        for name in [
            "idx_order_items_order_id",
            "idx_order_item_inventory_id",
            "idx_quote_items_quote_id",
            "idx_quote_item_product_id",
            "idx_invoice_items_invoice_id",
            "idx_invoice_items_product_id",
            "idx_delivery_note_items_delivery_note_id",
            "idx_delivery_note_items_product_id",
            "idx_invoices_delivery_note_id",
            "idx_invoice_payments_invoice_id",
            "idx_invoice_payments_payment_date",
            "idx_invoices_active_status",
            "idx_invoices_active_client",
            "idx_invoices_active_created_at",
            "idx_invoices_active_identifier",
            "idx_orders_active_status",
            "idx_orders_active_client",
            "idx_orders_active_created_at",
            "idx_orders_active_identifier",
            "idx_quotes_active_status",
            "idx_quotes_active_client",
            "idx_quotes_active_created_at",
            "idx_quotes_active_identifier",
            "idx_delivery_notes_active_status",
            "idx_delivery_notes_active_client",
            "idx_delivery_notes_active_order",
            "idx_delivery_notes_active_created_at",
            "idx_delivery_notes_active_identifier",
            "idx_clients_active_name",
            "idx_products_active_name",
            "idx_inventory_active_product",
            "idx_inventory_active_type",
            "idx_inventory_active_source",
            "idx_inventory_active_created_at",
        ] {
            db.execute_unprepared(&format!("DROP INDEX IF EXISTS {name}"))
                .await?;
        }

        Ok(())
    }
}

#[derive(DeriveIden)]
enum Quote {
    #[sea_orm(iden = "quotes")]
    Table,
}

#[derive(DeriveIden)]
enum QuoteItem {
    #[sea_orm(iden = "quote_items")]
    Table,
    #[sea_orm(iden = "quote_id")]
    QuoteId,
    #[sea_orm(iden = "product_id")]
    ProductId,
}

#[derive(DeriveIden)]
enum OrderItem {
    #[sea_orm(iden = "order_items")]
    Table,
    #[sea_orm(iden = "order_id")]
    OrderId,
    #[sea_orm(iden = "inventory_id")]
    InventoryId,
}

#[derive(DeriveIden)]
enum Order {
    #[sea_orm(iden = "orders")]
    Table,
}

#[derive(DeriveIden)]
enum Invoice {
    #[sea_orm(iden = "invoices")]
    Table,
    #[sea_orm(iden = "delivery_note_id")]
    DeliveryNoteId,
}

#[derive(DeriveIden)]
enum InvoicePayment {
    #[sea_orm(iden = "invoice_payments")]
    Table,
    #[sea_orm(iden = "invoice_id")]
    InvoiceId,
    #[sea_orm(iden = "payment_date")]
    PaymentDate,
}

#[derive(DeriveIden)]
enum InvoiceItem {
    #[sea_orm(iden = "invoice_items")]
    Table,
    #[sea_orm(iden = "invoice_id")]
    InvoiceId,
    #[sea_orm(iden = "product_id")]
    ProductId,
}

#[derive(DeriveIden)]
enum InventoryTransaction {
    #[sea_orm(iden = "inventory_transactions")]
    Table,
}

#[derive(DeriveIden)]
enum DeliveryNote {
    #[sea_orm(iden = "delivery_notes")]
    Table,
}

#[derive(DeriveIden)]
enum DeliveryNoteItem {
    #[sea_orm(iden = "delivery_note_items")]
    Table,
    #[sea_orm(iden = "delivery_note_id")]
    DeliveryNoteId,
    #[sea_orm(iden = "product_id")]
    ProductId,
}

#[derive(DeriveIden)]
enum Client {
    #[sea_orm(iden = "clients")]
    Table,
}

#[derive(DeriveIden)]
enum Product {
    #[sea_orm(iden = "products")]
    Table,
}
