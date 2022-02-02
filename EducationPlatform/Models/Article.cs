using System;
using System.ComponentModel.DataAnnotations;

namespace EducationPlatform.Models
{
    public class Article
    {
        [Key]
        [Required]
        public int Id { get; set; }
        [Required]
        [MaxLength(300)]
        public String Title { get; set; }
        public String Content { get; set; }
    }
}
