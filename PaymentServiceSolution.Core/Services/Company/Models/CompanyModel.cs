namespace PaymentServiceSolution.Core.Services.Company.Models
{
	public class CompanyModel
	{
		public int Id { get; set; }

		public string Name { get; set; } = null!;

		public string Email { get; set; } = null!;

		public bool IsCompany { get; set; }
	}
}
