import builder from "./strategy"


let verifyCallback;
class GoogleOauth {
    permissions: string[];
    settings: {};
    name: string;           // api names
    displayName: string;    // frontend name
    logo: string;
    strategy: any;

    constructor({permissions, settings}) {
        this.permissions = permissions;
        this.settings = settings;
        this.name = "google";
        this.displayName = "Google";
        this.logo = "hee hee"
        verifyCallback = this.settings.verifyCallback;
        const {GOOGLE_CALLBACK_URL,GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET} = this.settings;
    }
}

export default {
    GoogleOauth, verifyCallback
}