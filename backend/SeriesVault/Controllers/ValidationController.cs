using Microsoft.AspNetCore.Mvc;
using SeriesVault.DTOs.Account;
using SeriesVault.Requests.Account;
using SeriesVault.Services;

namespace SeriesVault.Controllers;

[ApiController]
[Route("api/")]
public class ValidationController(AccountService accountService): ControllerBase
{
    
    [HttpPost("validate/email")]
    public ActionResult<IsEmailValidDTO> UpdateAccount([FromBody] IsEmailValidRequest request)
    {
        if (request is null)
            return BadRequest();
            
        var isEmailValid = accountService.ValidateEmail(request.email);

        return Ok(new IsEmailValidDTO(isEmailValid));
    }
}