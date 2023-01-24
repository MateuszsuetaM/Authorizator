using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Authorizator.Pages
{
    [Authorize]
    public class SecuredPageModel : PageModel
    {
        public void OnGet()
        {
        }
    }
}
