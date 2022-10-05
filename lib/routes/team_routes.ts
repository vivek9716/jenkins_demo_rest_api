import { Application, NextFunction, Request, Response } from 'express';
import { getTeams, getTeamById, addTeam, updateTeamById, deleteTeamById } from '../controllers/teamController';

export class TeamRoutes {
    public route(app: Application) {
        app.get('/api/team', (req: Request, res: Response, next: NextFunction) => {
            console.log(req.rawHeaders);
            getTeams(req, res, next);
        });
    }
}