namespace PaymentServiceSolution.Controllers
{
	using Microsoft.AspNetCore.Http;
	using Microsoft.AspNetCore.Mvc;
	using PaymentServiceSolution.Core.Services.User;
	using PaymentServiceSolution.Core.Services.User.Models;

	[Route("api/[controller]")]
	[ApiController]
	public class UserController : ControllerBase
	{
		private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

		[HttpPost]
		[Route("[action]")]
		public async Task<IActionResult> Login([FromBody]object loginFromKeys)
		{
			UserModel result = await this._userService.Login(loginFromKeys);
			return Ok(result);
		}

		[HttpPost]
		[Route("[action]")]
		public async Task<IActionResult> Register([FromBody]object registerFromKeys)
		{
			UserModel result = await this._userService.Register(registerFromKeys);
			return Ok(result);
		}
    }
}
