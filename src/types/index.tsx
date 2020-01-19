export interface IRobot {
  name: string;
  id: number;
  email: string;
}

export interface IAppStore {
  searchRobots: {
    searchField: string
  },
  requestRobots: {
    isPending: boolean,
    robots: IRobot[]
  }
}