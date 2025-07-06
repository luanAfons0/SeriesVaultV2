namespace SeriesVault.DTOs;

public class BasicMessageDTO
{
    public string Message { get; set; }

    public BasicMessageDTO(string message)
    {
        this.Message = message;
    }
}