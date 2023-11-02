using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PaymentServiceSolution.Core.Migrations
{
    public partial class AddingBookCoverImgProp : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "BookCoverBackImg",
                table: "Products",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BookCoverBackImg",
                table: "Products");
        }
    }
}
