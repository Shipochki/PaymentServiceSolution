namespace PaymentServiceSolution.Core.Services.Product.Models
{
	using Newtonsoft.Json;
	using System.ComponentModel.DataAnnotations;
	using static PaymentServiceSolution.Core.Common.DataConstraints.ProductConst;

	[JsonObject]
	public class AddProductJSONModel
	{
		[JsonProperty("name")]
		[MinLength(MinLengthName)]
		[MaxLength(MaxLengthName)]
		public string Name { get; set; } = null!;

		[JsonProperty("price")]
		[Range(0, 30000)]
		public decimal Price { get; set; }

		[JsonProperty("description")]
		[MinLength(MinLengthDescription)]
		[MaxLength(MaxLengthDescription)]
		public string Description { get; set; } = null!;

		[JsonProperty("companyId")]
		public int CompanyId { get; set; }

		[JsonProperty("imageurllink")]
		public string? ImageUrlLink { get; set; }
	}
}
