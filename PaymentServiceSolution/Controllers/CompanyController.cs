namespace PaymentServiceSolution.Controllers
{
	using Microsoft.AspNetCore.Http;
	using Microsoft.AspNetCore.Mvc;
	using PaymentServiceSolution.Core.Services.Company;
	using PaymentServiceSolution.Core.Services.Company.Models;


	[Route("api/[controller]")]
	[ApiController]
	public class CompanyController : ControllerBase
	{
		private readonly ICompanyService _companyService;

		public CompanyController(ICompanyService userService)
		{
			_companyService = userService;
		}

		[HttpPost]
		[Route("[action]")]
		public async Task<IActionResult> Login([FromBody] object loginFromKeys)
		{
			CompanyModel result = await this._companyService.Login(loginFromKeys);
			return Ok(result);
		}

		[HttpPost]
		[Route("[action]")]
		public async Task<IActionResult> Register([FromBody] object registerFromKeys)
		{
			CompanyModel result = await this._companyService.Register(registerFromKeys);
			return Ok(result);
		}
	}
}
