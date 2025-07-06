namespace SeriesVault.Services;

using static BCrypt.Net.BCrypt;

public class BCryptService
{
    private const int WorkFactor = 12;

    public static string HashAccountPassword(string password)
    {
        return HashPassword(password, WorkFactor);
    }

    public static Boolean ValidatePassword(string password, string hashedPassword)
    {
        return Verify(password, hashedPassword);
    }
}