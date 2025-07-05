namespace SeriesVault.Services;

using BCrypt.Net;
using static BCrypt.Net.BCrypt;

public class BCryptService
{
    private const int WorkFactor = 12;

    public static string HashAccountPassword(string password)
    {
        return HashPassword(password, WorkFactor);
    }
}