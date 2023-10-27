﻿namespace PaymentServiceSolution.Core.Services.Product
{
	using Microsoft.EntityFrameworkCore;
	using Newtonsoft.Json;
	using PaymentServiceSolution.Core.Data.Entities;
	using PaymentServiceSolution.Core.Services.Product.Models;
	using System.Collections.Generic;
	using static PaymentServiceSolution.Core.Common.Validation;

	public class ProductService : IProductService
	{
		private readonly PaymentServiceSolutionDbContext _context;

        public ProductService(PaymentServiceSolutionDbContext context)
        {
			_context = context;
        }

        public async Task AddProduct(object addProducFromKeys)
		{
			AddProductJSONModel model = JsonConvert.DeserializeObject<AddProductJSONModel>(addProducFromKeys.ToString());

			if (model == null || !IsValid(model))
			{
				return;
			}

			Product product = new Product()
			{ 
				Name = model.Name,
				Price = model.Price,
				Description = model.Description,
				CompanyId = model.CompanyId,
			};

			await this._context.Products.AddAsync(product);
			await this._context.SaveChangesAsync();
		}

		public async Task<List<ProductModel>> GetAllProductsByCompanyId(int id)
		{
			List<ProductModel> products = await this._context
				.Products
				.Where(p => p.CompanyId == id)
				.Select(p => new ProductModel()
				{
					Id = p.Id,
					Name = p.Name,
					Price = p.Price,
					Description = p.Description,
				})
				.ToListAsync();

			return products;
		}
	}
}