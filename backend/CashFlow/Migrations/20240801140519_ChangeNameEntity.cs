using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CashFlow.Migrations
{
    /// <inheritdoc />
    public partial class ChangeNameEntity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Budgets_TotalMoneys_TotalMoneyId",
                table: "Budgets");

            migrationBuilder.DropTable(
                name: "TotalMoneys");

            migrationBuilder.RenameColumn(
                name: "TotalMoneyId",
                table: "Budgets",
                newName: "MoneyId");

            migrationBuilder.RenameIndex(
                name: "IX_Budgets_TotalMoneyId",
                table: "Budgets",
                newName: "IX_Budgets_MoneyId");

            migrationBuilder.CreateTable(
                name: "Moneys",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Total = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Rest = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Moneys", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Moneys_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Moneys_UserId",
                table: "Moneys",
                column: "UserId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Budgets_Moneys_MoneyId",
                table: "Budgets",
                column: "MoneyId",
                principalTable: "Moneys",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Budgets_Moneys_MoneyId",
                table: "Budgets");

            migrationBuilder.DropTable(
                name: "Moneys");

            migrationBuilder.RenameColumn(
                name: "MoneyId",
                table: "Budgets",
                newName: "TotalMoneyId");

            migrationBuilder.RenameIndex(
                name: "IX_Budgets_MoneyId",
                table: "Budgets",
                newName: "IX_Budgets_TotalMoneyId");

            migrationBuilder.CreateTable(
                name: "TotalMoneys",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    Rest = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Total = table.Column<decimal>(type: "decimal(18,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TotalMoneys", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TotalMoneys_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_TotalMoneys_UserId",
                table: "TotalMoneys",
                column: "UserId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Budgets_TotalMoneys_TotalMoneyId",
                table: "Budgets",
                column: "TotalMoneyId",
                principalTable: "TotalMoneys",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
