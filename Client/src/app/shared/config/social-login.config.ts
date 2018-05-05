
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider } from 'angularx-social-login';
import { AuthServiceConfig } from 'angularx-social-login';
import { facebookClientId, googleClientId } from 'app/shared/config/constants';


export const socialLoginConfig = new AuthServiceConfig([
    {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider(facebookClientId)
    },
    {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider(googleClientId)
    },
])
