namespace PaymentServiceSolution.Core.Services.User
{
    using PaymentServiceSolution.Core.Services.User.Models;

    public interface IUserService
	{
		Task<UserModel> Login(object loginFormKeys);

		Task<UserModel> Register(object RegisterFormKeys);
	}
}
