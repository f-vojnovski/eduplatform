using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EducationPlatform.Models;

namespace EducationPlatform.Data
{
    public class ArticleRepository : IArticleRepository
    {
        private readonly EducationPlatformContext _context;

        public ArticleRepository(EducationPlatformContext context)
        {
            _context = context;
        }

        public Article GetArticleById(int id)
        {
            return _context.Articles.FirstOrDefault(a => a.Id == id);
        }
    }
}
