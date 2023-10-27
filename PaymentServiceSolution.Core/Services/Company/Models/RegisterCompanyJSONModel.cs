namespace PaymentServiceSolution.Core.Services.Company.Models
{
	using Newtonsoft.Json;
	using System.ComponentModel.DataAnnotations;
	using static PaymentServiceSolution.Core.Common.DataConstraints.CompanyConst;

	[JsonObject]
	public class RegisterCompanyJSONModel
	{
		[JsonProperty("name")]
		[MinLength(MinLengthName)]
		[MaxLength(MaxLengthName)]
		public string Name { get; set; } = null!;

		[JsonProperty("email")]
		[EmailAddress]
		public string Email { get; set; } = null!;

		[JsonProperty("password")]
		[MinLength(MinLengthPassword)]
		[MaxLength(MaxLengthPassword)]
		public string Password { get; set; } = null!;
	}
}
