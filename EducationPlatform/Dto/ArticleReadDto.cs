using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationPlatform.Dto
{
    public class ArticleReadDto
    {
        public int Id { get; set; }
        public String ArticleTitle { get; set; }

        public String ArticleContent{ get; set; }
    }
}
