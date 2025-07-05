using Microsoft.AspNetCore.Mvc;

namespace SeriesVault.Controllers
{
    [ApiController]
    [Route("api/")]
    public class AccountController() : ControllerBase
    {
        [HttpGet("account")]
        public ActionResult GetSeries()
        {
            return Ok();
        }
    }
}
