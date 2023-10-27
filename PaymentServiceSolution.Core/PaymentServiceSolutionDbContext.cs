namespace PaymentServiceSolution.Core
{
	using Microsoft.EntityFrameworkCore;
	using PaymentServiceSolution.Core.Data.Entities;

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

		public DbSet<Company> Companies { get; set; }

		public DbSet<Product> Products { get; set; }

		public DbSet<User> Users { get; set; }

		protected override void OnModelCreating(ModelBuilder builder)
		{
			builder
				.Entity<Product>()
				.HasOne(p => p.Company)
				.WithMany(c => c.Products)
				.OnDelete(DeleteBehavior.Restrict);

			base.OnModelCreating(builder);
		}
	}
}
