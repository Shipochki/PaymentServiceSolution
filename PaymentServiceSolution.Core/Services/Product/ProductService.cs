﻿namespace PaymentServiceSolution.Core.Services.Product
{
	using Stripe;
	using Microsoft.EntityFrameworkCore;
	using Newtonsoft.Json;
	using PaymentServiceSolution.Core.Data.Entities;
	using PaymentServiceSolution.Core.Services.Product.Models;
	using System.Collections.Generic;
	using static PaymentServiceSolution.Core.Common.Validation;
	using static PaymentServiceSolution.Core.Services.Stripe.StripeAppService;
	using static System.Net.Mime.MediaTypeNames;

	public class ProductService : IProductService
	{
		private readonly PaymentServiceSolutionDbContext _context;

        public ProductService(PaymentServiceSolutionDbContext context)
        {
			_context = context;
        }

        public async Task AddProduct(object addProducFromKeys)
		{
			AddProductJSONModel? model = JsonConvert.DeserializeObject<AddProductJSONModel>(addProducFromKeys.ToString());

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
				BookCoverBackImg = model.BookCoverBackImg,
			};

			string result = CreateProduct(product);

			product.PaymentLink = result;

			await this._context.Products.AddAsync(product);
			await this._context.SaveChangesAsync();
		}

		public async Task Delete(int id)
		{
			Product? product = await this._context.Products.FirstOrDefaultAsync(p => p.Id == id);

			if (product == null)
			{
				return;
			}

			product.IsDeleted = true;

			await this._context.SaveChangesAsync();
		}

		public async Task EditProduct(object editProductFormKeys)
		{
			EditProductJSONModel? model = JsonConvert.DeserializeObject<EditProductJSONModel>(editProductFormKeys.ToString());

			if(model == null || !IsValid(model))
			{
				return;
			}

			Product? product = await this._context.Products.FirstOrDefaultAsync(p => p.Id == model.Id);

			if(product == null)
			{
				return;
			}

			product.Name = model.Name;
			product.Description = model.Description;
			product.Price = model.Price;
			product.ImageUrlLink = model.ImageUrlLink;
			product.BookCoverBackImg = model.BookCoverBackImg;

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
					BookCoverBackImg = p.BookCoverBackImg == null ? "https://actogmbh.com/files/no-product-image.png" : p.BookCoverBackImg,
					PaymentLink = p.PaymentLink,
					IsSoldOut = p.IsSoldOut,
					QuantitySold = p.QuantitySold
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
					ImageUrlLink = p.ImageUrlLink == null ? "https://actogmbh.com/files/no-product-image.png" : p.ImageUrlLink,
					BookCoverBackImg = p.BookCoverBackImg == null ? "https://actogmbh.com/files/no-product-image.png" : p.BookCoverBackImg,
					PaymentLink = p.PaymentLink,
					IsSoldOut = p.IsSoldOut,
					QuantitySold = p.QuantitySold
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
					ImageUrlLink = p.ImageUrlLink == null ? "https://actogmbh.com/files/no-product-image.png" : p.ImageUrlLink,
					BookCoverBackImg = p.BookCoverBackImg == null ? "https://actogmbh.com/files/no-product-image.png" : p.BookCoverBackImg,
					PaymentLink = p.PaymentLink,
					IsSoldOut = p.IsSoldOut,
					QuantitySold = p.QuantitySold
				})
				.ToListAsync();

			return products;
		}

		public async Task<List<ProductModel>> GetTop3BestSellers()
		{
			List<ProductModel> products = await this._context
			.Products
			.Include(p => p.Company)
				.Where(p => p.IsDeleted == false && p.Id == 11 || p.Id == 12 || p.Id == 13)
				.Select(p => new ProductModel()
				{
					Id = p.Id,
					Name = p.Name,
					Price = p.Price,
					CompanyName = p.Company.Name,
					Description = p.Description,
					ImageUrlLink = p.ImageUrlLink == null ? "https://actogmbh.com/files/no-product-image.png" : p.ImageUrlLink,
					BookCoverBackImg = p.BookCoverBackImg == null ? "https://actogmbh.com/files/no-product-image.png" : p.BookCoverBackImg,
					PaymentLink = p.PaymentLink,
					IsSoldOut = p.IsSoldOut,
					QuantitySold = p.QuantitySold
				})
				.OrderByDescending(p => p.QuantitySold)
				.ToListAsync();

			return new List<ProductModel>(products.Take(3));
		}
	}
}
