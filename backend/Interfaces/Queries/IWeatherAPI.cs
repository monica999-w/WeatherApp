using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models.Weather;

namespace Interfaces.Queries
{
    public interface IWeatherAPI
    {
        Task<Weather> GetWeatherDataByCity(string city);
    }
}