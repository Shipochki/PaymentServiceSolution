namespace PaymentServiceSolution.Core.Common
{
	using System.ComponentModel.DataAnnotations;

	public static class Validation
	{
		public static bool IsValid(object obj)
		{
			var validationContext = new ValidationContext(obj);
			var validationResult = new List<ValidationResult>();

			bool isValid = Validator.TryValidateObject(obj, validationContext, validationResult, true);
			return isValid;
		}
	}
}
