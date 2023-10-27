namespace PaymentServiceSolution.Core.Services.Company.Models
{
	using Newtonsoft.Json;
	using System.ComponentModel.DataAnnotations;

	[JsonObject]
	public class LoginCompanyJSONModel
	{
		[JsonProperty("email")]
		[Required]
		public string Email { get; set; } = null!;


		[JsonProperty("password")]
		[Required]
		public string Password { get; set; } = null!;
	}
}
