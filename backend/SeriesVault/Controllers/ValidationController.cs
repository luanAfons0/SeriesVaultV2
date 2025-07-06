using Microsoft.AspNetCore.Mvc;
using SeriesVault.DTOs.Account;
using SeriesVault.Requests.Account;
using SeriesVault.Services;

namespace SeriesVault.Controllers;

[ApiController]
[Route("api/")]
public class ValidationController(ValidationService validationService): ControllerBase
{
    
    [HttpPost("validate/email")]
    public ActionResult<IsEmailValidDTO> ValidateEmail([FromBody] IsEmailValidRequest request)
    {
        try
        {
            if (request is null) return BadRequest();
            
            Boolean isEmailValid = validationService.ValidateEmail(request.email);

            return Ok(new IsEmailValidDTO(isEmailValid));
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            return StatusCode(500, e.Message);
        }
        
    }
}