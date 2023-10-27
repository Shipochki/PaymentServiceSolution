namespace PaymentServiceSolution
{
	using Microsoft.EntityFrameworkCore;
	using PaymentServiceSolution.Core;
	using PaymentServiceSolution.Core.Services.Company;
	using PaymentServiceSolution.Core.Services.User;

	public class Program
	{
		public static void Main(string[] args)
		{
			var builder = WebApplication.CreateBuilder(args);

			// Add services to the container.
			var conncetionString = builder.Configuration.GetConnectionString("DefaultConnection");
			builder.Services.AddDbContext<PaymentServiceSolutionDbContext>(options =>
				options.UseSqlServer(conncetionString));

			builder.Services.AddControllersWithViews();
			builder.Services.AddControllers();
			builder.Services.AddEndpointsApiExplorer();

			builder.Services.AddScoped<IUserService, UserService>();
			builder.Services.AddScoped<ICompanyService, CompanyService>();

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

			app.MapControllers();
			app.MapControllerRoute(
				name: "default",
				pattern: "{controller}/{action=Index}/{id?}");

			app.MapFallbackToFile("index.html");

			app.Run();
		}
	}
}