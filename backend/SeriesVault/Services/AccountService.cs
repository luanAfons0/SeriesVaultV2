using SeriesVault.Data;
using SeriesVault.Models;

namespace SeriesVault.Services;

public class AccountService(SeriesVaultV2DBContext seriesVaultDbContext)
{
    public Account? GetAccountById(int id)
    {
        return seriesVaultDbContext.Accounts.Find(id);
    }

    public Account GetAccountByEmail(string email)
    {
        Account? account = seriesVaultDbContext.Accounts.Where(account => account.email == email).FirstOrDefault();
        return account;
    }

    public async Task CreateAccount(Account account)
    {
        account.password = BCryptService.HashAccountPassword(account.password);
        
        seriesVaultDbContext.Accounts.Add(account);
        await seriesVaultDbContext.SaveChangesAsync();
    }

    public Boolean ValidateEmail(String email)
    {
        Account? account = seriesVaultDbContext.Accounts.Where(account => account.email == email).FirstOrDefault();

        if (account is null) return true;

        return false;
    }
}