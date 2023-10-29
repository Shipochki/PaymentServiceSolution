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
				ImageUrlLink = model.ImageUrlLink,
			};

			await this._context.Products.AddAsync(product);
			await this._context.SaveChangesAsync();
		}

		public async Task<List<ProductModel>> GetAllProducts()
		{
			List<ProductModel> products = await this._context
				.Products
				.Include(p => p.Company)
				.Where(p => p.IsDeleted == false)
				.Select(p => new ProductModel()
				{
					Id = p.Id,
					Name = p.Name,
					Price = p.Price,
					CompanyName = p.Company.Name,
					Description = p.Description,
					ImageUrlLink = p.ImageUrlLink == null ? "https://actogmbh.com/files/no-product-image.png" : p.ImageUrlLink,
				})
				.ToListAsync();

			return products;
		}

		public async Task<List<ProductModel>> GetAllProductsByCompanyId(int id)
		{
			List<ProductModel> products = await this._context
				.Products
				.Include(p => p.Company)
				.Where(p => p.CompanyId == id && p.IsDeleted == false)
				.Select(p => new ProductModel()
				{
					Id = p.Id,
					Name = p.Name,
					Price = p.Price,
					CompanyName = p.Company.Name,
					Description = p.Description,
					ImageUrlLink = p.ImageUrlLink == null ? "https://actogmbh.com/files/no-product-image.png" : p.ImageUrlLink 
				})
				.ToListAsync();

			return products;
		}

		public async Task<List<ProductModel>> GetProductsByCompany(string text)
		{
			List<ProductModel> products = await this._context
				.Products
				.Include(p => p.Company)
				.Where(p => p.Company.Name.Contains(text) && p.IsDeleted == false)
				.Select(p => new ProductModel()
				{
					Id = p.Id,
					Name = p.Name,
					Price = p.Price,
					CompanyName = p.Company.Name,
					Description = p.Description,
					ImageUrlLink = p.ImageUrlLink == null ? "https://actogmbh.com/files/no-product-image.png" : p.ImageUrlLink
				})
				.ToListAsync();

			return products;
		}
	}
}
