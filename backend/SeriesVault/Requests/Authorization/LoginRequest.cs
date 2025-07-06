namespace SeriesVault.Requests.Account;

public class LoginRequest
{
    public required string email { get; set; }
    public required string password { get; set; }
}