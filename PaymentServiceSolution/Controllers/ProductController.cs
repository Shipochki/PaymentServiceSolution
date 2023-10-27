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
	}
}
