namespace PaymentServiceSolution.Core.Services.Company
{
	using Newtonsoft.Json;
	using PaymentServiceSolution.Core.Services.Company.Models;
	using static PaymentServiceSolution.Core.Common.Validation;
	using static PaymentServiceSolution.Core.Common.TokenGenerator;
	using PaymentServiceSolution.Core.Data.Entities;
	using Microsoft.EntityFrameworkCore;

	public class CompanyService : ICompanyService
	{
		private readonly PaymentServiceSolutionDbContext _context;

        public CompanyService(PaymentServiceSolutionDbContext context)
        {
            _context = context;
        }

        public async Task<CompanyModel> Login(object loginFormKeys)
		{
			LoginCompanyJSONModel model = JsonConvert.DeserializeObject<LoginCompanyJSONModel>(loginFormKeys.ToString());

			if (model == null || !IsValid(model))
			{
				return null;
			}

			Company? company = await this._context
				.Companies
				.FirstOrDefaultAsync(c => c.Email == model.Email);

			if (company == null)
			{
				return null;
			}

			CompanyModel result = new CompanyModel()
			{
				Id = company.Id,
				Name = company.Name,
				IsCompany = true,
			};

			return result;
		}

		public async Task<CompanyModel> Register(object RegisterFormKeys)
		{
			RegisterCompanyJSONModel model = JsonConvert.DeserializeObject<RegisterCompanyJSONModel>(RegisterFormKeys.ToString());

			if(model == null || !IsValid(model))
			{
				return null;
			}

			Company? company = await this._context
				.Companies
				.FirstOrDefaultAsync(c => c.Email == model.Email);

			if (company != null)
			{
				return null;
			}

			Company newCompany = new Company()
			{
				Name = model.Name,
				Email = model.Email,
				Password = model.Password
			};

			await this._context.Companies.AddAsync(newCompany);
			await this._context.SaveChangesAsync();

			CompanyModel result = new CompanyModel()
			{
				Id = newCompany.Id,
				Name = newCompany.Name,
				Email = newCompany.Email,
				IsCompany=  true
			};

			return result;
		}
	}
}
