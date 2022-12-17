import axios from 'axios';

const ATHLETES_URL =
  'https://sports.core.api.espn.com/v3/sports/football/nfl/athletes?limit=20000';
const ATHLETE_URL =
  'https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/athletes';
const DRAFT_URL =
  'https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons';

export const searchAthletes = async (query) => {
  const response = await axios.get(ATHLETES_URL);

  const athletes = await response.data.items;

  const filtered = athletes.filter(
    (athlete) =>
      athlete.fullName.toUpperCase().indexOf(query.toUpperCase()) !== -1
  );

  return filtered;
};

export const getAthleteAndDraft = async (id) => {
  let response = await axios.get(`${ATHLETE_URL}/${id}`);

  if (response.status === 404) {
    window.location = '/notfound';
  } else {
    const athlete = await response.data;

    let draftAthletes = [];
    if (athlete.draft) {
      draftAthletes = await getDraftAthletes(
        athlete.draft.year,
        athlete.draft.selection
      );
    }

    return { athlete, draftAthletes };
  }
};

export const getDraftAthletes = async (year, selection) => {
  const response = await axios.get(`${DRAFT_URL}/${year}/draft/rounds`);

  const draft = response.data.items;

  let allPicks = [];

  for (let round of draft) {
    allPicks = allPicks.concat(round.picks);
  }

  const draftPicks = allPicks.filter((pick) => pick.overall < selection);

  const draftAthletes = [];
  for (let pick of draftPicks) {
    const response = await axios.get(pick.athlete['$ref']);

    const athlete = response.data;

    const team = await axios.get(pick.team['$ref']);

    athlete.team = team.data;
    draftAthletes.push(athlete);
  }
  return draftAthletes;
};
