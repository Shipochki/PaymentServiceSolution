using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PaymentServiceSolution.Core.Services.Company;

namespace PaymentServiceSolution.Controllers
{
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
			return Ok(await this._companyService.Login(loginFromKeys));
		}

		[HttpPost]
		[Route("[action]")]
		public async Task<IActionResult> Register([FromBody] object registerFromKeys)
		{
			return Ok(await this._companyService.Register(registerFromKeys));
		}
	}
}
