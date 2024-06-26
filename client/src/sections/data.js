const columns = [
  {name: "RANK", uid: "rank", sortable: true},
  {name: "DEVELOPER", uid: "developer"},
  {name: "STREAK", uid: "streak", sortable: true},
  {name: "CONTRIBUTIONS", uid: "contributions", sortable: true},
  {name: "ROLE", uid: "role", sortable: true},
  {name: "STATUS", uid: "status"},
];

const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Paused", uid: "paused"},
];

const users = [
  {
    rank: 1,
    developer: "Edmond Akwasi",
    role: "CEO",
    team: "Management",
    status: "active",
    streak: "29",
    contributions: "23417",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
  {
    rank: 2,
    developer: "Zoey Lang",
    role: "Tech Lead",
    team: "Development",
    status: "paused",
    streak: "25",
    contributions: "11107",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
  },
  {
    rank: 3,
    developer: "Jane Fisher",
    role: "Sr. Dev",
    team: "Development",
    status: "active",
    streak: "22",
    contributions: "300",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
  },
  {
    rank: 4,
    developer: "Richard Ofori",
    role: "C.M.",
    team: "Marketing",
    status: "Active",
    streak: "28",
    contributions: "578",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
  },
  {
    rank: 5,
    developer: "Kristen Copper",
    role: "S. Manager",
    team: "Sales",
    status: "active",
    streak: "24",
    contributions: "534",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
  },
  {
    rank: 6,
    developer: "Brian Kim",
    role: "P. Manager",
    team: "Management",
    streak: "29",
    contributions: "123",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "brian.kim@example.com",
    status: "Active",
  },
  {
    rank: 7,
    developer: "Michael Hunt",
    role: "Designer",
    team: "Design",
    status: "paused",
    streak: "27",
    contributions: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29027007d",
    email: "michael.hunt@example.com",
  },
  {
    rank: 8,
    developer: "Samantha Brooks",
    role: "HR Manager",
    team: "HR",
    status: "active",
    streak: "31",
    contributions: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e27027008d",
    email: "samantha.brooks@example.com",
  },
  {
    rank: 9,
    developer: "Frank Harrison",
    role: "F. Manager",
    team: "Finance",
    status: "Active",
    streak: "33",
    avatar: "https://i.pravatar.cc/150?img=4",
    email: "frank.harrison@example.com",
  },
  {
    rank: 10,
    developer: "Emma Adams",
    role: "Ops Manager",
    team: "Operations",
    status: "active",
    streak: "35",
    contributions: "29",
    avatar: "https://i.pravatar.cc/150?img=5",
    email: "emma.adams@example.com",
  },
  {
    rank: 11,
    developer: "Brandon Stevens",
    role: "Jr. Dev",
    team: "Development",
    status: "active",
    streak: "22",
    contributions: "29",
    avatar: "https://i.pravatar.cc/150?img=8",
    email: "brandon.stevens@example.com",
  },
  {
    rank: 12,
    developer: "Megan Richards",
    role: "P. Manager",
    team: "Product",
    status: "paused",
    streak: "28",
    contributions: "29",
    avatar: "https://i.pravatar.cc/150?img=10",
    email: "megan.richards@example.com",
  },
  {
    rank: 13,
    developer: "Oliver Scott",
    role: "S. Manager",
    team: "Security",
    status: "active",
    streak: "37",
    contributions: "29",
    avatar: "https://i.pravatar.cc/150?img=12",
    email: "oliver.scott@example.com",
  },
  {
    rank: 14,
    developer: "Grace Allen",
    role: "M. Specialist",
    team: "Marketing",
    status: "active",
    streak: "30",
    contributions: "29",
    avatar: "https://i.pravatar.cc/150?img=16",
    email: "grace.allen@example.com",
  },
  {
    rank: 15,
    developer: "Noah Carter",
    role: "IT Specialist",
    team: "I. Technology",
    status: "paused",
    streak: "31",
    contributions: "29",
    avatar: "https://i.pravatar.cc/150?img=15",
    email: "noah.carter@example.com",
  },
  {
    rank: 16,
    developer: "Ava Perez",
    role: "Manager",
    team: "Sales",
    status: "active",
    streak: "29",
    contributions: "29",
    avatar: "https://i.pravatar.cc/150?img=20",
    email: "ava.perez@example.com",
  },
  {
    rank: 17,
    developer: "Liam Johnson",
    role: "Data Analyst",
    team: "Analysis",
    status: "active",
    streak: "28",
    contributions: "20",
    avatar: "https://i.pravatar.cc/150?img=33",
    email: "liam.johnson@example.com",
  },
  {
    rank: 18,
    developer: "Sophia Taylor",
    role: "QA Analyst",
    team: "Testing",
    status: "active",
    streak: "27",
    contributions: "19",
    avatar: "https://i.pravatar.cc/150?img=29",
    email: "sophia.taylor@example.com",
  },
  {
    rank: 19,
    developer: "Lucas Harris",
    role: "Administrator",
    team: "Information Technology",
    status: "paused",
    streak: "32",
    contributions: "290",
    avatar: "https://i.pravatar.cc/150?img=50",
    email: "lucas.harris@example.com",
  },
  {
    rank: 20,
    developer: "Mia Robinson",
    role: "Coordinator",
    team: "Operations",
    status: "active",
    streak: "26",
    contributions: "129",
    avatar: "https://i.pravatar.cc/150?img=45",
    email: "mia.robinson@example.com",
  },
];

export {columns, users, statusOptions};
