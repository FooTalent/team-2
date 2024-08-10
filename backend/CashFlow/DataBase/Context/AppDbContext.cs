using CashFlow.DataBase.Entities;
using Microsoft.EntityFrameworkCore;

namespace CashFlow.DataBase.Context
{
    public class AppDbContext:DbContext
    {

        public AppDbContext(DbContextOptions options):base(options) { }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<UserEntity>()
              .HasIndex(e => e.Email)
              .IsUnique();


            modelBuilder.Entity<BudgetEntity>()
                .HasOne(b => b.Category)
                .WithMany(c => c.budgets)
                .HasForeignKey(b => b.CategoryName)
                .HasPrincipalKey(c => c.Name); 
            
            modelBuilder.Entity<ExpenseEntity>()
                .HasOne(b => b.Category)
                .WithMany(c => c.expenses)
                .HasForeignKey(b => b.CategoryName)
                .HasPrincipalKey(c => c.Name);

            modelBuilder.Entity<CategoryEntiy>().HasData(
                new CategoryEntiy { Name = "Comida y Bebida" },
                new CategoryEntiy { Name = "Compras" },
                new CategoryEntiy { Name = "Vivienda" },
                new CategoryEntiy { Name = "Transporte" },
                new CategoryEntiy { Name = "Vehiculos" },
                new CategoryEntiy { Name = "Vida y entretenimiento" },
                new CategoryEntiy { Name = "Comunicaciones" },
                new CategoryEntiy { Name = "Gastos financieros" },
                new CategoryEntiy { Name = "Inversiones" },
                new CategoryEntiy { Name = "Trabajo" },
                new CategoryEntiy { Name = "Otros" }
                );

            modelBuilder.Entity<MoneyEntity>()
                .HasIndex(u => u.UserId)
                .IsUnique();
        }


        public DbSet<UserEntity> Users => Set<UserEntity>();

        public DbSet<MoneyEntity> Moneys => Set<MoneyEntity>();

        public DbSet<BudgetEntity> Budgets => Set<BudgetEntity>();

        public DbSet<ExpenseEntity> Expenses => Set<ExpenseEntity>();

        public DbSet<CategoryEntiy> Caterogies => Set<CategoryEntiy>();
    }
}
