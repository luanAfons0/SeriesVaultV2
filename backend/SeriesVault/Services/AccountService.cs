using SeriesVault.Data;
using SeriesVault.Models;
using SeriesVault.Repositories;

namespace SeriesVault.Services;

public class AccountService(AccountRepository accountRepository)
{
    public Account? GetAccountById(int id)
    {
        return accountRepository.GetAccountById(id);
    }

    public Account? GetAccountByEmail(string email)
    {
        return accountRepository.GetAccountByEmail(email);
    }

    public void CreateAccount(Account account)
    {
        _ = accountRepository.CreateAccount(account);
    }
}