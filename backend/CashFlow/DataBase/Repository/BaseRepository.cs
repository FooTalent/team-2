using AutoMapper;
using CashFlow.DataBase.Context;
using CashFlow.DataBase.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CashFlow.DataBase.Repository
{
    public class BaseRepository<TEntity>(AppDbContext context) : IBaseRepository<TEntity> where TEntity : class
    {

        protected readonly DbSet<TEntity> _dbSet = context.Set<TEntity>();
        protected readonly AppDbContext _context = context;

        public async Task<TEntity> Create(TEntity entity)
        {
            try
            {
                var result = await _dbSet.AddAsync(entity);

                await _context.SaveChangesAsync();

                return result.Entity;
            }
            catch (DbUpdateException dbEx)
            {
                throw new InvalidOperationException("Error creating entity in the database", dbEx);
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException("An unexpected error occurred while creating the entity", ex);
            }
        }

        public async Task CreateMany(ICollection<TEntity> entities)
        {
            foreach(var entity in entities)
            {
                await _dbSet.AddAsync(entity);
            }

            await _context.SaveChangesAsync();
        }

        public async Task DeleteById(int id)
        {
            TEntity? entityToDelete = await _dbSet.FindAsync(id);

            if (entityToDelete == null)
            {
                throw new Exception("Entity to delete not found");
            }

            _dbSet.Remove(entityToDelete);

            await _context.SaveChangesAsync();
        }


        public async Task<IEnumerable<TEntity>> GetAll()
        {
            return await _dbSet.ToListAsync();
        }

        public async Task<TEntity?> GetById(int id)
        {
            return await _dbSet.FindAsync(id);

        }

        public void Update(TEntity entity)
        {
            _dbSet.Attach(entity);
            _context.Entry(entity).State = EntityState.Modified;

        }
    }

    public abstract class BaseRepositoryMapper<TEntity, TCreateDto,TGenericDto>(AppDbContext context, IMapper mapper) 
                         : BaseRepository<TEntity>(context), IBaseRepositoryMapper<TEntity,TCreateDto, TGenericDto> 
                        where TEntity : class 
                        where TCreateDto : class
                        where TGenericDto : class
    {

        public readonly IMapper _mapper = mapper;

        public async Task<TGenericDto> Create(TCreateDto entity)
        {
            try
            {
                var entityToAdd = _mapper.Map<TEntity>(entity);
                var result = await _dbSet.AddAsync(entityToAdd);

                await _context.SaveChangesAsync();

                return _mapper.Map<TGenericDto>(result.Entity);
            }
            catch (DbUpdateException dbEx)
            {
                throw new InvalidOperationException("Error creating entity in the database", dbEx);
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException("An unexpected error occurred while creating the entity", ex);
            }
        }

        public async Task<TGenericDto?> GetByIdMapped(int id)
        {
            TEntity? response = await _dbSet.FindAsync(id);


            return _mapper.Map<TGenericDto>(response);
        }
    }
}
