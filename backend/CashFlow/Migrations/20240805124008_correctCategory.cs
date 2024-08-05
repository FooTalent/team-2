using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CashFlow.Migrations
{
    /// <inheritdoc />
    public partial class correctCategory : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Expenses_Caterogies_CategoryName",
                table: "Expenses");

            migrationBuilder.DropColumn(
                name: "CaterogyId",
                table: "Expenses");

            migrationBuilder.AlterColumn<string>(
                name: "CategoryName",
                table: "Expenses",
                type: "text",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Expenses_Caterogies_CategoryName",
                table: "Expenses",
                column: "CategoryName",
                principalTable: "Caterogies",
                principalColumn: "Name",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Expenses_Caterogies_CategoryName",
                table: "Expenses");

            migrationBuilder.AlterColumn<string>(
                name: "CategoryName",
                table: "Expenses",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AddColumn<int>(
                name: "CaterogyId",
                table: "Expenses",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_Expenses_Caterogies_CategoryName",
                table: "Expenses",
                column: "CategoryName",
                principalTable: "Caterogies",
                principalColumn: "Name");
        }
    }
}
