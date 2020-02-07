import { builder } from "./strategy"


export class GoogleOauth {
    permissions: string[];
    settings: any;
    name: string;           // api names
    displayName: string;    // frontend name
    logo: string;
    strategy: any;

    constructor({permissions, settings}) {
        this.permissions = permissions;
        this.settings = settings;
        this.name = "google";
        this.displayName = "Google";
        this.logo = "hee hee" // FIXME:
        const {GOOGLE_CALLBACK_URL,GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET} = this.settings;
        this.strategy = builder(this.settings.verifyCallback, GOOGLE_CALLBACK_URL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET);
        
    }
}

export default {
    GoogleOauth
}