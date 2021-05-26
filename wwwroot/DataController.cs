using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ConnectUs;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Example.Controllers
{
    [Route("api/data")]
    [ApiController]
    public class DataController : ControllerBase
    {
        // GET: api/<DataController>
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return Data.GetData().ToArray();
        }


        // POST api/<DataController>
        [HttpPost]
        public IActionResult Post([FromBody] User value)
        {
            if (value.firstName == "" || value.lastName == "" || value.pNumber=="" || value.email =="" || value.date =="" || value.time =="" || value.people=="")
            { 
                if(Int64.Parse(value.people) > 6)
                {
                    return BadRequest();
                }
            }
            Data.PushData(value);
            return Ok();

        }

        //data.Init();

        // DELETE api/<DataController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Data.Delete(id);
            //return id;
        }
    }
}
