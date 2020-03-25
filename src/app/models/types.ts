export type MachineType = {
  title: string;
  manfr: string;
  year: string;
}

export type IssueType = {
  priority: string;
  machine: MachineType;
  issue: string;
  notes: string;
  cost: string;
}
