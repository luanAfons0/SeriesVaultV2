namespace SeriesVault.Models;

public class Account
{
    public int id { get; set; }
    public required string firstName { get; set; }
    public required string lastName { get; set; }
    public required string email { get; set; }
    public required string password { get; set; }
}