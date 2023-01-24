using Microsoft.IdentityModel.Tokens;

namespace Authorizator.Infrastructure
{
    public static class SecretGuard
    {
        public static string getKeyFromFile(string path)
        {
            using (var sr = new StreamReader("./secret.txt"))
            {
                var secret = sr.ReadToEnd();
                if (!secret.IsNullOrEmpty())
                    return secret;
                throw new Exception("Holera jasna, sekret zniknął!");
            }
        }
    }
}
