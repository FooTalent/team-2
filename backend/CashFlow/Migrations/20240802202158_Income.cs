using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CashFlow.Migrations
{
    /// <inheritdoc />
    public partial class Income : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Expenses_Budgets_BudgetId",
                table: "Expenses");

            migrationBuilder.DeleteData(
                table: "Caterogies",
                keyColumn: "Name",
                keyValue: "Cosmeticos");

            migrationBuilder.DeleteData(
                table: "Caterogies",
                keyColumn: "Name",
                keyValue: "Entretenimiento");

            migrationBuilder.DeleteData(
                table: "Caterogies",
                keyColumn: "Name",
                keyValue: "Impuestos");

            migrationBuilder.DeleteData(
                table: "Caterogies",
                keyColumn: "Name",
                keyValue: "Salud");

            migrationBuilder.RenameColumn(
                name: "BudgetId",
                table: "Expenses",
                newName: "MoneyId");

            migrationBuilder.RenameIndex(
                name: "IX_Expenses_BudgetId",
                table: "Expenses",
                newName: "IX_Expenses_MoneyId");

            migrationBuilder.AddColumn<string>(
                name: "CategoryName",
                table: "Expenses",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "CaterogyId",
                table: "Expenses",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Income",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Amount = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    MoneyId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Income", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Income_Moneys_MoneyId",
                        column: x => x.MoneyId,
                        principalTable: "Moneys",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Caterogies",
                column: "Name",
                values: new object[]
                {
                    "Comida y Bebida",
                    "Compras",
                    "Comunicaciones",
                    "Gastos financieros",
                    "Inversiones",
                    "Otros",
                    "Trabajo",
                    "Vehiculos",
                    "Vida y entretenimiento",
                    "Vivienda"
                });

            migrationBuilder.CreateIndex(
                name: "IX_Expenses_CategoryName",
                table: "Expenses",
                column: "CategoryName");

            migrationBuilder.CreateIndex(
                name: "IX_Income_MoneyId",
                table: "Income",
                column: "MoneyId");

            migrationBuilder.AddForeignKey(
                name: "FK_Expenses_Caterogies_CategoryName",
                table: "Expenses",
                column: "CategoryName",
                principalTable: "Caterogies",
                principalColumn: "Name");

            migrationBuilder.AddForeignKey(
                name: "FK_Expenses_Moneys_MoneyId",
                table: "Expenses",
                column: "MoneyId",
                principalTable: "Moneys",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Expenses_Caterogies_CategoryName",
                table: "Expenses");

            migrationBuilder.DropForeignKey(
                name: "FK_Expenses_Moneys_MoneyId",
                table: "Expenses");

            migrationBuilder.DropTable(
                name: "Income");

            migrationBuilder.DropIndex(
                name: "IX_Expenses_CategoryName",
                table: "Expenses");

            migrationBuilder.DeleteData(
                table: "Caterogies",
                keyColumn: "Name",
                keyValue: "Comida y Bebida");

            migrationBuilder.DeleteData(
                table: "Caterogies",
                keyColumn: "Name",
                keyValue: "Compras");

            migrationBuilder.DeleteData(
                table: "Caterogies",
                keyColumn: "Name",
                keyValue: "Comunicaciones");

            migrationBuilder.DeleteData(
                table: "Caterogies",
                keyColumn: "Name",
                keyValue: "Gastos financieros");

            migrationBuilder.DeleteData(
                table: "Caterogies",
                keyColumn: "Name",
                keyValue: "Inversiones");

            migrationBuilder.DeleteData(
                table: "Caterogies",
                keyColumn: "Name",
                keyValue: "Otros");

            migrationBuilder.DeleteData(
                table: "Caterogies",
                keyColumn: "Name",
                keyValue: "Trabajo");

            migrationBuilder.DeleteData(
                table: "Caterogies",
                keyColumn: "Name",
                keyValue: "Vehiculos");

            migrationBuilder.DeleteData(
                table: "Caterogies",
                keyColumn: "Name",
                keyValue: "Vida y entretenimiento");

            migrationBuilder.DeleteData(
                table: "Caterogies",
                keyColumn: "Name",
                keyValue: "Vivienda");

            migrationBuilder.DropColumn(
                name: "CategoryName",
                table: "Expenses");

            migrationBuilder.DropColumn(
                name: "CaterogyId",
                table: "Expenses");

            migrationBuilder.RenameColumn(
                name: "MoneyId",
                table: "Expenses",
                newName: "BudgetId");

            migrationBuilder.RenameIndex(
                name: "IX_Expenses_MoneyId",
                table: "Expenses",
                newName: "IX_Expenses_BudgetId");

            migrationBuilder.InsertData(
                table: "Caterogies",
                column: "Name",
                values: new object[]
                {
                    "Cosmeticos",
                    "Entretenimiento",
                    "Impuestos",
                    "Salud"
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Expenses_Budgets_BudgetId",
                table: "Expenses",
                column: "BudgetId",
                principalTable: "Budgets",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
