namespace PaymentServiceSolution.Core.Common
{
	public static class DataConstraints
	{
		public static class UserConst
		{
			public const int MinLengthName = 3;
			public const int MaxLengthName = 20;

			public const int MinLengthPassword = 8;
			public const int MaxLengthPassword = 16;
		}

		public static class CompanyConst
		{
			public const int MinLengthName = 3;
			public const int MaxLengthName = 50;

			public const int MinLengthPassword = 8;
			public const int MaxLengthPassword = 16;
		}

		public static class ProductConst 
		{
			public const int MinLengthName = 3;
			public const int MaxLengthName = 50;

			public const int MinLengthDescription = 10;
			public const int MaxLengthDescription = 100;
		}
	}
}
