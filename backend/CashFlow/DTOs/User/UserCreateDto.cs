using System.ComponentModel.DataAnnotations;

namespace CashFlow.DTOs.User
{
    public struct UserCreateDto
    {
        [Required,RegularExpression("^[a-zA-Z0-9]+$", ErrorMessage ="Solo puede contener numeros y letras"),MaxLength(14,ErrorMessage ="Debe tener una longitud de 4 a 14"),MinLength(4, ErrorMessage = "Debe tener una longitud de 4 a 14")]
        public string UserName {  get; set; }

        [Required]
        [EmailAddress(ErrorMessage ="Formato de email no valido")]
        public string Email { get; set; }

        [Required, MaxLength(14, ErrorMessage = "Debe tener una longitud de 4 a 14"),MinLength(4, ErrorMessage = "Debe tener una longitud de 4 a 14")]
        public string Password { get; set; }
    }
}

