namespace SeriesVault.DTOs.Authorization;

public class LoginDTO
{
    public String jwtToken { get; set; }

    public LoginDTO(String jwtToken)
    {
        this.jwtToken = jwtToken;
    }
}