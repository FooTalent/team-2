namespace CashFlow.DataBase.Repository.Interfaces
{
    public interface IBaseRepository<TEntity> where TEntity : class
    {
        Task<IEnumerable<TEntity>> GetAll();

        Task<TEntity> Create(TEntity entity);

        Task CreateMany(ICollection<TEntity> entities);

        Task<TEntity?> GetById(int id);

        Task DeleteById(int id);

        void Update(TEntity entity);
    }

   public interface IBaseRepositoryMapper<TEntity,TCreateDto,TGenericDto> where TEntity : class where TCreateDto : class where TGenericDto : class
    {
        
        Task<TGenericDto> Create(TCreateDto entity);

    }
}
