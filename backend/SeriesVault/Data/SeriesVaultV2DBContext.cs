using Microsoft.EntityFrameworkCore;
using SeriesVault.Models;

namespace SeriesVault.Data;

public class SeriesVaultV2DBContext(DbContextOptions<SeriesVaultV2DBContext> options): DbContext(options)
{
    public DbSet<Account> Accounts { get; set; }
}