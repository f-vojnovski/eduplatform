using EducationPlatform.Models;
using Microsoft.EntityFrameworkCore;

namespace EducationPlatform.Data
{
    public class EducationPlatformContext : DbContext
    {
        public EducationPlatformContext(DbContextOptions<EducationPlatformContext> opt) : base(opt)
        {

        }

        public DbSet<Article> Articles { get; set; }
    }
}
