import express from 'express';
import * as bodyParser from "body-parser";
import * as MySQLConnector from './mysql.connector';
import { CommonRoutes } from "../routes/common_routes";
import { TeamRoutes } from "../routes/team_routes";


class App {

   public app: express.Application;  
   private common_routes: CommonRoutes = new CommonRoutes();
   private team_routes: TeamRoutes = new TeamRoutes();

   constructor() {
      this.app = express();
      this.config();
      this.mySqlSetup();
      this.team_routes.route(this.app);
      this.common_routes.route(this.app);
   }

   private config(): void {
      this.app.use(bodyParser.json());
      this.app.use(bodyParser.urlencoded({ extended: false }));
   }

   private mySqlSetup(): void {
      MySQLConnector.init();
   }

}
export default new App().app;