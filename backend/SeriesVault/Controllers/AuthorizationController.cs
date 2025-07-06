using Microsoft.AspNetCore.Mvc;
using SeriesVault.DTOs.Authorization;
using SeriesVault.Models;
using SeriesVault.Requests.Account;
using SeriesVault.Services;

[ApiController]
[Route("api/")]
public class AuthorizationController(AuthorizationService authorizationService, AccountService accountService): ControllerBase
{
    [HttpPost("login")]
    public ActionResult Login(LoginRequest account)
    {
        try
        {
            Account? dbAccount = accountService.GetAccountByEmail(account.email);

            if (dbAccount is null)  return NotFound();
        
            Boolean isPasswordValid = BCryptService.ValidatePassword(account.password, dbAccount.password);

            if (!isPasswordValid) return Unauthorized();
        
            return Ok(new LoginDTO(authorizationService.CreateJwt(dbAccount)));
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            return StatusCode(500, e.Message);
        }
    }
}