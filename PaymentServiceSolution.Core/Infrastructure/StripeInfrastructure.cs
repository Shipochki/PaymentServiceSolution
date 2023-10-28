using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using PaymentServiceSolution.Core.Services.Stripe;
using Stripe;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PaymentServiceSolution.Core.Infrastructure
{
	public static class StripeInfrastructure
	{
		public static void AddStripeInfrastructure(this IServiceCollection services, IConfiguration configuration)
		{
		}
	}
}
