﻿// <auto-generated />
using System;
using CashFlow.DataBase.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace CashFlow.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.7")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("CashFlow.DataBase.Entities.Budget", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<decimal>("Amount")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("CategoryName")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnType("datetime2");

                    b.Property<int>("MoneyId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("CategoryName");

                    b.HasIndex("MoneyId");

                    b.ToTable("Budgets");
                });

            modelBuilder.Entity("CashFlow.DataBase.Entities.Category", b =>
                {
                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Name");

                    b.ToTable("Caterogies");

                    b.HasData(
                        new
                        {
                            Name = "Salud"
                        },
                        new
                        {
                            Name = "Transporte"
                        },
                        new
                        {
                            Name = "Entretenimiento"
                        },
                        new
                        {
                            Name = "Impuestos"
                        },
                        new
                        {
                            Name = "Cosmeticos"
                        });
                });

            modelBuilder.Entity("CashFlow.DataBase.Entities.Expense", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<decimal>("Amount")
                        .HasColumnType("decimal(18,2)");

                    b.Property<int>("BudgetId")
                        .HasColumnType("int");

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.HasIndex("BudgetId");

                    b.ToTable("Expenses");
                });

            modelBuilder.Entity("CashFlow.DataBase.Entities.Money", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<decimal>("Rest")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("Total")
                        .HasColumnType("decimal(18,2)");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("UserId")
                        .IsUnique();

                    b.ToTable("Moneys");
                });

            modelBuilder.Entity("CashFlow.DataBase.Entities.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("CashFlow.DataBase.Entities.Budget", b =>
                {
                    b.HasOne("CashFlow.DataBase.Entities.Category", "Category")
                        .WithMany("budgets")
                        .HasForeignKey("CategoryName")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("CashFlow.DataBase.Entities.Money", "Money")
                        .WithMany("Budgets")
                        .HasForeignKey("MoneyId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Category");

                    b.Navigation("Money");
                });

            modelBuilder.Entity("CashFlow.DataBase.Entities.Expense", b =>
                {
                    b.HasOne("CashFlow.DataBase.Entities.Budget", "Budget")
                        .WithMany("Expenses")
                        .HasForeignKey("BudgetId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Budget");
                });

            modelBuilder.Entity("CashFlow.DataBase.Entities.Money", b =>
                {
                    b.HasOne("CashFlow.DataBase.Entities.User", "User")
                        .WithOne("TotalMoney")
                        .HasForeignKey("CashFlow.DataBase.Entities.Money", "UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("CashFlow.DataBase.Entities.Budget", b =>
                {
                    b.Navigation("Expenses");
                });

            modelBuilder.Entity("CashFlow.DataBase.Entities.Category", b =>
                {
                    b.Navigation("budgets");
                });

            modelBuilder.Entity("CashFlow.DataBase.Entities.Money", b =>
                {
                    b.Navigation("Budgets");
                });

            modelBuilder.Entity("CashFlow.DataBase.Entities.User", b =>
                {
                    b.Navigation("TotalMoney")
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
