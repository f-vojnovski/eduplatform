using System;
using AutoMapper;
using EducationPlatform.Data;
using EducationPlatform.Dto;
using EducationPlatform.Models;
using Microsoft.AspNetCore.Mvc;

namespace EducationPlatform.Controllers
{
    [Route("api/articles")]
    [ApiController]
    public class ArticlesController : ControllerBase
    {
        private readonly IArticleRepository _repository;
        private readonly IMapper _mapper;

        public ArticlesController(IArticleRepository repository, IMapper mapper)
        {
            this._repository = repository;
            this._mapper = mapper;
        }

        [HttpGet("{id:int}")]
        public ActionResult<ArticleReadDto> GetArticleById(int id)
        {
            var article = _repository.GetArticleById(id);

            if (article == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<ArticleReadDto>(article));
        }

    }
}