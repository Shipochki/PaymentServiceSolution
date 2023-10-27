namespace PaymentServiceSolution.Core.Services.Company
{
	using PaymentServiceSolution.Core.Services.Company.Models;

	public interface ICompanyService
	{
		Task<CompanyModel> Login(object loginFormKeys);

		Task<CompanyModel> Register(object RegisterFormKeys);
	}
}
