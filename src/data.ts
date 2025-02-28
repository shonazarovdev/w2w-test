export interface StaffMember {
  id: number;
  fullName: string;
  department: "Кардиология" | "Хирургия";
  role: "Врач" | "Медсестра";
  isHead?: boolean;
}

export const doctors: StaffMember[] = [
  {
    id: 1,
    fullName: "Иван Иванов",
    department: "Кардиология",
    role: "Врач",
    isHead: true,
  },
  { id: 2, fullName: "Петр Петров", department: "Хирургия", role: "Врач" },
];

export const nurses: StaffMember[] = [
  {
    id: 3,
    fullName: "Анна Смирнова",
    department: "Кардиология",
    role: "Медсестра",
  },
  {
    id: 4,
    fullName: "Ольга Сидорова",
    department: "Хирургия",
    role: "Медсестра",
  },
];
