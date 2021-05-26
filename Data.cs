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
        private static int currentUserID = 0;
        public static void Init()

        {
            string[] file = System.IO.File.ReadAllText("data.csv").Split('\n');
            foreach (string line in file)
            {
                if (line != "")
                {
                    string[] split = line.Split(',');
                    User user = new User();
                    user.id = Convert.ToInt32(split[0]);
                    currentUserID = user.id;
                    user.firstName = split[1];
                    user.lastName = split[2];
                    user.email = split[3];
                    user.pNumber = split[4];
                    user.date = split[5];
                    user.time = split[6];
                    user.people = split[7].Replace("\r", "");

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
            currentUserID++;
            newUser.id = currentUserID;
            data.Add(newUser);
            WriteToFile();

        }

        public static void Delete(int id)
        {
            User toDelete = null;
            foreach (User user in data)
            {
                if (user.id == id)
                {
                    toDelete = user;
                }

            }
            if (toDelete != null)
            {
                if (id > 1)
                {
                    data.Remove(toDelete);
                }
                else
                {
                    data.Clear();
                }
                WriteToFile();

            }

            WriteToFile();
        }



        private static void WriteToFile()
        {
            StreamWriter writer = new StreamWriter("data.csv");


            foreach (User u in data)
            {
                writer.WriteLine($"{u.id}, {u.firstName}, {u.lastName}, {u.email}, {u.pNumber}, {u.date}, {u.time}, {u.people}");
            }

            writer.Flush();
            writer.Close();
            writer.Dispose();
        }
    }








    ///////////////////////////////////////////////
    public class Data2
    {
        private static List<User2> data2 = new List<User2>();
        private static int currentUserID2 = 0;
        public static void Init2()

        {
            string[] file = System.IO.File.ReadAllText("COVID.csv").Split('\n');
            foreach (string line in file)
            {
                if (line != "")
                {
                    string[] split = line.Split(',');
                    User2 user2 = new User2();
                    user2.id2 = Convert.ToInt32(split[0]);
                    currentUserID2 = user2.id2;
                    user2.firstName2 = split[1];
                    user2.lastName2 = split[2].Replace("\r", "");

                    data2.Add(user2);
                }
            }
        }
        public static List<User2> GetData2()
        {
            return data2;
        }
        public static void PushData2(User2 newUser2)
        {
            currentUserID2++;
            newUser2.id2 = currentUserID2;
            data2.Add(newUser2);
            WriteToFile2();

        }

        public static void Delete2(int id2)
        {
            User2 toDelete = null;
            foreach (User2 user2 in data2)
            {
                if (user2.id2 == id2)
                {
                    toDelete = user2;
                }

            }
            if (toDelete != null)
            {
                if (id2 > 1)
                {
                    data2.Remove(toDelete);
                }
                else
                {
                    data2.Clear();
                }
                WriteToFile2();
            }
            WriteToFile2();
        }
        private static void WriteToFile2()
        {
            StreamWriter writer = new StreamWriter("COVID.csv");


            foreach (User2 u in data2)
            {
                writer.WriteLine($"{u.id2}, {u.firstName2}, {u.lastName2}");
            }

            writer.Flush();
            writer.Close();
            writer.Dispose();
        }
    }
}


