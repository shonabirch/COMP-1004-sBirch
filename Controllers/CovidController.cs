
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ConnectUs;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace COMP_1004.Controllers
{
    [Route("api/covid")]
    [ApiController]
    public class CovidController : ControllerBase
    {
        // GET: api/<CovidController>
        [HttpGet]
        public IEnumerable<User2> Get()
        {
            return Data2.GetData2().ToArray();
        }

        // POST api/<CovidController>
        [HttpPost]
        public IActionResult Post([FromBody] User2 value2)
        {
            if (value2.firstName2 == "" || value2.lastName2 == "" )
            {
                return BadRequest();
            }
            Data2.PushData2(value2);
            return Ok();

        }


        [HttpDelete("{id2}")]
        public void Delete2(int id2)
        {
            Data2.Delete2(id2);
            //return id;
        }
    }
}
