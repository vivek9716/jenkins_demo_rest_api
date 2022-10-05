interface ITeam {
    id: Number;
    name: String;
    email: String;
    phone_number: String;
    gender: String;
    status: Boolean;
}

interface IGetTeamReq {
    params: {
        id: Number
    }
}

interface IAddTeamReq {
    body: {
        id: Number;
        name: String;
        email: String;
        phone_number: String;
        gender: String;
        status: Boolean;
    }

}

interface IUpdateTeamReq {
    body: {
        name: String;
        email: String;
        phone_number: String;
        gender: String;
        status: Boolean;
    },
    params: {
        id: Number;
    }
}

interface IDeleteTeamReq {
    params: {
        id: Number;
    }
}

export {
    ITeam,
    IGetTeamReq,
    IAddTeamReq,
    IUpdateTeamReq,
    IDeleteTeamReq
}