﻿using System;
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
        public IEnumerable<ConnectUs.User> Get()
        {
            return ConnectUs.Data.GetData().ToArray();
        }


        // POST api/<DataController>
        [HttpPost]
        public IActionResult Post([FromBody] User value)
        {
            if (value.firstName == "" || value.lastName == "")
            { 
                return BadRequest(); 
            }
            Data.PushData(value);
            return Ok();

        }

        //data.Init();

        // DELETE api/<DataController>/5
        /*[HttpDelete("{id}")]
        public void Delete(int id)
        {
        }*/
    }
}
