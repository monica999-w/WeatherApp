using Models;

namespace Interfaces.Queries
{

    public interface IAuthenticationQuery
    {

        Task<string> LoginIfUserExistAsync(LoginModel logicModel);
    }
}
