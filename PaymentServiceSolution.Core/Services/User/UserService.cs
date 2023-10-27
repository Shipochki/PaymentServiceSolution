namespace PaymentServiceSolution.Core.Services.User
{
	using Microsoft.EntityFrameworkCore;
	using Newtonsoft.Json;
	using PaymentServiceSolution.Core.Data.Entities;
	using PaymentServiceSolution.Core.Services.User.Models;
	using static PaymentServiceSolution.Core.Common.Validation;

	public class UserService : IUserService
	{
		private readonly PaymentServiceSolutionDbContext _context;

        public UserService(PaymentServiceSolutionDbContext context)
        {
            _context = context;
        }

        public async Task<UserModel> Login(object loginFormKeys)
		{
			LoginUserJSONModel model = JsonConvert.DeserializeObject<LoginUserJSONModel>(loginFormKeys.ToString());

			if (model == null || !IsValid(model))
			{
				return null;
			}

			User? user = await this._context
				.Users
				.FirstOrDefaultAsync(u => u.Email == model.Email);

			if (user == null)
			{
				return null;
			}

			UserModel result = new UserModel()
			{
				Id = user.Id,
				FullName = $"{user.FirstName} {user.LastName}",
				Email = user.Email,
				IsCompany = false
			};

			return result;
		}

		public async Task<UserModel> Register(object registerFormKeys)
		{
			RegisterUserJSONModel model = JsonConvert.DeserializeObject<RegisterUserJSONModel>(registerFormKeys.ToString());

			if (model == null || !IsValid(model))
			{
				return null;
			}

			User? user = await this._context
				.Users
				.FirstOrDefaultAsync(u => u.Email == model.Email);

			if (user != null)
			{
				return null;
			}

			User newUser = new User()
			{
				FirstName = model.FirstName,
				LastName = model.LastName,
				Email = model.Email,
				Password = model.Password,
				IsDeleted = false,
			};

			await this._context.AddAsync(newUser);
			await this._context.SaveChangesAsync();

			UserModel result = new UserModel()
			{
				Id = newUser.Id,
				FullName = $"{newUser.FirstName} {newUser.LastName}",
				Email = newUser.Email,
				IsCompany = false
			};

			return result;
		}
	}
}
