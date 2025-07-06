using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.JsonWebTokens;
using Microsoft.IdentityModel.Tokens;
using SeriesVault.Models;

namespace SeriesVault.Services;

public class AuthorizationService(IConfiguration config)
{
    public string CreateJwt(Account account )
    {
        string secretKey = config["JWT:SecretKey"];
        var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));
        
        var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity([
                new Claim(JwtRegisteredClaimNames.Sub, account.id.ToString()),
                new Claim(JwtRegisteredClaimNames.Email, account.email),
            ]),
            Expires = DateTime.Now.AddHours(config.GetValue<int>("JWT:ExpiresInHours")),
            SigningCredentials = credentials,
            Issuer = config["JWT:Issuer"],
            Audience = config["JWT:Audience"],
        };
        
        var handler = new JsonWebTokenHandler();
        
        var token = handler.CreateToken(tokenDescriptor);
        
        return token;
    }
}