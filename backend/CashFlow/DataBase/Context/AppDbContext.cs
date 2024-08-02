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

            modelBuilder.Entity<User>()
              .HasIndex(e => e.Email)
              .IsUnique();


            modelBuilder.Entity<Budget>()
                .HasOne(b => b.Category)
                .WithMany(c => c.budgets)
                .HasForeignKey(b => b.CategoryName)
                .HasPrincipalKey(c => c.Name);

            modelBuilder.Entity<Category>().HasData(
                new Category { Name = "Comida y Bebida" },
                new Category { Name = "Compras" },
                new Category { Name = "Vivienda" },
                new Category { Name = "Transporte" },
                new Category { Name = "Vehiculos" },
                new Category { Name = "Vida y entretenimiento" },
                new Category { Name = "Comunicaciones" },
                new Category { Name = "Gastos financieros" },
                new Category { Name = "Inversiones" },
                new Category { Name = "Trabajo" },
                new Category { Name = "Otros" }
                );

            modelBuilder.Entity<Money>()
                .HasIndex(u => u.UserId)
                .IsUnique();
        }


        public DbSet<User> Users => Set<User>();

        public DbSet<Money> Moneys => Set<Money>();

        public DbSet<Budget> Budgets => Set<Budget>();

        public DbSet<Expense> Expenses => Set<Expense>();

        public DbSet<Category> Caterogies => Set<Category>();
    }
}
