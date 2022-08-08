using DataAccess.Entities;
using Microsoft.EntityFrameworkCore;

namespace DataAccess

{
    public class AuraDeityContext : DbContext
    {
        public AuraDeityContext(DbContextOptions<AuraDeityContext> dbContextObtions) : base(dbContextObtions)
        {

        }
        public DbSet<UserAuthEntity> UserAuths { get; set; }
        public DbSet<WeatherData> Weather { get; set; }


    }
}
