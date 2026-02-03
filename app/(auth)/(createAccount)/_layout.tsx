import { Stack} from "expo-router";

export default function CreateAccountLayout(){
    return(
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="CreateAccount"/>
            <Stack.Screen name="KYCFrontCapture"/>
            <Stack.Screen name="KYCFrontConfirm"/>
            <Stack.Screen name="KYCBackCapture"/>
            <Stack.Screen name="KYCBackConfirm"/>
            <Stack.Screen name="KYCTakeSelfieCapture"/>
            <Stack.Screen name="KYCTakeSelfieConfirm"/>
            <Stack.Screen name="kycVerificationModal"/>
        </Stack>
    );
}