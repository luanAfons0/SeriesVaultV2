using Microsoft.EntityFrameworkCore;
using Scalar.AspNetCore;
using SeriesVault.Data;
using SeriesVault.Repositories;
using SeriesVault.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();
builder.Services.AddScoped<AccountService, AccountService>();
builder.Services.AddScoped<AuthorizationService, AuthorizationService>();
builder.Services.AddScoped<AccountRepository, AccountRepository>();
builder.Services.AddScoped<ValidationService, ValidationService>();

// Configure the Data Base connection and implements the DB service
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
if (connectionString != null)
    builder.Services.AddDbContext<SeriesVaultV2DBContext>
        (options => options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

var app = builder.Build();

// Cors configuration
app.UseCors(builder => builder
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader());

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapScalarApiReference();
    app.MapOpenApi();
} 

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
