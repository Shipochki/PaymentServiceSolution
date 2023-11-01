using Stripe;

namespace PaymentServiceSolution.Core.Services.Stripe
{
	using PaymentServiceSolution.Core.Data.Entities;
	public static class StripeAppService
	{

		public static string CreateProduct(Product product)
		{
			var createProductOptions = new ProductCreateOptions
			{
				Name = product.Name,
				DefaultPriceData = new ProductDefaultPriceDataOptions
				{
					UnitAmount = (long)(product.Price * 100),
					Currency = "usd",
				},
			};

			var productService = new ProductService();
			string price = productService.Create(createProductOptions).DefaultPriceId;

			var createLinkOptions = new PaymentLinkCreateOptions
			{
				LineItems = new List<PaymentLinkLineItemOptions>
					{
						new PaymentLinkLineItemOptions { Price = price, Quantity = 1 },
					},
				AfterCompletion = new PaymentLinkAfterCompletionOptions
					{
						Type = "redirect",
						Redirect = new PaymentLinkAfterCompletionRedirectOptions
							{
								Url = "https://localhost:42424/success"
							},
					},
				
			};

			var linkService = new PaymentLinkService();
			return linkService.Create(createLinkOptions).Url;
		}
	}
}
