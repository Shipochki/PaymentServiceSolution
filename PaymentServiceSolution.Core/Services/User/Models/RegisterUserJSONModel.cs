namespace PaymentServiceSolution.Core.Services.User.Models
{
	using Newtonsoft.Json;
	using System.ComponentModel.DataAnnotations;
	using static PaymentServiceSolution.Core.Common.DataConstraints.UserConst;

	[JsonObject]
	public class RegisterUserJSONModel
	{
		[JsonProperty("firstname")]
		[MinLength(MinLengthName)]
		[MaxLength(MaxLengthName)]
		public string FirstName { get; set; } = null!;

		[JsonProperty("lastname")]
		[MinLength(MinLengthName)]
		[MaxLength(MaxLengthName)]
		public string LastName { get; set; } = null!;

		[JsonProperty("email")]
		[EmailAddress]
		public string Email { get; set; } = null!;

		[JsonProperty("password")]
		[MinLength(MinLengthPassword)]
		[MaxLength(MaxLengthPassword)]
		public string Password { get; set; } = null!;
	}
}
