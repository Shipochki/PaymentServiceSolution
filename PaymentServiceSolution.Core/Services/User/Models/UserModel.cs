namespace PaymentServiceSolution.Core.Services.User.Models
{
    public class UserModel
    {
        public int Id { get; set; }

        public string FullName { get; set; } = null!;

        public string Email { get; set; } = null!;

        public bool IsCompany { get; set; }
    }
}
