using SeriesVault.Data;
using SeriesVault.Models;
using SeriesVault.Services;

namespace SeriesVault.Repositories;

public class AccountRepository(SeriesVaultV2DBContext seriesVaultDbContext)
{
    public Account? GetAccountById(int id)
    {
        Account? account = seriesVaultDbContext.Accounts.Find(id);
        
        return account is null ? null : account;
    }

    public Account? GetAccountByEmail(string email)
    {
        Account? account = seriesVaultDbContext.Accounts.FirstOrDefault(account => account.email == email);
        
        return account is null ? null : account;
    }

    public async Task CreateAccount(Account account)
    {
        account.password = BCryptService.HashAccountPassword(account.password);
        seriesVaultDbContext.Accounts.Add(account);
        await seriesVaultDbContext.SaveChangesAsync();
    }
}