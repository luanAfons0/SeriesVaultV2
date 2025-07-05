using Microsoft.AspNetCore.Mvc;
using SeriesVault.DTOs.Account;
using SeriesVault.Models;
using SeriesVault.Requests.Account;
using SeriesVault.Services;
using static System.Int32;

namespace SeriesVault.Controllers
{
    [ApiController]
    [Route("api/")]
    public class AccountController(AccountService accountService) : ControllerBase
    {
        [HttpGet("account/{id}")]
        public ActionResult<Account> GetSeries([FromRoute] string id)
        {
            Account? account = accountService.GetAccountById(Parse(id));

            if (account == null)
                return NotFound();
            
            return Ok(account);
        }

        [HttpPost("account")]
        public async Task<ActionResult<Account>> CreateAccount([FromBody] Account account)
        {
            if (account is null)
                return BadRequest();
            
            await accountService.CreateAccount(account);
            
            return CreatedAtAction(nameof(CreateAccount), new { id = account.id }, account);
        }

        [HttpPost("account/validate-email")]
        public ActionResult<IsEmailValidDTO> UpdateAccount([FromBody] IsEmailValidRequest request)
        {
            if (request is null)
                return BadRequest();
            
            var isEmailValid = accountService.ValidateEmail(request.email);

            return Ok(new IsEmailValidDTO(isEmailValid));
        }
    }
}
