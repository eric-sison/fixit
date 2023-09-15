export type User = {
  id: string;
  companyId: string
  email: string
  fullName: string;
  avatar: string;
  positionTitle: string;
  office?: string;
  department?: string;
  division?: string;
};

// const user = {
//   id: "",
//   fullName: "Eric C. Sison",
//   avatar: "",
//   positionTitle: "MIS Researcher",
//   office: "Office of the Administration",
//   department: "Information and Communications Technology Department",
//   division: "Software Development and Applications Division"
// } as User