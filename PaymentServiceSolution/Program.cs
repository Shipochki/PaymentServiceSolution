namespace PaymentServiceSolution
{
	using Microsoft.EntityFrameworkCore;
	using PaymentServiceSolution.Core;
	using PaymentServiceSolution.Core.Models;
	using PaymentServiceSolution.Core.Services.Company;
	using PaymentServiceSolution.Core.Services.Product;
	using PaymentServiceSolution.Core.Services.Stripe;
	using PaymentServiceSolution.Core.Services.User;
	using Stripe;
	using System.Configuration;

	public class Program
	{
		public static void Main(string[] args)
		{
			var builder = WebApplication.CreateBuilder(args);

			// Add services to the container.
			var conncetionString = builder.Configuration.GetConnectionString("DefaultConnection");
			builder.Services.AddDbContext<PaymentServiceSolutionDbContext>(options =>
				options.UseSqlServer(conncetionString));

			StripeConfiguration.ApiKey = builder.Configuration["Stripe:SecretKey"];


			builder.Services.AddRouting(options => options.LowercaseUrls = true);
			builder.Services.AddControllersWithViews();
			builder.Services.AddControllers();
			builder.Services.AddEndpointsApiExplorer();

			IServiceCollection services = builder.Services;

			services
				.AddScoped<CustomerService>()
				.AddScoped<ChargeService>()
				.AddScoped<TokenService>()
				.AddScoped<IStripeAppService, StripeAppService>();



			builder.Services.AddScoped<IUserService, UserService>();
			builder.Services.AddScoped<ICompanyService, CompanyService>();
			builder.Services.AddScoped<IProductService, Core.Services.Product.ProductService>();

			var app = builder.Build();

			// Configure the HTTP request pipeline.
			if (!app.Environment.IsDevelopment())
			{
				// The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
				app.UseHsts();
			}

			app.UseHttpsRedirection();
			app.UseStaticFiles();
			app.UseDefaultFiles();
			app.UseRouting();
			app.UseEndpoints(endpoints => endpoints.MapControllers());

			app.MapControllers();
			app.MapControllerRoute(
				name: "default",
				pattern: "{controller}/{action=Index}/{id?}");

			app.MapFallbackToFile("index.html");

			app.Run();
		}
	}
}