using AutoMapper;
using EducationPlatform.Dto;
using EducationPlatform.Models;

namespace EducationPlatform.Profiles
{
    public class ArticlesProfile : Profile
    {
        public ArticlesProfile()
        {
            CreateMap<Article, ArticleReadDto>()
                .ForMember(dest => dest.ArticleTitle, opt => opt.MapFrom(src => src.Title))
                .ForMember(dest => dest.ArticleContent, opt => opt.MapFrom(src => src.Content));
        }
    }
}
