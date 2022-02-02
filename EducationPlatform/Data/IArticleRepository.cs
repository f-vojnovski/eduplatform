using System;
using EducationPlatform.Models;

namespace EducationPlatform.Data
{
    public interface IArticleRepository
    {
        Article GetArticleById(int id);
    }
}
