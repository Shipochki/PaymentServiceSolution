namespace PaymentServiceSolution.Core.Common
{
	public static class TokenGenerator
	{
		private static Random random = new Random();

		public static string RandomToken(int length)
		{
			const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
			return new string(Enumerable.Repeat(chars, length)
				.Select(s => s[random.Next(s.Length)]).ToArray());
		}
	}
}
