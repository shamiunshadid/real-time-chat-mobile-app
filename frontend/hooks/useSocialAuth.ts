import { useState } from "react"

import {useSSO} from "@clerk/clerk-expo"
import { Alert } from "react-native"


function useAuthSocial(){
    const [loadingStrategy, setLoadingStrategy] = useState<string | null>(null);
    const {startSSOFlow} = useSSO()

    const handleSocialAuth = async (strategy: "oauth_google" | "oauth_apple")=>{
        if(loadingStrategy) return;
        setLoadingStrategy(strategy)

        try {
            const {createdSessionId, setActive} = await startSSOFlow({strategy});
            // if(createdSessionId && setActive){
            //     await setActive({session: createdSessionId})
            // }
            if(!createdSessionId || !setActive){
                const provider = strategy === "oauth_google" ? "Google" : "Apple";
                Alert.alert("Sign-in incomplete", `${provider} sign-in did not complete. Please try again.`)
                return;
            }

        } catch (error) {
            console.log("Error in social auth", error);
            const provider = strategy === "oauth_google" ? "Google" : "Apple";
            Alert.alert("Error", `Failed to sign in with ${provider}. Please try again.`)
        }
        finally{
            setLoadingStrategy(null)
        }
    }

    return {
        handleSocialAuth,
        loadingStrategy
    }
}

export default useAuthSocial