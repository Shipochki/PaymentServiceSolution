namespace PaymentServiceSolution.Core
{
	using Microsoft.EntityFrameworkCore;

	public class PaymentServiceSolutionDbContext : DbContext
	{
        public PaymentServiceSolutionDbContext(DbContextOptions<PaymentServiceSolutionDbContext> options)
            : base(options)
        {
			if (this.Database.IsRelational())
			{
				this.Database.Migrate();
			}
			else
			{
				this.Database.EnsureCreated();
			}
		}

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			base.OnModelCreating(modelBuilder);
		}
	}
}
