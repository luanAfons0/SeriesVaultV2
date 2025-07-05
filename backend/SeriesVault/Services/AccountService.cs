using SeriesVault.Data;
using SeriesVault.Models;

namespace SeriesVault.Services;

public class AccountService(SeriesVaultV2DBContext seriesVaultDbContext)
{
    public Account? GetAccountById(int id)
    {
        return seriesVaultDbContext.Accounts.Find(id);
    }

    public async Task CreateAccount(Account account)
    {
        seriesVaultDbContext.Accounts.Add(account);
        await seriesVaultDbContext.SaveChangesAsync();
    }
}