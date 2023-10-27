namespace PaymentServiceSolution.Core.Data.Entities
{
	using System.ComponentModel.DataAnnotations;
	using static PaymentServiceSolution.Core.Common.DataConstraints.UserConst;

	public class User
	{
		[Key]
		public int Id { get; set; }

		[Required]
		[MaxLength(MaxLengthName)]
		public string FirstName { get; set; } = null!;

		[Required]
		[MaxLength(MaxLengthName)]
		public string LastName { get; set; } = null!;

		[Required]
		public string Email { get; set; } = null!;

		[Required]
		[MaxLength(MaxLengthPassword)]
		public string Password { get; set; } = null!;

		public bool IsDeleted { get; set; } = false;
	}
}
