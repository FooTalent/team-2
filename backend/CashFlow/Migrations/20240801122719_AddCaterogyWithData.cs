using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CashFlow.Migrations
{
    /// <inheritdoc />
    public partial class AddCaterogyWithData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Category",
                column: "Name",
                values: new object[]
                {
                    "Cosmeticos",
                    "Entretenimiento",
                    "Impuestos",
                    "Salud",
                    "Transporte"
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Category",
                keyColumn: "Name",
                keyValue: "Cosmeticos");

            migrationBuilder.DeleteData(
                table: "Category",
                keyColumn: "Name",
                keyValue: "Entretenimiento");

            migrationBuilder.DeleteData(
                table: "Category",
                keyColumn: "Name",
                keyValue: "Impuestos");

            migrationBuilder.DeleteData(
                table: "Category",
                keyColumn: "Name",
                keyValue: "Salud");

            migrationBuilder.DeleteData(
                table: "Category",
                keyColumn: "Name",
                keyValue: "Transporte");
        }
    }
}
