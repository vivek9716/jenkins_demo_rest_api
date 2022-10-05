export const TeamQueries = {
  GetTeams: `
    SELECT
      id,
        name
    FROM sql6521584.teams as t
    WHERE
        1
    `,

  GetTeamsById: `
    SELECT
      id,
        name
    FROM sql6521584.teams as t
    WHERE
      id = ?
    `,

  AddTeam: `
    INSERT INTO sql6521584.teams (name)
      VALUES (?);
    `,

  UpdateTeamById: `
    UPDATE sql6521584.teams
    SET name = ?
    WHERE
      id = ?
    `,

  DeleteTeamById: `
    UPDATE sql6521584.teams
    SET status = 0
    WHERE
      id = ?
    `
};