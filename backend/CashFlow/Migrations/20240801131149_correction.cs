using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CashFlow.Migrations
{
    /// <inheritdoc />
    public partial class correction : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Budgets_Category_CategoryName",
                table: "Budgets");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Category",
                table: "Category");

            migrationBuilder.RenameTable(
                name: "Category",
                newName: "Caterogies");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Caterogies",
                table: "Caterogies",
                column: "Name");

            migrationBuilder.AddForeignKey(
                name: "FK_Budgets_Caterogies_CategoryName",
                table: "Budgets",
                column: "CategoryName",
                principalTable: "Caterogies",
                principalColumn: "Name",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Budgets_Caterogies_CategoryName",
                table: "Budgets");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Caterogies",
                table: "Caterogies");

            migrationBuilder.RenameTable(
                name: "Caterogies",
                newName: "Category");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Category",
                table: "Category",
                column: "Name");

            migrationBuilder.AddForeignKey(
                name: "FK_Budgets_Category_CategoryName",
                table: "Budgets",
                column: "CategoryName",
                principalTable: "Category",
                principalColumn: "Name",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
