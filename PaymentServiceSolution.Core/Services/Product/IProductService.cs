﻿namespace PaymentServiceSolution.Core.Services.Product
{
	using PaymentServiceSolution.Core.Services.Product.Models;

	public interface IProductService
	{
		public Task AddProduct(object addProducFromKeys);

		public Task<List<ProductModel>> GetAllProductsByCompanyId(int id);
	}
}