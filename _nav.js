export default {
  items: [
    // {
    //   title: true,
    //   name: "นักเรียน"
    // },
    {
      name: "รายงาน",
      url: "/reports",
      icon: "far fa-building",
      img: "report",
      sub: [
        {
          name: "ทั้งหมด",
          url: "/reports" //ทางผ่านไปยังแฟ้ม
        }
      ]
    },
    {
      name: "สถานศึกษา",
      url: "/school",
      icon: "fas fa-users-cog",
      img: "school",
      sub: [
        {
          name: "ทั้งหมด",
          url: "/school"
        },
        {
          name: "สถานรับเลี้ยงเด็ก",
          url: "/school/school"
        },
        {
          name: "โรงเรียนอนุบาล",
          url: "/school/kindergarten"
        }
      ]
    },
    {
      name: "ข้อมูลครู",
      url: "/teachers",
      icon: "fas fa-users-cog",
      img: "teacher",
      sub: [
        {
          name: "ครู",
          url: "/teachers"
        },
        {
          name: "คำขอ",
          url: "/teachers/request"
        }
      ]
    },
    {
      name: "นักเรียน",
      url: "/students",
      icon: "fas fa-users-cog",
      img: "student",
      sub: [
        {
          name: "นักเรียน",
          url: "/students"
        },
        {
          name: "คำขอ",
          url: "/students/request"
        }
      ]
    },
    {
      name: "",
      url: "/settings",
      icon: "fas fa-users-cog",
      img: "setting",
      sub: [
        {
          name: "floating",
          url: "/settings"
        },
        {
          name: "ฉัน",
          url: "/settings/mysetting"
        }
      ]
    },
    {
      name: "",
      url: "#",
      icon: "fas fa-users-cog",
      img: "exit"
    }
  ]
};
