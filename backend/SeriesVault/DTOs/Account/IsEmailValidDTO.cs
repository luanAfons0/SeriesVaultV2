namespace SeriesVault.DTOs.Account;

public class IsEmailValidDTO
{
    public Boolean isValid { get; set; }

    public IsEmailValidDTO(Boolean isValid)
    {
        this.isValid = isValid;
    }
}