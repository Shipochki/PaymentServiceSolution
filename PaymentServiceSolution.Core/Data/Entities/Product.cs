namespace PaymentServiceSolution.Core.Data.Entities
{
	using System.ComponentModel.DataAnnotations;
	using System.ComponentModel.DataAnnotations.Schema;
	using static PaymentServiceSolution.Core.Common.DataConstraints.ProductConst;

	public class Product
	{
		[Key]
		public int Id { get; set; }

		[Required]
		[MaxLength(MaxLengthName)]
		public string Name { get; set; } = null!;

		[Required]
		public decimal Price { get; set; }

		[Required]
		[MaxLength(MaxLengthDescription)]
		public string Description { get; set; } = null!;

		[Required]
		[ForeignKey(nameof(Company))]
		public int CompanyId { get; set; }
		public Company Company { get; set; } = null!;

		public bool IsDeleted { get; set; } = false;

		public string? ImageUrlLink { get; set; }

		public string? PaymentLink { get; set; }
	}
}
