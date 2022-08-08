using DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Entities
{
    public class WeatherData : BaseModel
    {
        public string City { get; set; }
        public string Country { get; set; }
        public string Description { get; set; }
        public float Temperature { get; set; }
        public DateTime? QuerydateTime { get; set; }

        [ForeignKey("UserAuthEntitID")]
        public UserAuthEntity UserAuthEntity { get; set; }  
        

    }
}
