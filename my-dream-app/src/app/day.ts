export interface Day {
  id: string;
  id_season: string;
  division: string;
  number: string;
  date: string;
  status_update?: any;
  status_save: string;
  day_type: string;
  cup_type: string;
  deleted: boolean;
}

export interface Season {
  id: string;
  years: string;
}

export interface Cup {
  id?: any;
  cup_type?: any;
  name?: any;
}
export interface Team1 {
  id: string;
  name: string;
  logo: string;
  logo_mini: string;
  id_division: string;
  slug: string;
  first_color: string;
  second_color: string;
  deleted: boolean;
}

export interface Team2 {
  id: string;
  name: string;
  logo: string;
  logo_mini: string;
  id_division: string;
  slug: string;
  first_color: string;
  second_color: string;
  deleted: boolean;
}

export interface Game {
  id: string;
  id_day: string;
  time: string;
  id_team_home: string;
  id_team_away: string;
  score_team_home: string;
  score_team_away: string;
  statut: string;
  game_type: string;
  diff: string;
  cup_type: string;
  tab_home?: any;
  tab_away?: any;
  Day: Day;
  Team1: Team1;
  Team2: Team2;
}
