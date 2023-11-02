namespace PaymentServiceSolution.Core.Services.Product.Models
{
	public class ProductModel
	{
		public int Id { get; set; }

		public string Name { get; set; } = null!;

		public string Description { get; set; } = null!;

		public decimal Price { get; set; } 

		public string? CompanyName { get; set; }

		public string? ImageUrlLink { get; set; }

		public string? BookCoverBackImg { get; set; }

		public string? PaymentLink { get; set; }

		public bool IsSoldOut { get; set; }

		public int QuantitySold { get; set; }
	}
}
