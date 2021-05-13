using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace ConnectUs
{
    public class Data
    {
        private static List<User> data = new List<User>();
        public static void Init()
        
        {
            string[] file = System.IO.File.ReadAllText("data.csv").Split('\n');
            foreach(string line in file)
            {
                if (line != "")
                {
                    string[] split = line.Split(',');
                    User user = new User();
                    user.firstName = split[0];
                    user.lastName = split[1].Replace("\r", "");

                    data.Add(user);
                }
            }
        }
        public static List<User> GetData()
        {
            return data;
        }

        public static void PushData(User newUser)
        {
            data.Add(newUser);
            StreamWriter writer = new StreamWriter("data.csv");


            foreach (User u in data)
            {
                writer.WriteLine($"{u.firstName}, {u.lastName}");
            }

            writer.Flush();
            writer.Close();
            writer.Dispose();
        }
        
    }
}
