using Microsoft.AspNetCore.Mvc;
using SeriesVault.DTOs;
using SeriesVault.Models;
using SeriesVault.Services;
using static System.Int32;

namespace SeriesVault.Controllers
{
    [ApiController]
    [Route("api/")]
    public class AccountController(
        AccountService accountService,
        ValidationService validationService
        ) : ControllerBase
    {
        [HttpGet("account/{id}")]
        public ActionResult<Account> GetAccount([FromRoute] string id)
        {
            try
            {
                Account? account = accountService.GetAccountById(Parse(id));
                if (account == null)  return NotFound();
                return Ok(account);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return StatusCode(500, e.Message);
            }
        }

        [HttpPost("account")]
        public ActionResult CreateAccount([FromBody] Account account)
        {
            try
            {
                Boolean isEmailValid = validationService.ValidateEmail(account.email);
                if(isEmailValid == false) return BadRequest(new BasicMessageDTO("The email is already in use."));
                
                accountService.CreateAccount(account);
                return Ok(account);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return StatusCode(500, e.Message);
            }
        }
    }
}
