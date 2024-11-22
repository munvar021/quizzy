import {
  AiOutlineHome,
  AiOutlineCalculator,
  AiOutlineBarChart,
  AiOutlineRead,
  AiOutlineBulb,
  AiOutlineThunderbolt,
  AiOutlinePicture,
  AiOutlineClockCircle,
  AiOutlineGlobal,
  AiOutlineBook,
  AiOutlineUser,
  AiOutlineTeam,
  AiOutlineFile,
  AiOutlineCode,
  AiOutlineTool,
  AiOutlineBuild,
  AiOutlineApartment,
  AiOutlineLaptop,
  AiOutlineDatabase,
  AiOutlineCluster,
  AiOutlineExperiment,
  AiOutlineQuestion,
  AiOutlineTable,
  AiOutlineMail,
} from "react-icons/ai";

export const navigationItems = [
  {
    category: null,
    items: [{ id: 1, title: "Home", icon: AiOutlineHome, path: "/" }],
  },
  {
    category: "Aptitude",
    items: [
      {
        id: 2,
        title: "Arithmetic Aptitude",
        icon: AiOutlineCalculator,
        path: "/arithmetic",
      },
      {
        id: 3,
        title: "Data Interpretation",
        icon: AiOutlineBarChart,
        path: "/data",
      },
      { id: 4, title: "Verbal Ability", icon: AiOutlineRead, path: "/verbal" },
    ],
  },
  {
    category: "Reasoning",
    items: [
      {
        id: 5,
        title: "Logical Reasoning",
        icon: AiOutlineBulb,
        path: "/logical",
      },
      {
        id: 6,
        title: "Verbal Reasoning",
        icon: AiOutlineRead,
        path: "/verbal-reasoning",
      },
      {
        id: 7,
        title: "Nonverbal Reasoning",
        icon: AiOutlinePicture,
        path: "/nonverbal",
      },
    ],
  },
  {
    category: "General",
    items: [
      {
        id: 8,
        title: "Online Tests",
        icon: AiOutlineClockCircle,
        path: "/tests",
      },
      {
        id: 9,
        title: "Current Affairs",
        icon: AiOutlineGlobal,
        path: "/current-affairs",
      },
      {
        id: 10,
        title: "General Knowledge",
        icon: AiOutlineBook,
        path: "/knowledge",
      },
    ],
  },
  {
    category: "Interview",
    items: [
      { id: 11, title: "HR Interview", icon: AiOutlineUser, path: "/hr" },
      {
        id: 12,
        title: "Group Discussion",
        icon: AiOutlineTeam,
        path: "/group",
      },
      {
        id: 13,
        title: "Placement Papers",
        icon: AiOutlineFile,
        path: "/papers",
      },
      {
        id: 14,
        title: "Technical Interview",
        icon: AiOutlineCode,
        path: "/technical",
      },
    ],
  },
  {
    category: "Engineering",
    items: [
      {
        id: 15,
        title: "Mechanical Engineering",
        icon: AiOutlineTool,
        path: "/mechanical",
      },
      {
        id: 16,
        title: "Civil Engineering",
        icon: AiOutlineBuild,
        path: "/civil",
      },
      { id: 17, title: "ECE", icon: AiOutlineApartment, path: "/ece" }, // Changed from AiOutlineRadar
      { id: 18, title: "EEE", icon: AiOutlineThunderbolt, path: "/eee" },
      { id: 19, title: "CSE", icon: AiOutlineLaptop, path: "/cse" },
    ],
  },
  {
    category: "Programming",
    items: [
      { id: 20, title: "C Programming", icon: AiOutlineCode, path: "/c" },
      { id: 21, title: "C++", icon: AiOutlineCode, path: "/cpp" },
      { id: 22, title: "C#", icon: AiOutlineCode, path: "/csharp" },
      { id: 23, title: "Java", icon: AiOutlineCode, path: "/java" },
    ],
  },
  {
    category: "Technology",
    items: [
      { id: 24, title: "Database", icon: AiOutlineDatabase, path: "/database" },
      {
        id: 25,
        title: "Networking",
        icon: AiOutlineCluster,
        path: "/networking",
      },
    ],
  },
  {
    category: "Biology",
    items: [
      {
        id: 26,
        title: "Microbiology",
        icon: AiOutlineExperiment,
        path: "/microbiology",
      },
      {
        id: 27,
        title: "Biochemistry",
        icon: AiOutlineExperiment,
        path: "/biochemistry",
      },
      {
        id: 28,
        title: "Biotechnology",
        icon: AiOutlineExperiment,
        path: "/biotech",
      },
      {
        id: 29,
        title: "Biochemical",
        icon: AiOutlineExperiment,
        path: "/biochemical",
      },
    ],
  },
  {
    category: "Games",
    items: [
      {
        id: 30,
        title: "Puzzles Quiz",
        icon: AiOutlineQuestion, // Changed from AiOutlinePuzzle
        path: "/puzzles",
      },
      { id: 31, title: "Sudoku", icon: AiOutlineTable, path: "/sudoku" },
    ],
  },
  {
    category: null,
    items: [
      { id: 32, title: "Contact Us", icon: AiOutlineMail, path: "/contact" },
    ],
  },
];
