namespace PaymentServiceSolution.Controllers
{
	using Microsoft.AspNetCore.Http;
	using Microsoft.AspNetCore.Mvc;
	using PaymentServiceSolution.Core.Services.Product;
	using PaymentServiceSolution.Core.Services.Product.Models;

	[Route("api/[controller]")]
	[ApiController]
	public class ProductController : ControllerBase
	{
		private readonly IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpPost]
		[Route("[action]")]
		public async Task<IActionResult> AddProduct([FromBody]object addProductFromKeys)
		{
			await _productService.AddProduct(addProductFromKeys);
			return Ok();
		}

		[HttpGet]
		[Route("[action]/{companyId}")]
		public async Task<IActionResult> GetProductsByCompanyId(int companyId)
		{
			List<ProductModel> products = await this._productService.GetAllProductsByCompanyId(companyId);
			return Ok(products);
		}

		[HttpGet]
		[Route("[action]")]
		public async Task<IActionResult> GetAll()
		{
			List<ProductModel> products = await this._productService.GetAllProducts();
			return Ok(products);
		}

		[HttpGet]
		[Route("[action]/{text}")]
		public async Task<IActionResult> GetProductsByCompany(string text)
		{
			List<ProductModel> products = await this._productService.GetProductsByCompany(text);
			return Ok(products);
		}

		[HttpGet]
		[Route("[action]")]
		public async Task<IActionResult> GetTop3()
		{
			List<ProductModel> products = await _productService.GetTop3BestSellers();
			return Ok(products);
		}
	}
}
