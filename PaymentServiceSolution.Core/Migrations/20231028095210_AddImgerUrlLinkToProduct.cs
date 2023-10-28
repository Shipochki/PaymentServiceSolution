using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PaymentServiceSolution.Core.Migrations
{
    public partial class AddImgerUrlLinkToProduct : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageUrlLink",
                table: "Products",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageUrlLink",
                table: "Products");
        }
    }
}
