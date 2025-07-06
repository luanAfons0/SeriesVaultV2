using SeriesVault.Data;
using SeriesVault.Models;

namespace SeriesVault.Services;

public class ValidationService(SeriesVaultV2DBContext seriesVaultDbContext)
{
    
    public Boolean ValidateEmail(String email)
    {
        Account? account = seriesVaultDbContext.Accounts.Where(account => account.email == email).FirstOrDefault();
        return account is null;
    }
}